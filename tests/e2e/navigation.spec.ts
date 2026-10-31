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

  test("should scroll to anchor sections from navbar", async ({ page }) => {
    const projectsLink = page.locator("nav").getByRole("link", { name: /Projects/i });
    await projectsLink.click();

    const projectsHeading = page.locator("#projects").getByRole("heading", { name: /Selected Work/i });
    await expect(projectsHeading).toBeVisible();
  });

  test("should navigate to engineering notes blog page", async ({ page }) => {
    const blogLink = page.locator("nav").getByRole("link", { name: /Notes/i });
    await blogLink.click();

    await expect(page).toHaveURL(/\/blog/);
    await expect(page.getByRole("heading", { name: /Architecture & Insights/i })).toBeVisible();
  });

  test("should navigate to JAB LEATHER case study", async ({ page }) => {
    const caseStudyBtn = page.getByRole("link", { name: /Case Study/i }).first();
    await caseStudyBtn.click();

    await expect(page).toHaveURL(/\/projects\/jab-leather/);
    await expect(page.getByRole("heading", { name: /JAB LEATHER/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Architecture Overview/i })).toBeVisible();
  });

  test("should open command palette on shortcut trigger", async ({ page }) => {
    await page.keyboard.press("Control+k");
    const cmdInput = page.getByPlaceholder(/Type a command, project, or section/i);
    await expect(cmdInput).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(cmdInput).not.toBeVisible();
  });
});
