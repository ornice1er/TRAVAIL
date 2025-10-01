from playwright.sync_api import sync_playwright, expect

def run_verification():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            # Navigate to the page
            page.goto("http://localhost:4200/ministere/secretariat-general", timeout=60000)

            # Wait for the hero section to be visible to ensure the page has loaded
            hero_section = page.locator("h1:has-text('Secrétariat Général du Ministère')")
            expect(hero_section).to_be_visible(timeout=30000)

            # Take a full-page screenshot
            page.screenshot(path="jules-scratch/verification/secretariat-general-redesign.png", full_page=True)

            print("Screenshot captured successfully.")

        except Exception as e:
            print(f"An error occurred: {e}")

        finally:
            browser.close()

if __name__ == "__main__":
    run_verification()