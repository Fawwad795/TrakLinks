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
  hasAnalytics: true
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
    hasAnalytics: false
  },
  {
    id: "3",
    title: "Portfolio Website",
    shortUrl: "traklinks.io/P0rtF",
    destination: "https://myportfolio.com",
    createdAt: "2023-07-10T09:15:00Z",
    clicks: 0,
    visits: 0,
    hasAnalytics: false
  }
];

// All links combined
export const allLinks = [linkWithAnalytics, ...linksWithoutAnalytics];

// Clicks over time data
export const clicksTimeData = [
  { date: "Jun 12", clicks: 0 },
  { date: "Jun 15", clicks: 0 },
  { date: "Jun 17", clicks: 0 },
  { date: "Jun 20", clicks: 0 },
  { date: "Jun 23", clicks: 0 },
  { date: "Jun 26", clicks: 0 },
  { date: "Jun 29", clicks: 0 },
  { date: "Jul 1", clicks: 0 },
  { date: "Jul 3", clicks: 0 },
  { date: "Jul 5", clicks: 0 },
  { date: "Jul 7", clicks: 0 },
  { date: "Jul 10", clicks: 5 }
];

// Summary stats
export const summaryStats = {
  clicks: 5,
  visitors: 4,
  referrers: 0
};

// Device data
export const deviceData = [
  { name: "Mobile", value: 5 }
];

// OS data
export const osData = [
  { name: "Android", value: 2 },
  { name: "iOS", value: 0 },
  { name: "Windows", value: 0 },
  { name: "Mac", value: 0 },
  { name: "Linux", value: 0 }
];

// Browser data
export const browserData = [
  { name: "Safari", value: 3 },
  { name: "Chrome", value: 2 },
  { name: "Firefox", value: 0 },
  { name: "Opera", value: 0 },
  { name: "Edge", value: 0 },
  { name: "Unknown", value: 0 }
];

// Country data
export const countryData = [
  { 
    country: "Pakistan", 
    flag: "🇵🇰", 
    clicks: 5, 
    visits: 4, 
    percentage: 100 
  }
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
  countryData
}; 