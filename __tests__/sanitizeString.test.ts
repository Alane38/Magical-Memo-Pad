import { sanitizeString } from "@/lib/purify";

describe("sanitizeString", () => {
  it("should return the same string if it is plain text", () => {
    const input = "Hello, World!";
    const output = sanitizeString(input);
    expect(output).toBe(input);
  });

  it("should strip HTML tags", () => {
    const input = "<div>Hello</div>";
    const output = sanitizeString(input);
    expect(output).toBe("Hello"); // Should remove the div tag
  });

  it("should handle empty strings", () => {
    const input = "";
    const output = sanitizeString(input);
    expect(output).toBe(""); // Should return an empty string
  });

  it("should remove script tags but keep the text", () => {
    const input = "<script>alert('XSS')</script>";
    const output = sanitizeString(input);
    expect(output).toBe(""); // Should remove the script tag
  })
  
  it("should handle strings with allowed characters only", () => {
    const input = "Hello & welcome!";
    const output = sanitizeString(input);
    expect(output).toBe("Hello & welcome!"); // Should keep special characters
  });
});
