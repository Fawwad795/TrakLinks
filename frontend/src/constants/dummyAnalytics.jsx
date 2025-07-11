// Dummy analytics data for the dashboard

// Link with analytics data
export const linkWithAnalytics = {
  id: "1",
  title: "YouTube Channel",
  shortUrl: "traklinks.io/M3RmH",
  destination: "https://www.youtube.com/channel/UC1234567890",
  createdAt: "2023-07-01T10:30:00Z",
  clicks: 5,
  visits: 4,
  hasAnalytics: true,
};

// Links without analytics data
export const linksWithoutAnalytics = [
  {
    id: "2",
    title: "Twitter Profile",
    shortUrl: "traklinks.io/Tw1tR",
    destination: "https://twitter.com/username",
    createdAt: "2023-07-05T14:20:00Z",
    clicks: 0,
    visits: 0,
    hasAnalytics: false,
  },
  {
    id: "3",
    title: "Portfolio Website",
    shortUrl: "traklinks.io/P0rtF",
    destination: "https://myportfolio.com",
    createdAt: "2023-07-10T09:15:00Z",
    clicks: 0,
    visits: 0,
    hasAnalytics: false,
  },
];

// All links combined
export const allLinks = [linkWithAnalytics, ...linksWithoutAnalytics];

// Clicks over time data
export const clicksTimeData = [
  { date: "Jun 12", clicks: 0 },
  { date: "Jun 15", clicks: 0 },
  { date: "Jun 17", clicks: 0 },
  { date: "Jun 20", clicks: 4 },
  { date: "Jun 23", clicks: 0 },
  { date: "Jun 26", clicks: 0 },
  { date: "Jun 29", clicks: 0 },
  { date: "Jul 1", clicks: 0 },
  { date: "Jul 3", clicks: 0 },
  { date: "Jul 5", clicks: 0 },
  { date: "Jul 7", clicks: 0 },
  { date: "Jul 10", clicks: 5 },
];

// Summary stats
export const summaryStats = {
  clicks: 5,
  visitors: 4,
  referrers: 0,
};

// Device data
export const deviceData = [
  { name: "Mobile", value: 5 },
  { name: "Desktop", value: 4 },
  { name: "Tablet", value: 3 },
  { name: "Unknown", value: 2 },
];

// OS data
export const osData = [
  { name: "Android", value: 2 },
  { name: "iOS", value: 3 },
  { name: "Windows", value: 1 },
  { name: "Mac", value: 2 },
  { name: "Linux", value: 5 },
];

// Browser data
export const browserData = [
  { name: "Safari", value: 3 },
  { name: "Chrome", value: 2 },
  { name: "Firefox", value: 5 },
  { name: "Opera", value: 4 },
  { name: "Edge", value: 3 },
  { name: "Unknown", value: 2 },
];

// Country data
export const countryData = [
  {
    country: "Pakistan",
    countryCode: "PAK", // ISO_A3 code for Pakistan
    flag: "🇵🇰",
    clicks: 9,
    visits: 4,
    percentage: 90.0,
  },
  {
    country: "United States",
    countryCode: "USA", // ISO_A3 code for United States
    flag: "🇺🇸",
    clicks: 1,
    visits: 1,
    percentage: 10.0,
  },
];

export default {
  linkWithAnalytics,
  linksWithoutAnalytics,
  allLinks,
  clicksTimeData,
  summaryStats,
  deviceData,
  osData,
  browserData,
  countryData,
};
