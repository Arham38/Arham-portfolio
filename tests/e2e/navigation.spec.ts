import { test, expect } from "@playwright/test";

test.describe("Portfolio Navigation & Accessibility", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should load home page with valid SEO title and skip link", async ({ page }) => {
    await expect(page).toHaveTitle(/Muhammad Arham/);

    const skipLink = page.getByRole("link", { name: /Skip to main content/i });
    await expect(skipLink).toHaveAttribute("href", "#main-content");
  });

  test("should scroll to anchor sections from navbar", async ({ page, isMobile }) => {
    if (isMobile) {
      await page.getByRole("button", { name: /Open menu/i }).click();
    }
    const projectsLink = page.getByRole("link", { name: "Projects" }).first();
    await projectsLink.click();

    const projectsHeading = page.locator("#projects").getByRole("heading", { name: /Projects/i });
    await expect(projectsHeading).toBeVisible();
  });

  test("should navigate to experience section", async ({ page, isMobile }) => {
    if (isMobile) {
      await page.getByRole("button", { name: /Open menu/i }).click();
    }
    const experienceLink = page.getByRole("link", { name: "Experience" }).first();
    await experienceLink.click();

    const experienceHeading = page.locator("#experience").getByRole("heading", { name: /Experience/i });
    await expect(experienceHeading).toBeVisible();
  });

  test("should navigate to skills section", async ({ page, isMobile }) => {
    if (isMobile) {
      await page.getByRole("button", { name: /Open menu/i }).click();
    }
    const skillsLink = page.getByRole("link", { name: "Skills" }).first();
    await skillsLink.click();

    const skillsHeading = page.locator("#skills").getByRole("heading", { name: /Skills/i });
    await expect(skillsHeading).toBeVisible();
  });

  test("should navigate to contact section", async ({ page, isMobile }) => {
    if (isMobile) {
      await page.getByRole("button", { name: /Open menu/i }).click();
    }
    const contactLink = page.getByRole("link", { name: "Contact" }).first();
    await contactLink.click();

    const contactHeading = page.locator("#contact").getByRole("heading", { name: /Contact/i });
    await expect(contactHeading).toBeVisible();
  });

  test("should cycle project images using next and prev buttons", async ({ page }) => {
    const nextBtn = page.getByRole("button", { name: /Next image for ShopHub/i });
    await expect(nextBtn).toBeVisible();

    // Click next to switch to second image
    await nextBtn.click();

    // Click prev to switch back to first image
    const prevBtn = page.getByRole("button", { name: /Previous image for ShopHub/i });
    await prevBtn.click();
  });
});
