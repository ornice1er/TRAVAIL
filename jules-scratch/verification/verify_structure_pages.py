import os
from playwright.sync_api import sync_playwright, Page, expect

# List of pages to verify
pages_to_verify = [
    ("inspection-generale", "/ministere/inspection-generale"),
    ("direction-systemes-information", "/ministere/direction-systemes-information"),
    ("direction-generale-travail", "/ministere/direction-generale-travail"),
    ("direction-generale-fonction-publique", "/ministere/direction-generale-fonction-publique"),
    ("direction-renforcement-capacites", "/ministere/direction-renforcement-capacites"),
    ("directions-departementales", "/ministere/directions-departementales"),
    ("cellule-suivi-reformes", "/ministere/cellule-suivi-reformes"),
]

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    page.set_viewport_size({"width": 1280, "height": 800})

    # Create directory for screenshots if it doesn't exist
    os.makedirs("jules-scratch/verification", exist_ok=True)

    try:
        for name, url_path in pages_to_verify:
            print(f"Verifying page: {name}")

            # Navigate to the page
            page.goto(f"http://localhost:4200{url_path}")

            # Wait for the main heading of the page to be visible
            expect(page.locator("h1").first).to_be_visible()

            # Find the "Fiches Métiers" section
            fiches_metiers_section_header = page.get_by_role("heading", name="Fiches Métiers")
            expect(fiches_metiers_section_header).to_be_visible()

            # Scroll to the section
            fiches_metiers_section_header.scroll_into_view_if_needed()
            page.wait_for_timeout(500) # wait for scroll animation

            # Check for the presence of our reusable component
            metiers_list_component = page.locator("app-metiers-list")
            expect(metiers_list_component).to_be_visible()

            # Verify that either job cards or the "no jobs" message is visible
            job_cards_locator = metiers_list_component.locator(".card")
            no_jobs_message_locator = metiers_list_component.get_by_text("Aucun métier à afficher")

            expect(job_cards_locator.first.or_(no_jobs_message_locator)).to_be_visible()

            # Take a screenshot
            screenshot_path = f"jules-scratch/verification/{name}.png"
            page.screenshot(path=screenshot_path)
            print(f"Screenshot taken for {name} page at {screenshot_path}")

    except Exception as e:
        print(f"An error occurred: {e}")
        # Take a screenshot on failure for debugging
        page.screenshot(path="jules-scratch/verification/error_screenshot.png")
    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)