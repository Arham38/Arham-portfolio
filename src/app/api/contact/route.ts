import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

// In-memory sliding window rate limiter: 5 requests per hour per IP
interface RateLimitEntry {
  count: number;
  firstRequest: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  // Clean old entries if map grows large using forEach (compatible with all targets)
  if (rateLimitMap.size > 500) {
    rateLimitMap.forEach((val, key) => {
      if (now - val.firstRequest > WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    });
  }

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (now - entry.firstRequest > WINDOW_MS) {
    // Window expired, reset
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return { allowed: true, remaining: MAX_REQUESTS - 1 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0 };
  }

  entry.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - entry.count };
}

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),
  email: z
    .string()
    .email("Please provide a valid email address")
    .max(150, "Email cannot exceed 150 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),
  honeypot: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    // Extract IP address for rate limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "127.0.0.1";

    const { allowed, remaining } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        {
          error: "Rate limit exceeded. You can send up to 5 messages per hour.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": "3600",
            "X-RateLimit-Limit": MAX_REQUESTS.toString(),
            "X-RateLimit-Remaining": "0",
          },
        }
      );
    }

    const body = await req.json();

    // Honeypot check (anti-bot)
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Return 200 without sending to fool automated spambots
      return NextResponse.json({
        success: true,
        message: "Message delivered successfully.",
      });
    }

    // Validate schema
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          error: "Validation failed. Please check the form inputs.",
          fields: errors,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = validationResult.data;

    // Resend Email Delivery
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "muhammadarham0372@gmail.com";

    if (resendApiKey) {
      const resend = new Resend(resendApiKey);

      const emailResponse = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [recipientEmail],
        replyTo: email,
        subject: `New Portfolio Message from ${name}`,
        text: `From: ${name} (${email})\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; background: #0B0D12; color: #E8EAF0; border-radius: 8px;">
            <h2 style="color: #6C63FF; margin-top: 0;">New Portfolio Message</h2>
            <p><strong>Sender:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #6C63FF;">${email}</a></p>
            <div style="background: #12151C; padding: 16px; border-radius: 6px; border: 1px solid #232938; margin-top: 16px;">
              <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #8B93A7; margin-top: 24px;">Sent via arham-portfolio contact form</p>
          </div>
        `,
      });

      if (emailResponse.error) {
        console.error("Resend API error:", emailResponse.error);
        return NextResponse.json(
          { error: "Failed to dispatch email via Resend provider." },
          { status: 502 }
        );
      }
    } else {
      // Simulation mode when API key is not configured locally
      console.log("-----------------------------------------");
      console.log("[CONTACT_FORM_SUBMISSION] (Dev/Simulation mode)");
      console.log(`From: ${name} <${email}>`);
      console.log(`Message: ${message}`);
      console.log("-----------------------------------------");
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received.",
      },
      {
        headers: {
          "X-RateLimit-Limit": MAX_REQUESTS.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error("Unhandled error in /api/contact:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your message." },
      { status: 500 }
    );
  }
}
