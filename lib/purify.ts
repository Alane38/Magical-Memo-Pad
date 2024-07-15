import DOMPurify from "dompurify";

export function sanitizeString(str: string): string {
  // Ensure this is running in the browser
  if (typeof window === "undefined") {
    return ""; // Return a safe default
  }

  // Check if the input contains script tags or any other HTML tags
  if (/<script[^>]*>.*?<\/script>/i.test(str)) {
    return ""; // Return an empty string if a script tag is found
  }

  // Sanitize remaining input
  return DOMPurify.sanitize(str, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
}


export function sanitizeUrl(url: string): string {
  if (!url || url === "/") {
    return "/";
  }

  try {
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "http://localhost:3000"; // Updated
    const sanitizedUrl = new URL(url, baseUrl);

    if (!["http:", "https:"].includes(sanitizedUrl.protocol)) {
      return "/";
    }

    return sanitizedUrl.href;
  } catch (e) {
    console.error("Invalid URL:", url);
    return "/";
  }
}
