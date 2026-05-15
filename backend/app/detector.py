from playwright.sync_api import sync_playwright


def detect_image(file_path: str):
    return run(file_path, "https://undetectable.ai/ai-image-detector")


def detect_video(file_path: str):
    return run(file_path, "https://undetectable.ai/ai-video-detector")


def run(file_path: str, url: str):
    with sync_playwright() as p:
        browser = p.chromium.launch(
            headless=False
        )

        page = browser.new_page()

        page.goto(url, wait_until="domcontentloaded")

        if "video" in url:

            page.wait_for_timeout(5000)

            page.locator(
                "input[type='file'][accept*='video']"
            ).set_input_files(file_path)

            page.wait_for_timeout(25000)

        result = page.locator("body").inner_text()

        if "likely created by AI" in result:
            final_result = "fake"
        elif "likely real" in result:
            final_result = "real"
        else:
            final_result = "unknown"

        browser.close()

        return {
            "prediction": final_result
        }