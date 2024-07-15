import { sanitizeUrl } from "@/lib/purify";

describe("sanitizeUrl", () => {
  it("should return the same URL if it is valid", () => {
    const url = "https://example.com";
    const sanitized = sanitizeUrl(url);
    expect(sanitized === url || sanitized === url + "/").toBe(true);
  });

  it("should return the origin URL if it is invalid", () => {
    const url = "javascript:alert('XSS')";
    expect(sanitizeUrl(url)).toBe("/");
  });

  it("should return the origin URL if it is empty", () => {
    const url = "";
    expect(sanitizeUrl(url)).toBe("/");
  });

  it("should return the origin URL if it is homepage", () => {
    const url = "/";
    expect(sanitizeUrl(url)).toBe("/");
  })

  it("should handle relative paths correctly", () => {
    const url = "/contact";
    expect(sanitizeUrl(url)).toBe("http://localhost/contact");
  });

  it("should return the origin URL if it has an invalid scheme", () => {
    const url = "ftp://example.com";
    expect(sanitizeUrl(url)).toBe("/");
  });
});
