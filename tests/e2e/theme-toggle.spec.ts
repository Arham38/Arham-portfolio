import { test, expect } from "@playwright/test";

test.describe("Dark-First Design System & Theme Toggle", () => {
  test("should load in dark mode by default and switch to light mode cleanly", async ({ page, isMobile }) => {
    await page.goto("/");

    const html = page.locator("html");
    await expect(html).toHaveClass(/dark/);

    // Locate visible theme toggle button
    const themeBtn = isMobile
      ? page.getByRole("button", { name: /Switch to light mode/i }).last()
      : page.getByRole("button", { name: /Switch to light mode/i }).first();
    await themeBtn.click();

    // Verify transition to light mode
    await expect(html).toHaveClass(/light/);

    // Toggle back to dark mode
    const darkBtn = isMobile
      ? page.getByRole("button", { name: /Switch to dark mode/i }).last()
      : page.getByRole("button", { name: /Switch to dark mode/i }).first();
    await darkBtn.click();

    await expect(html).toHaveClass(/dark/);
  });
});
