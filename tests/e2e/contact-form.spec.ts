import { test, expect } from "@playwright/test";

test.describe("Contact Form & Honeypot Validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/#contact");
  });

  test("should display validation errors when submitting empty form", async ({ page }) => {
    const submitBtn = page.getByRole("button", { name: /Send Message/i });
    await submitBtn.click();

    await expect(page.getByText(/Name must be at least 2 characters/i)).toBeVisible();
    await expect(page.getByText(/Please enter a valid email address/i)).toBeVisible();
    await expect(page.getByText(/Message must be at least 10 characters/i)).toBeVisible();
  });

  test("should display error on invalid email syntax", async ({ page }) => {
    await page.getByLabel("Name", { exact: true }).fill("Jane Recruiter");
    await page.getByLabel("Email", { exact: true }).fill("invalid-email-string");
    await page.getByLabel("Message", { exact: true }).fill("We have an internship position open for you.");

    const submitBtn = page.getByRole("button", { name: /Send Message/i });
    await submitBtn.click();

    await expect(page.getByText(/Please enter a valid email address/i)).toBeVisible();
  });

  test("should successfully transmit valid message and transition to success view", async ({ page }) => {
    // Intercept /api/contact to simulate successful server response
    await page.route("**/api/contact", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          message: "Thank you! Your message has been received.",
        }),
      });
    });

    await page.getByLabel("Name", { exact: true }).fill("Senior Engineering Manager");
    await page.getByLabel("Email", { exact: true }).fill("manager@techcompany.com");
    await page.getByLabel("Message", { exact: true }).fill("We were impressed by your PostgreSQL RLS architecture case study.");

    const submitBtn = page.getByRole("button", { name: /Send Message/i });
    await submitBtn.click();

    await expect(page.getByText(/Message Sent/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /Send Another Message/i })).toBeVisible();
  });

  test("should have invisible honeypot field for bot mitigation", async ({ page }) => {
    const honeypot = page.locator('input[name="honeypot"]');
    await expect(honeypot).toHaveAttribute("tabindex", "-1");
  });
});
