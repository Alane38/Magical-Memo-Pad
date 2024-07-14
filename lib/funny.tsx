export function createRainbowText(text: string) {
  return text.split("").map((char, index) => (
    <span key={index} style={{ color: `hsl(${(index + 150) % 360}, 65%, 50%)` }}>
      {char}
    </span>
  ))
}
