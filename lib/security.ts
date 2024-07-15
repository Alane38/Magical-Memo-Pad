"use server"

let requestCounter: Record<string, number> = {};
let resetTimer: NodeJS.Timeout;

const requestLimitPerIp = 100; // Max requests per time
const requestLimitGlobal = 1000; // Max requests per time
const time = 60 * 1000; // Time in milliseconds (1 minute)

// Function to reset request counts
const resetCounters = () => {
  requestCounter = {};
  clearTimeout(resetTimer);
  resetTimer = setTimeout(resetCounters, time);
};
resetCounters(); // Start the timer

export async function rateLimit(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0] || (req.headers.get('cf-connecting-ip') ?? '127.0.0.1').split(',')[0]
  const clientIp = ({ ip }).ip;

  requestCounter[clientIp] = requestCounter[clientIp] || 0;

  if (requestCounter[clientIp] >= requestLimitPerIp) {
    console.log('Rate limit exceeded for IP:', clientIp);
    return true; // Rate limit exceeded 🚫
  } else if (Object.values(requestCounter).reduce((a, b) => a + b, 0) >= requestLimitGlobal) {
    console.log('Global rate limit exceeded');
    return true; // Rate limit exceeded 🚫
  } else {
    // console.log('Request count for IP:', clientIp, '=', ++requestCounter[clientIp]);
    return null; // Proceed with the request ✅
  }
}