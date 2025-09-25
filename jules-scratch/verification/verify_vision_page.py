from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the "Notre Vision" page
        page.goto("http://localhost:4201/ministere/notre-vision")

        # Wait for the main content to be visible to ensure the page has loaded
        expect(page.locator("h2:has-text('Vision')")).to_be_visible()

        # Take a screenshot for visual confirmation
        page.screenshot(path="jules-scratch/verification/verification.png")

        browser.close()

if __name__ == "__main__":
    run_verification()