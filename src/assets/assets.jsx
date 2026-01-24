import logo from "./NiceLogo.png";
import { CiLinkedin } from "react-icons/ci";
import { CgYoutube, CgInstagram, CgFacebook, CgTwitter } from "react-icons/cg";
import { Music2, Pin, Camera, Gamepad2, MessageCircle } from "lucide-react";
import ctabg from "./cta.png";
import image_1 from "./image_1.jpg";
import image_2 from "./image_2.jpg";
import image_3 from "./image_3.jpg";
import image_4 from "./image_4.jpg";

import user_profile from "./default_pic.png";

// ASSETS

export const assets = { logo, user_profile, ctabg };

//  SOCIAL MEDIA BASE LINKS

export const socialMediaLinks = {
  youtube: "https://www.youtube.com",
  instagram: "https://www.instagram.com",
  tiktok: "https://www.tiktok.com",
  facebook: "https://www.facebook.com",
  twitter: "https://www.twitter.com",
  linkedin: "https://www.linkedin.com/in",
  pinterest: "https://www.pinterest.com",
  snapchat: "https://www.snapchat.com/add",
  twitch: "https://www.twitch.tv",
  discord: "https://discord.com/users",
};

export const ageRanges = [
  { value: "13-17", label: "13-17 (Teens)" },
  { value: "18-24", label: "18-24 (Young Adults)" },
  { value: "25-34", label: "25-34" },
  { value: "35-44", label: "35-44" },
  { value: "45-54", label: "45-54" },
  { value: "55-64", label: "55-64" },
  { value: "65-74", label: "65-74" },
  { value: "75+", label: "75+" },
  { value: "mixed", label: "Mixed / All Ages" },
];

//   PROFILE LINK BUILDER

export function getProfileLink(platform, username) {
  if (!platform || !username) return null;

  const key = platform.toLowerCase();
  const base = socialMediaLinks[key];
  if (!base) return null;

  const cleanUsername = username.replace(/^@/, "");

  switch (key) {
    case "linkedin":
    case "snapchat":
    case "discord":
      return `${base}/${cleanUsername}`;

    case "youtube":
      return `https://www.youtube.com/@${cleanUsername}`;

    default:
      return `${base}/${cleanUsername}`;
  }
}

export const countries = [
  { value: "", label: "Select a country" },
  { value: "Antigua and Barbuda", label: "Antigua and Barbuda" },
  { value: "Bahamas", label: "Bahamas" },
  { value: "Barbados", label: "Barbados" },
  { value: "Belize", label: "Belize" },
  { value: "Cuba", label: "Cuba" },
  { value: "Dominica", label: "Dominica" },
  { value: "Dominican Republic", label: "Dominican Republic" },
  { value: "Grenada", label: "Grenada" },
  { value: "Guyana", label: "Guyana" },
  { value: "Haiti", label: "Haiti" },
  { value: "Jamaica", label: "Jamaica" },
  { value: "Saint Kitts and Nevis", label: "Saint Kitts and Nevis" },
  { value: "Saint Lucia", label: "Saint Lucia" },
  {
    value: "Saint Vincent and the Grenadines",
    label: "Saint Vincent and the Grenadines",
  },
  { value: "Suriname", label: "Suriname" },
  { value: "Trinidad & Tobago", label: "Trinidad & Tobago" },
  { value: "Cayman Islands", label: "Cayman Islands" },
  { value: "Other", label: "Other" },
];

export const platforms = [
  { value: "youtube", label: "YouTube" },
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
  { value: "facebook", label: "Facebook" },
  { value: "twitter", label: "Twitter / X" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "pinterest", label: "Pinterest" },
  { value: "snapchat", label: "Snapchat" },
  { value: "twitch", label: "Twitch" },
  { value: "discord", label: "Discord" },
];

export const niches = [
  { value: "", label: "Select a niche" },
  { value: "tech", label: "Tech & Technology" },
  { value: "gaming", label: "Gaming" },
  { value: "fashion", label: "Fashion & Style" },
  { value: "beauty", label: "Beauty & Makeup" },
  { value: "fitness", label: "Fitness & Health" },
  { value: "food", label: "Food & Cooking" },
  { value: "travel", label: "Travel & Adventure" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "entertainment", label: "Entertainment" },
  { value: "music", label: "Music" },
  { value: "sports", label: "Sports" },
  { value: "business", label: "Business & Finance" },
  { value: "education", label: "Education" },
  { value: "art", label: "Art & Design" },
  { value: "photography", label: "Photography" },
  { value: "pets", label: "Pets & Animals" },
  { value: "comedy", label: "Comedy & Humor" },
  { value: "motivation", label: "Motivation & Inspiration" },
  { value: "news", label: "News & Media" },
  { value: "diy", label: "DIY & Crafts" },
  { value: "automotive", label: "Automotive" },
  { value: "real-estate", label: "Real Estate" },
  { value: "parenting", label: "Parenting & Family" },
  { value: "spiritual", label: "Spiritual & Religion" },
  { value: "other", label: "Other" },
];

//   ICONS

export const platformIcons = {
  youtube: (
    <CgYoutube color="#FF0000" className="bg-[#FF000010] size-10 p-2 rounded" />
  ),
  instagram: (
    <CgInstagram
      color="#E1306C"
      className="bg-[#E1306C10] size-10 p-2 rounded"
    />
  ),
  tiktok: (
    <Music2 color="#000000" className="bg-[#00000010] size-10 p-2 rounded" />
  ),
  facebook: (
    <CgFacebook
      color="#1877F2"
      className="bg-[#1877F210] size-10 p-2 rounded"
    />
  ),
  twitter: (
    <CgTwitter color="#1DA1F2" className="bg-[#1DA1F210] size-10 p-2 rounded" />
  ),
  linkedin: (
    <CiLinkedin
      color="#0077B5"
      className="bg-[#0077B510] size-10 p-2 rounded"
    />
  ),
  pinterest: (
    <Pin color="#E60023" className="bg-[#E6002310] size-10 p-2 rounded" />
  ),
  snapchat: (
    <Camera color="#FFFC00" className="bg-[#FFFC0010] size-10 p-2 rounded" />
  ),
  twitch: (
    <Gamepad2 color="#9146FF" className="bg-[#9146FF10] size-10 p-2 rounded" />
  ),
  discord: (
    <MessageCircle
      color="#5865F2"
      className="bg-[#5865F210] size-10 p-2 rounded"
    />
  ),
};

//   USERS

export const dummyUsers = [
  {
    id: "user_1",
    email: "islandcreator@example.com",
    name: "Marvin Pierre",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    role: "seller",
    rating: 4.8,
    totalSales: 12,
    verified: true,
    createdAt: "2025-11-21T18:32:10.000Z",
    updatedAt: "2025-11-21T18:32:10.000Z",
  },
  {
    id: "user_2",
    email: "beachvibes@example.com",
    name: "Renee Charles",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    role: "seller",
    rating: 4.4,
    totalSales: 6,
    verified: false,
    createdAt: "2025-11-21T18:34:50.000Z",
    updatedAt: "2025-11-21T18:35:00.000Z",
  },
  {
    id: "user_3",
    email: "calypsoking@example.com",
    name: "Darren Joseph",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    role: "seller",
    rating: 4.9,
    totalSales: 18,
    verified: true,
    createdAt: "2025-11-21T18:40:22.000Z",
    updatedAt: "2025-11-21T18:40:22.000Z",
  },
  {
    id: "user_4",
    email: "islandgirl@example.com",
    name: "Tara Singh",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    role: "seller",
    rating: 4.6,
    totalSales: 9,
    verified: true,
    createdAt: "2025-11-21T18:50:11.000Z",
    updatedAt: "2025-11-21T18:50:11.000Z",
  },
  {
    id: "user_5",
    email: "gamerpro@example.com",
    name: "Marcus Thompson",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "seller",
    rating: 4.9,
    totalSales: 24,
    verified: true,
    createdAt: "2025-11-22T09:15:30.000Z",
    updatedAt: "2025-11-22T09:15:30.000Z",
  },
  {
    id: "user_6",
    email: "fashionista@example.com",
    name: "Keisha Williams",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "seller",
    rating: 4.7,
    totalSales: 15,
    verified: true,
    createdAt: "2025-11-22T10:20:45.000Z",
    updatedAt: "2025-11-22T10:20:45.000Z",
  },
  {
    id: "user_7",
    email: "musicvibes@example.com",
    name: "Andre Baptiste",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    role: "seller",
    rating: 4.8,
    totalSales: 20,
    verified: true,
    createdAt: "2025-11-22T11:30:12.000Z",
    updatedAt: "2025-11-22T11:30:12.000Z",
  },
  {
    id: "user_8",
    email: "lifestyleblogger@example.com",
    name: "Samantha Brown",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    role: "seller",
    rating: 4.5,
    totalSales: 8,
    verified: false,
    createdAt: "2025-11-22T12:45:30.000Z",
    updatedAt: "2025-11-22T12:45:30.000Z",
  },
  {
    id: "user_9",
    email: "beautyguru@example.com",
    name: "Aaliyah Roberts",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    role: "seller",
    rating: 4.9,
    totalSales: 22,
    verified: true,
    createdAt: "2025-11-22T13:10:22.000Z",
    updatedAt: "2025-11-22T13:10:22.000Z",
  },
  {
    id: "user_10",
    email: "comedyking@example.com",
    name: "Kyle Mohammed",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
    role: "seller",
    rating: 4.8,
    totalSales: 17,
    verified: true,
    createdAt: "2025-11-22T14:25:50.000Z",
    updatedAt: "2025-11-22T14:25:50.000Z",
  },
  {
    id: "user_11",
    email: "bizpro@example.com",
    name: "Richard Clarke",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    role: "seller",
    rating: 4.6,
    totalSales: 11,
    verified: true,
    createdAt: "2025-11-22T15:40:10.000Z",
    updatedAt: "2025-11-22T15:40:10.000Z",
  },
  {
    id: "user_12",
    email: "fitnessgirl@example.com",
    name: "Jade Campbell",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    role: "seller",
    rating: 4.9,
    totalSales: 19,
    verified: true,
    createdAt: "2025-11-22T16:15:35.000Z",
    updatedAt: "2025-11-22T16:15:35.000Z",
  },
  {
    id: "user_13",
    email: "cookingmama@example.com",
    name: "Patricia Johnson",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    role: "seller",
    rating: 4.7,
    totalSales: 13,
    verified: false,
    createdAt: "2025-11-23T08:30:20.000Z",
    updatedAt: "2025-11-23T08:30:20.000Z",
  },
  {
    id: "user_14",
    email: "photographer@example.com",
    name: "Daniel Lewis",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    role: "seller",
    rating: 4.8,
    totalSales: 16,
    verified: true,
    createdAt: "2025-11-23T09:45:15.000Z",
    updatedAt: "2025-11-23T09:45:15.000Z",
  },
  {
    id: "user_15",
    email: "teacher@example.com",
    name: "Karen Adams",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
    role: "seller",
    rating: 4.8,
    totalSales: 14,
    verified: true,
    createdAt: "2025-11-23T10:20:40.000Z",
    updatedAt: "2025-11-23T10:20:40.000Z",
  },
  {
    id: "user_16",
    email: "sportsfan@example.com",
    name: "Christopher Walker",
    image: "https://randomuser.me/api/portraits/men/84.jpg",
    role: "seller",
    rating: 4.7,
    totalSales: 10,
    verified: true,
    createdAt: "2025-11-23T11:35:55.000Z",
    updatedAt: "2025-11-23T11:35:55.000Z",
  },
  {
    id: "user_17",
    email: "motivator@example.com",
    name: "Michelle Green",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    role: "seller",
    rating: 4.9,
    totalSales: 21,
    verified: true,
    createdAt: "2025-11-23T12:50:10.000Z",
    updatedAt: "2025-11-23T12:50:10.000Z",
  },
  {
    id: "user_18",
    email: "petlover@example.com",
    name: "Nicole Martinez",
    image: "https://randomuser.me/api/portraits/women/95.jpg",
    role: "seller",
    rating: 4.6,
    totalSales: 12,
    verified: false,
    createdAt: "2025-11-23T14:05:25.000Z",
    updatedAt: "2025-11-23T14:05:25.000Z",
  },
  {
    id: "user_19",
    email: "artist@example.com",
    name: "Ryan Phillips",
    image: "https://randomuser.me/api/portraits/men/92.jpg",
    role: "seller",
    rating: 4.7,
    totalSales: 9,
    verified: false,
    createdAt: "2025-11-23T15:20:45.000Z",
    updatedAt: "2025-11-23T15:20:45.000Z",
  },
  {
    id: "user_20",
    email: "dancer@example.com",
    name: "Brianna Scott",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
    role: "seller",
    rating: 4.9,
    totalSales: 23,
    verified: true,
    createdAt: "2025-11-23T16:35:30.000Z",
    updatedAt: "2025-11-23T16:35:30.000Z",
  },
];

export const dummyPlans = [
  {
    id: "plan_basic",
    name: "Basic",
    description: "Ideal for individuals starting out.",
    price: 0,
    billed_annualy: false,
    features: [
      "5 Free Listings",
      "Standard Listings",
      "Basic Tools",
      "Email Support",
      "No Branding",
      "10% Transaction Fee",
    ],
    popular: false,
  },
  {
    id: "plan_pro",
    name: "Pro",
    description: "Perfect for growing creators and small businesses.",
    price: 29,
    billed_annualy: true,
    features: [
      "Unlimited Listings",
      "Featured Listings",
      "Ad & Promotion Tools",
      "1-on-1 Support",
      "Custom Branding",
      "7% Transaction Fee",
    ],
    popular: true,
  },
  {
    id: "plan_enterprise",
    name: "Enterprise",
    description: "Best for established brands and agencies.",
    price: 99,
    billed_annualy: true,
    features: [
      "All Pro Features",
      "Dedicated Account Manager",
      "Priority Support",
      "Advanced Analytics",
      "Custom Integrations",
      "3% Transaction Fee",
    ],
    popular: false,
  },
];

//   LISTINGS

export const dummyListings = [
  {
    id: "listing_1",
    ownerId: "user_1",
    title: "Caribbean Tech YouTube Channel - 145k Subscribers",
    platform: "youtube",
    username: "IslandTechTV",
    followers_count: 145000,
    engagement_rate: 4.5,
    monthly_views: 980000,
    niche: "tech",
    price: 82000,
    currency: "TTD",
    description: "Fast-growing Caribbean tech review channel.",
    verified: true,
    monetized: true,
    country: "Trinidad & Tobago",
    age_range: "18-34",
    status: "active",
    featured: true,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: true,
    owner: dummyUsers[0],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: true,
    createdAt: "2025-11-21T18:32:10.000Z",
    updatedAt: "2025-11-21T18:40:02.000Z",
  },

  {
    id: "listing_2",
    ownerId: "user_2",
    title: "Travel Instagram Page - 72k Followers",
    platform: "instagram",
    username: "islandwanderer",
    followers_count: 72000,
    engagement_rate: 3.8,
    monthly_views: 260000,
    niche: "travel",
    price: 3200,
    currency: "USD",
    description: "Beautiful Caribbean landscapes + resort content.",
    verified: false,
    monetized: false,
    country: "Jamaica",
    age_range: "25-44",
    status: "active",
    featured: false,
    images: [image_1, image_2, image_3],
    platformAssured: false,
    owner: dummyUsers[1],
    isCredentialSubmitted: true,
    isCredentialVerified: false,
    isCredentialChanged: false,
    createdAt: "2025-11-21T18:35:00.000Z",
    updatedAt: "2025-11-21T18:35:00.000Z",
  },

  {
    id: "listing_3",
    ownerId: "user_3",
    title: "Fitness TikTok - 310k Followers",
    platform: "tiktok",
    username: "fitwithdarren",
    followers_count: 310000,
    engagement_rate: 5.2,
    monthly_views: 2700000,
    niche: "fitness",
    price: 13000,
    currency: "USD",
    description: "Explosive Caribbean workout channel.",
    verified: true,
    monetized: true,
    country: "Barbados",
    age_range: "18-34",
    status: "active",
    featured: true,
    images: [image_1, image_3],
    platformAssured: true,
    owner: dummyUsers[2],
    isCredentialSubmitted: false,
    isCredentialVerified: true,
    isCredentialChanged: true,
    createdAt: "2025-11-21T18:40:22.000Z",
    updatedAt: "2025-11-21T18:45:55.000Z",
  },

  {
    id: "listing_4",
    ownerId: "user_4",
    title: "Food Pinterest Board - 110k Monthly Views",
    platform: "pinterest",
    username: "caribbites",
    followers_count: 18000,
    engagement_rate: 4.1,
    monthly_views: 110000,
    niche: "food",
    price: 890,
    currency: "USD",
    description: "Caribbean cuisine inspiration + viral recipes.",
    verified: false,
    monetized: false,
    country: "Trinidad & Tobago",
    age_range: "25-54",
    status: "active",
    featured: false,
    images: [image_2, image_4],
    platformAssured: false,
    owner: dummyUsers[3],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: "2025-11-21T18:50:11.000Z",
    updatedAt: "2025-11-21T18:55:10.000Z",
  },

  {
    id: "listing_5",
    ownerId: "user_5",
    title: "Gaming YouTube Channel - 520k Subscribers",
    platform: "youtube",
    username: "CaribbeanGamerPro",
    followers_count: 520000,
    engagement_rate: 6.8,
    monthly_views: 4200000,
    niche: "gaming",
    price: 25000,
    currency: "USD",
    description:
      "Top Caribbean gaming channel with loyal fanbase and consistent uploads.",
    verified: true,
    monetized: true,
    country: "Trinidad & Tobago",
    age_range: "13-24",
    status: "active",
    featured: true,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: true,
    owner: dummyUsers[4],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: "2025-11-22T13:15:30.000Z",
    updatedAt: "2025-11-22T13:15:30.000Z",
  },

  {
    id: "listing_6",
    ownerId: "user_6",
    title: "Fashion Instagram - 89k Followers",
    platform: "instagram",
    username: "island_style_daily",
    followers_count: 89000,
    engagement_rate: 4.3,
    monthly_views: 340000,
    niche: "fashion",
    price: 4500,
    currency: "USD",
    description: "Caribbean fashion and style content with high engagement.",
    verified: true,
    monetized: false,
    country: "Barbados",
    age_range: "18-34",
    status: "active",
    featured: false,
    images: [image_1, image_3, image_4],
    platformAssured: false,
    owner: dummyUsers[5],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: "2025-11-22T14:20:45.000Z",
    updatedAt: "2025-11-22T14:20:45.000Z",
  },

  {
    id: "listing_7",
    ownerId: "user_7",
    title: "Music TikTok - 425k Followers",
    platform: "tiktok",
    username: "soca_vibes_official",
    followers_count: 425000,
    engagement_rate: 7.1,
    monthly_views: 3800000,
    niche: "music",
    price: 18500,
    currency: "USD",
    description: "Viral Caribbean music content, soca and dancehall focused.",
    verified: true,
    monetized: true,
    country: "Jamaica",
    age_range: "18-34",
    status: "active",
    featured: true,
    images: [image_2, image_3, image_4],
    platformAssured: true,
    owner: dummyUsers[6],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: "2025-11-22T15:30:12.000Z",
    updatedAt: "2025-11-22T15:30:12.000Z",
  },

  {
    id: "listing_8",
    ownerId: "user_8",
    title: "Lifestyle Blog Twitter - 34k Followers",
    platform: "twitter",
    username: "caribbean_living",
    followers_count: 34000,
    engagement_rate: 2.9,
    monthly_views: 150000,
    niche: "lifestyle",
    price: 1200,
    currency: "USD",
    description: "Caribbean lifestyle tips, culture, and daily inspiration.",
    verified: false,
    monetized: false,
    country: "Saint Lucia",
    age_range: "25-44",
    status: "active",
    featured: false,
    images: [image_1, image_2],
    platformAssured: false,
    owner: dummyUsers[7],
    isCredentialSubmitted: true,
    isCredentialVerified: false,
    isCredentialChanged: false,
    createdAt: "2025-11-22T16:45:30.000Z",
    updatedAt: "2025-11-22T16:45:30.000Z",
  },

  {
    id: "listing_9",
    ownerId: "user_9",
    title: "Beauty YouTube Channel - 198k Subscribers",
    platform: "youtube",
    username: "GlowUpCaribbean",
    followers_count: 198000,
    engagement_rate: 5.6,
    monthly_views: 1400000,
    niche: "beauty",
    price: 11500,
    currency: "USD",
    description:
      "Caribbean beauty tutorials, makeup reviews, and skincare routines.",
    verified: true,
    monetized: true,
    country: "Trinidad & Tobago",
    age_range: "18-34",
    status: "sold",
    featured: true,
    images: [image_1, image_2, image_3],
    platformAssured: true,
    owner: dummyUsers[8],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: "2025-11-22T17:10:22.000Z",
    updatedAt: "2025-11-22T17:10:22.000Z",
  },

  {
    id: "listing_10",
    ownerId: "user_10",
    title: "Comedy TikTok - 267k Followers",
    platform: "tiktok",
    username: "trini_comedy_king",
    followers_count: 267000,
    engagement_rate: 8.2,
    monthly_views: 2200000,
    niche: "entertainment",
    price: 9800,
    currency: "USD",
    description: "Hilarious Caribbean comedy skits and relatable content.",
    verified: true,
    monetized: true,
    country: "Trinidad & Tobago",
    age_range: "18-34",
    status: "active",
    featured: false,
    images: [image_2, image_3],
    platformAssured: true,
    owner: dummyUsers[9],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: "2025-11-22T18:25:50.000Z",
    updatedAt: "2025-11-22T18:25:50.000Z",
  },
];

//   CHATS

// EXTENDED DUMMY MESSAGES FOR MULTIPLE CHATS

export const dummyMessagesChat1 = [
  {
    id: "msg501",
    chatId: "chat_1",
    sender_id: "user_2",
    message: "Hey, is the tech channel still for sale?",
    createdAt: "Fri Nov 21 2025 15:00:00 GMT-0400",
  },
  {
    id: "msg502",
    chatId: "chat_1",
    sender_id: "user_1",
    message: "Yes, still available. You need analytics screenshots?",
    createdAt: "Fri Nov 21 2025 15:02:10 GMT-0400",
  },
  {
    id: "msg503",
    chatId: "chat_1",
    sender_id: "user_2",
    message: "Yeah, that would be great. Also, what's the average CPM?",
    createdAt: "Fri Nov 21 2025 15:05:30 GMT-0400",
  },
  {
    id: "msg504",
    chatId: "chat_1",
    sender_id: "user_1",
    message:
      "CPM ranges from $4-6 depending on content. I'll send screenshots in a few mins.",
    createdAt: "Fri Nov 21 2025 15:08:45 GMT-0400",
  },
  {
    id: "msg505",
    chatId: "chat_1",
    sender_id: "user_1",
    message:
      "Just sent the analytics to your email. Check spam if you don't see it.",
    createdAt: "Fri Nov 21 2025 15:15:20 GMT-0400",
  },
  {
    id: "msg506",
    chatId: "chat_1",
    sender_id: "user_2",
    message: "Got it! Numbers look solid. What payment methods do you accept?",
    createdAt: "Fri Nov 21 2025 15:22:10 GMT-0400",
  },
];

export const dummyMessagesChat2 = [
  {
    id: "msg601",
    chatId: "chat_2",
    sender_id: "user_4",
    message: "Hi! I'm interested in the travel Instagram page",
    createdAt: "Mon Nov 24 2025 10:30:00 GMT-0400",
  },
  {
    id: "msg602",
    chatId: "chat_2",
    sender_id: "user_2",
    message: "Great! What would you like to know?",
    createdAt: "Mon Nov 24 2025 10:35:15 GMT-0400",
  },
  {
    id: "msg603",
    chatId: "chat_2",
    sender_id: "user_4",
    message: "Is it mainly Trinidad content or all Caribbean?",
    createdAt: "Mon Nov 24 2025 10:40:30 GMT-0400",
  },
  {
    id: "msg604",
    chatId: "chat_2",
    sender_id: "user_2",
    message:
      "All Caribbean! Jamaica, Barbados, St. Lucia, everywhere. Very diverse audience.",
    createdAt: "Mon Nov 24 2025 10:42:00 GMT-0400",
  },
  {
    id: "msg605",
    chatId: "chat_2",
    sender_id: "user_4",
    message:
      "Perfect! That's exactly what I'm looking for. Are the followers real?",
    createdAt: "Mon Nov 24 2025 10:45:20 GMT-0400",
  },
  {
    id: "msg606",
    chatId: "chat_2",
    sender_id: "user_2",
    message:
      "100% organic growth, no bots. I can show you engagement insights.",
    createdAt: "Mon Nov 24 2025 10:47:30 GMT-0400",
  },
  {
    id: "msg607",
    chatId: "chat_2",
    sender_id: "user_4",
    message: "Sounds good. Can we schedule a call to discuss details?",
    createdAt: "Mon Nov 24 2025 10:50:00 GMT-0400",
  },
];

export const dummyMessagesChat3 = [
  {
    id: "msg701",
    chatId: "chat_3",
    sender_id: "user_6",
    message: "Yo! The fitness TikTok is fire 🔥 Still selling?",
    createdAt: "Tue Nov 25 2025 14:20:00 GMT-0400",
  },
  {
    id: "msg702",
    chatId: "chat_3",
    sender_id: "user_3",
    message: "Yeah man, still available. You in the fitness industry?",
    createdAt: "Tue Nov 25 2025 14:25:30 GMT-0400",
  },
  {
    id: "msg703",
    chatId: "chat_3",
    sender_id: "user_6",
    message: "I run a gym in Barbados. Looking to expand online presence.",
    createdAt: "Tue Nov 25 2025 14:28:15 GMT-0400",
  },
  {
    id: "msg704",
    chatId: "chat_3",
    sender_id: "user_3",
    message:
      "Nice! This account would be perfect for that. Over 300k engaged followers.",
    createdAt: "Tue Nov 25 2025 14:30:00 GMT-0400",
  },
  {
    id: "msg705",
    chatId: "chat_3",
    sender_id: "user_6",
    message: "What's the demographic breakdown? More men or women?",
    createdAt: "Tue Nov 25 2025 14:35:45 GMT-0400",
  },
  {
    id: "msg706",
    chatId: "chat_3",
    sender_id: "user_3",
    message: "About 60% male, 40% female. Mostly 18-34 age range.",
    createdAt: "Tue Nov 25 2025 14:38:20 GMT-0400",
  },
];

export const dummyMessagesChat4 = [
  {
    id: "msg801",
    chatId: "chat_4",
    sender_id: "user_8",
    message: "Hello! I saw your Pinterest board. Very nice work!",
    createdAt: "Wed Nov 26 2025 09:15:00 GMT-0400",
  },
  {
    id: "msg802",
    chatId: "chat_4",
    sender_id: "user_4",
    message: "Thanks! Are you interested in purchasing?",
    createdAt: "Wed Nov 26 2025 09:20:30 GMT-0400",
  },
  {
    id: "msg803",
    chatId: "chat_4",
    sender_id: "user_8",
    message: "Yes, I have a Caribbean food blog and this would fit perfectly.",
    createdAt: "Wed Nov 26 2025 09:25:00 GMT-0400",
  },
  {
    id: "msg804",
    chatId: "chat_4",
    sender_id: "user_4",
    message:
      "That's great! The board gets really good traffic from North America.",
    createdAt: "Wed Nov 26 2025 09:28:15 GMT-0400",
  },
  {
    id: "msg805",
    chatId: "chat_4",
    sender_id: "user_8",
    message:
      "Perfect! I'm mainly targeting US and Canada. Can you transfer it easily?",
    createdAt: "Wed Nov 26 2025 09:32:40 GMT-0400",
  },
];

export const dummyMessagesChat5 = [
  {
    id: "msg901",
    chatId: "chat_5",
    sender_id: "user_10",
    message: "Bro, I love your gaming channel! How much you asking?",
    createdAt: "Thu Nov 27 2025 16:45:00 GMT-0400",
  },
  {
    id: "msg902",
    chatId: "chat_5",
    sender_id: "user_5",
    message:
      "Thanks fam! $25k USD. It's monetized and pulling in good monthly revenue.",
    createdAt: "Thu Nov 27 2025 16:50:20 GMT-0400",
  },
  {
    id: "msg903",
    chatId: "chat_5",
    sender_id: "user_10",
    message: "What games get the most views?",
    createdAt: "Thu Nov 27 2025 16:55:30 GMT-0400",
  },
  {
    id: "msg904",
    chatId: "chat_5",
    sender_id: "user_5",
    message: "COD, Fortnite, and GTA mainly. Also some FIFA content does well.",
    createdAt: "Thu Nov 27 2025 16:58:00 GMT-0400",
  },
  {
    id: "msg905",
    chatId: "chat_5",
    sender_id: "user_10",
    message: "Nice mix! What's the monthly revenue looking like?",
    createdAt: "Thu Nov 27 2025 17:02:15 GMT-0400",
  },
  {
    id: "msg906",
    chatId: "chat_5",
    sender_id: "user_5",
    message: "Between $3-4k per month, depending on upload consistency.",
    createdAt: "Thu Nov 27 2025 17:05:40 GMT-0400",
  },
  {
    id: "msg907",
    chatId: "chat_5",
    sender_id: "user_10",
    message: "That's solid! Let me think about it and get back to you.",
    createdAt: "Thu Nov 27 2025 17:10:00 GMT-0400",
  },
];

export const dummyMessagesChat6 = [
  {
    id: "msg1001",
    chatId: "chat_6",
    sender_id: "user_12",
    message:
      "Hi! Your fashion IG is exactly what I need. Is it still available?",
    createdAt: "Fri Nov 28 2025 11:00:00 GMT-0400",
  },
  {
    id: "msg1002",
    chatId: "chat_6",
    sender_id: "user_6",
    message: "Yes! Still available. Are you in fashion retail?",
    createdAt: "Fri Nov 28 2025 11:05:15 GMT-0400",
  },
  {
    id: "msg1003",
    chatId: "chat_6",
    sender_id: "user_12",
    message: "I'm launching a Caribbean clothing brand next month.",
    createdAt: "Fri Nov 28 2025 11:08:30 GMT-0400",
  },
  {
    id: "msg1004",
    chatId: "chat_6",
    sender_id: "user_6",
    message:
      "Perfect timing then! This account has a super engaged fashion community.",
    createdAt: "Fri Nov 28 2025 11:12:00 GMT-0400",
  },
];

export const dummyMessagesChat7 = [
  {
    id: "msg1101",
    chatId: "chat_7",
    sender_id: "user_14",
    message: "The soca TikTok account 🔥🔥 Can we negotiate on price?",
    createdAt: "Sat Nov 29 2025 13:20:00 GMT-0400",
  },
  {
    id: "msg1102",
    chatId: "chat_7",
    sender_id: "user_7",
    message: "Hey! Maybe a little. What's your offer?",
    createdAt: "Sat Nov 29 2025 13:25:30 GMT-0400",
  },
  {
    id: "msg1103",
    chatId: "chat_7",
    sender_id: "user_14",
    message: "I was thinking around $15k?",
    createdAt: "Sat Nov 29 2025 13:30:00 GMT-0400",
  },
  {
    id: "msg1104",
    chatId: "chat_7",
    sender_id: "user_7",
    message: "I can do $17k if you're serious about buying this week.",
    createdAt: "Sat Nov 29 2025 13:35:15 GMT-0400",
  },
  {
    id: "msg1105",
    chatId: "chat_7",
    sender_id: "user_14",
    message: "Deal! Let's do it. What's next?",
    createdAt: "Sat Nov 29 2025 13:40:00 GMT-0400",
  },
];

export const dummyMessagesChat8 = [
  {
    id: "msg1201",
    chatId: "chat_8",
    sender_id: "user_16",
    message:
      "Question about the Twitter account - is it shadowbanned or anything?",
    createdAt: "Sun Nov 30 2025 10:00:00 GMT-0400",
  },
  {
    id: "msg1202",
    chatId: "chat_8",
    sender_id: "user_8",
    message: "Nope, completely clean. Good standing with Twitter.",
    createdAt: "Sun Nov 30 2025 10:05:45 GMT-0400",
  },
  {
    id: "msg1203",
    chatId: "chat_8",
    sender_id: "user_16",
    message: "Great! What kind of content performs best on it?",
    createdAt: "Sun Nov 30 2025 10:10:20 GMT-0400",
  },
  {
    id: "msg1204",
    chatId: "chat_8",
    sender_id: "user_8",
    message:
      "Caribbean culture, lifestyle tips, and motivational quotes. Threads do really well.",
    createdAt: "Sun Nov 30 2025 10:15:00 GMT-0400",
  },
];

export const dummyMessagesChat9 = [
  {
    id: "msg1301",
    chatId: "chat_9",
    sender_id: "user_18",
    message:
      "Your beauty channel is amazing! Do you include the email and password?",
    createdAt: "Mon Dec 01 2025 14:30:00 GMT-0400",
  },
  {
    id: "msg1302",
    chatId: "chat_9",
    sender_id: "user_9",
    message: "Thanks hun! Yes, full transfer with all credentials.",
    createdAt: "Mon Dec 01 2025 14:35:20 GMT-0400",
  },
  {
    id: "msg1303",
    chatId: "chat_9",
    sender_id: "user_18",
    message: "Perfect! Any brand deals currentlystatus?",
    createdAt: "Mon Dec 01 2025 14:40:15 GMT-0400",
  },
  {
    id: "msg1304",
    chatId: "chat_9",
    sender_id: "user_9",
    message:
      "Two ongoing - one with a skincare brand, one with a makeup company. Both renewable.",
    createdAt: "Mon Dec 01 2025 14:45:30 GMT-0400",
  },
  {
    id: "msg1305",
    chatId: "chat_9",
    sender_id: "user_18",
    message: "This is exactly what I'm looking for! Can we finalize today?",
    createdAt: "Mon Dec 01 2025 14:50:00 GMT-0400",
  },
];

export const dummyMessagesChat10 = [
  {
    id: "msg1401",
    chatId: "chat_10",
    sender_id: "user_20",
    message:
      "Aye! Comedy content is my thing. Your TikTok page is hilarious 😂",
    createdAt: "Tue Dec 02 2025 16:00:00 GMT-0400",
  },
  {
    id: "msg1402",
    chatId: "chat_10",
    sender_id: "user_10",
    message: "Haha thanks! You want to buy it?",
    createdAt: "Tue Dec 02 2025 16:05:30 GMT-0400",
  },
  {
    id: "msg1403",
    chatId: "chat_10",
    sender_id: "user_20",
    message: "Yeah man! What niches do the best on it?",
    createdAt: "Tue Dec 02 2025 16:10:00 GMT-0400",
  },
  {
    id: "msg1404",
    chatId: "chat_10",
    sender_id: "user_10",
    message:
      "Trini culture, relatable struggles, and reaction videos. The algorithm loves it.",
    createdAt: "Tue Dec 02 2025 16:15:20 GMT-0400",
  },
];

export const dummyMessagesChat11 = [
  {
    id: "msg1501",
    chatId: "chat_11",
    sender_id: "user_1",
    message:
      "Hey, saw your fitness page. Looking to buy for my gym's social media.",
    createdAt: "Wed Dec 03 2025 08:30:00 GMT-0400",
  },
  {
    id: "msg1502",
    chatId: "chat_11",
    sender_id: "user_12",
    message:
      "Nice! It's a really engaged audience. Lots of transformation stories.",
    createdAt: "Wed Dec 03 2025 08:35:45 GMT-0400",
  },
  {
    id: "msg1503",
    chatId: "chat_11",
    sender_id: "user_1",
    message: "Do you post workout routines or nutrition content?",
    createdAt: "Wed Dec 03 2025 08:40:15 GMT-0400",
  },
  {
    id: "msg1504",
    chatId: "chat_11",
    sender_id: "user_12",
    message:
      "Both! Plus motivation and fitness tips. Very well-rounded content.",
    createdAt: "Wed Dec 03 2025 08:45:00 GMT-0400",
  },
  {
    id: "msg1505",
    chatId: "chat_11",
    sender_id: "user_1",
    message: "Excellent. Send me the analytics when you get a chance.",
    createdAt: "Wed Dec 03 2025 08:50:30 GMT-0400",
  },
];

export const dummyMessagesChat12 = [
  {
    id: "msg1601",
    chatId: "chat_12",
    sender_id: "user_3",
    message: "I need a cooking page for my restaurant. Yours looks good!",
    createdAt: "Thu Dec 04 2025 12:00:00 GMT-0400",
  },
  {
    id: "msg1602",
    chatId: "chat_12",
    sender_id: "user_13",
    message:
      "Thank you! It has a lot of Caribbean recipes and cooking tutorials.",
    createdAt: "Thu Dec 04 2025 12:05:30 GMT-0400",
  },
  {
    id: "msg1603",
    chatId: "chat_12",
    sender_id: "user_3",
    message: "Perfect! What's the engagement like on recipe videos?",
    createdAt: "Thu Dec 04 2025 12:10:00 GMT-0400",
  },
  {
    id: "msg1604",
    chatId: "chat_12",
    sender_id: "user_13",
    message:
      "Very high! People love the step-by-step format. Lots of saves and shares.",
    createdAt: "Thu Dec 04 2025 12:15:20 GMT-0400",
  },
];

// EXTENDED DUMMY CHATS

export const dummyChats = [
  {
    id: "chat_1",
    chatUserId: "user_2",
    ownerUserId: "user_1",
    listingId: "listing_1",
    status: "active",
    lastMessage:
      "Got it! Numbers look solid. What payment methods do you accept?",
    isLastMessageRead: false,
    createdAt: "2025-11-21T15:00:00.000Z",
    updatedAt: "2025-11-21T15:15:20.000Z",
    messages: dummyMessagesChat1,
    ownerUser: {
      id: "user_1",
      name: "Marvin Pierre",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    chatUser: {
      id: "user_2",
      name: "Renee Charles",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    listing: {
      id: "listing_1",
      title: "Caribbean Tech YouTube Channel - 145k Subscribers",
      platform: "youtube",
    },
  },
  {
    id: "chat_2",
    chatUserId: "user_4",
    ownerUserId: "user_2",
    listingId: "listing_2",
    status: "active",
    lastMessage: "Sounds good. Can we schedule a call to discuss details?",
    isLastMessageRead: false,
    createdAt: "2025-11-24T10:30:00.000Z",
    updatedAt: "2025-11-24T10:50:00.000Z",
    messages: dummyMessagesChat2,
    ownerUser: {
      id: "user_2",
      name: "Renee Charles",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    chatUser: {
      id: "user_4",
      name: "Tara Singh",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
    },
    listing: {
      id: "listing_2",
      title: "Travel Instagram Page - 72k Followers",
      platform: "instagram",
    },
  },
  {
    id: "chat_3",
    chatUserId: "user_6",
    ownerUserId: "user_3",
    listingId: "listing_3",
    status: "active",
    lastMessage: "About 60% male, 40% female. Mostly 18-34 age range.",
    isLastMessageRead: true,
    createdAt: "2025-11-25T14:20:00.000Z",
    updatedAt: "2025-11-25T14:38:20.000Z",
    messages: dummyMessagesChat3,
    ownerUser: {
      id: "user_3",
      name: "Darren Joseph",
      image: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    chatUser: {
      id: "user_6",
      name: "Keisha Williams",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    listing: {
      id: "listing_3",
      title: "Fitness TikTok - 310k Followers",
      platform: "tiktok",
    },
  },
  {
    id: "chat_4",
    chatUserId: "user_8",
    ownerUserId: "user_4",
    listingId: "listing_4",
    status: "pending",
    lastMessage:
      "Perfect! I'm mainly targeting US and Canada. Can you transfer it easily?",
    isLastMessageRead: false,
    createdAt: "2025-11-26T09:15:00.000Z",
    updatedAt: "2025-11-26T09:32:40.000Z",
    messages: dummyMessagesChat4,
    ownerUser: {
      id: "user_4",
      name: "Tara Singh",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
    },
    chatUser: {
      id: "user_8",
      name: "Samantha Brown",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    listing: {
      id: "listing_4",
      title: "Food Pinterest Board - 110k Monthly Views",
      platform: "pinterest",
    },
  },
  {
    id: "chat_5",
    chatUserId: "user_10",
    ownerUserId: "user_5",
    listingId: "listing_5",
    status: "active",
    lastMessage: "That's solid! Let me think about it and get back to you.",
    isLastMessageRead: true,
    createdAt: "2025-11-27T16:45:00.000Z",
    updatedAt: "2025-11-27T17:10:00.000Z",
    messages: dummyMessagesChat5,
    ownerUser: {
      id: "user_5",
      name: "Marcus Thompson",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    chatUser: {
      id: "user_10",
      name: "Kyle Mohammed",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    listing: {
      id: "listing_5",
      title: "Gaming YouTube Channel - 520k Subscribers",
      platform: "youtube",
    },
  },
  {
    id: "chat_6",
    chatUserId: "user_12",
    ownerUserId: "user_6",
    listingId: "listing_6",
    status: "active",
    lastMessage:
      "Perfect timing then! This account has a super engaged fashion community.",
    isLastMessageRead: false,
    createdAt: "2025-11-28T11:00:00.000Z",
    updatedAt: "2025-11-28T11:12:00.000Z",
    messages: dummyMessagesChat6,
    ownerUser: {
      id: "user_6",
      name: "Keisha Williams",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    chatUser: {
      id: "user_12",
      name: "Jade Campbell",
      image: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    listing: {
      id: "listing_6",
      title: "Fashion Instagram - 89k Followers",
      platform: "instagram",
    },
  },
  {
    id: "chat_7",
    chatUserId: "user_14",
    ownerUserId: "user_7",
    listingId: "listing_7",
    status: "closed",
    lastMessage: "Deal! Let's do it. What's next?",
    isLastMessageRead: false,
    createdAt: "2025-11-29T13:20:00.000Z",
    updatedAt: "2025-11-29T13:40:00.000Z",
    messages: dummyMessagesChat7,
    ownerUser: {
      id: "user_7",
      name: "Andre Baptiste",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    chatUser: {
      id: "user_14",
      name: "Daniel Lewis",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    listing: {
      id: "listing_7",
      title: "Music TikTok - 425k Followers",
      platform: "tiktok",
    },
  },
  {
    id: "chat_8",
    chatUserId: "user_16",
    ownerUserId: "user_8",
    listingId: "listing_8",
    status: "active",
    lastMessage:
      "Caribbean culture, lifestyle tips, and motivational quotes. Threads do really well.",
    isLastMessageRead: true,
    createdAt: "2025-11-30T10:00:00.000Z",
    updatedAt: "2025-11-30T10:15:00.000Z",
    messages: dummyMessagesChat8,
    ownerUser: {
      id: "user_8",
      name: "Samantha Brown",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
    },
    chatUser: {
      id: "user_16",
      name: "Christopher Walker",
      image: "https://randomuser.me/api/portraits/men/84.jpg",
    },
    listing: {
      id: "listing_8",
      title: "Lifestyle Blog Twitter - 34k Followers",
      platform: "twitter",
    },
  },
  {
    id: "chat_9",
    chatUserId: "user_18",
    ownerUserId: "user_9",
    listingId: "listing_9",
    status: "active",
    lastMessage: "This is exactly what I'm looking for! Can we finalize today?",
    isLastMessageRead: false,
    createdAt: "2025-12-01T14:30:00.000Z",
    updatedAt: "2025-12-01T14:50:00.000Z",
    messages: dummyMessagesChat9,
    ownerUser: {
      id: "user_9",
      name: "Aaliyah Roberts",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    chatUser: {
      id: "user_18",
      name: "Nicole Martinez",
      image: "https://randomuser.me/api/portraits/women/95.jpg",
    },
    listing: {
      id: "listing_9",
      title: "Beauty YouTube Channel - 198k Subscribers",
      platform: "youtube",
    },
  },
  {
    id: "chat_10",
    chatUserId: "user_20",
    ownerUserId: "user_10",
    listingId: "listing_10",
    status: "active",
    lastMessage:
      "Trini culture, relatable struggles, and reaction videos. The algorithm loves it.",
    isLastMessageRead: true,
    createdAt: "2025-12-02T16:00:00.000Z",
    updatedAt: "2025-12-02T16:15:20.000Z",
    messages: dummyMessagesChat10,
    ownerUser: {
      id: "user_10",
      name: "Kyle Mohammed",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
    },
    chatUser: {
      id: "user_20",
      name: "Brianna Scott",
      image: "https://randomuser.me/api/portraits/women/78.jpg",
    },
    listing: {
      id: "listing_10",
      title: "Comedy TikTok - 267k Followers",
      platform: "tiktok",
    },
  },
  {
    id: "chat_11",
    chatUserId: "user_1",
    ownerUserId: "user_12",
    listingId: "listing_12",
    status: "pending",
    lastMessage: "Excellent. Send me the analytics when you get a chance.",
    isLastMessageRead: false,
    createdAt: "2025-12-03T08:30:00.000Z",
    updatedAt: "2025-12-03T08:50:30.000Z",
    messages: dummyMessagesChat11,
    ownerUser: {
      id: "user_12",
      name: "Jade Campbell",
      image: "https://randomuser.me/api/portraits/women/72.jpg",
    },
    chatUser: {
      id: "user_1",
      name: "Marvin Pierre",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    listing: {
      id: "listing_12",
      title: "Fitness Instagram - 156k Followers",
      platform: "instagram",
    },
  },
  {
    id: "chat_12",
    chatUserId: "user_3",
    ownerUserId: "user_13",
    listingId: "listing_13",
    status: "active",
    lastMessage:
      "Very high! People love the step-by-step format. Lots of saves and shares.",
    isLastMessageRead: true,
    createdAt: "2025-12-04T12:00:00.000Z",
    updatedAt: "2025-12-04T12:15:20.000Z",
    messages: dummyMessagesChat12,
    ownerUser: {
      id: "user_13",
      name: "Patricia Johnson",
      image: "https://randomuser.me/api/portraits/women/82.jpg",
    },
    chatUser: {
      id: "user_3",
      name: "Darren Joseph",
      image: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    listing: {
      id: "listing_13",
      title: "Caribbean Cooking YouTube - 89k Subscribers",
      platform: "youtube",
    },
  },
];
//   ORDERS

export const dummyOrders = [
  {
    id: "37410546-9b88-4917-a396-612e10d1df13",
    listingId: "listing_1",
    ownerId: "user_1",
    userId: "user_2",
    amount: 2500,
    isPaid: true,
    createdAt: "2025-11-07T13:14:56.112Z",
    listing: dummyListings[0],
    credential: {
      id: "3c4a950f-e25b-43c7-b592-36e76215ec2f",
      listingId: "listing_1",
      originalCredential: [
        { name: "Email", type: "email", value: "user@example.com" },
        { name: "Password", type: "password", value: "12345678" },
      ],
      updatedCredential: [
        { name: "Email", type: "email", value: "user@example.com" },
        { name: "Password", type: "password", value: "9876543210" },
      ],
      createdAt: "2025-11-07T13:13:08.881Z",
    },
  },
];

//   WITHDRAWAL REQUESTS

export const dummyWithdrawalRequests = [
  {
    id: "79443d65-8dc4-447b-9d27-3a862387fa5a",
    userId: "user_1",
    amount: 1000,
    account: [
      { name: "Account Holder Name", type: "text", value: "John Doe" },
      { name: "Bank Name", type: "text", value: "Bank Of America" },
      { name: "Account Number", type: "number", value: "112233445566" },
      { name: "Account Type", type: "text", value: "Saving" },
      { name: "SWIFT", type: "text", value: "AM9908TY09" },
      { name: "Branch", type: "text", value: "LA" },
    ],
    isWithdrawn: true,
    createdAt: "2025-11-09T06:00:35.759Z",
    updatedAt: "2025-11-09T13:05:26.385Z",
    user: dummyUsers[0],
  },
];

export const jobs = [
  {
    id: "job_1",
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Mid-Level",
    salary: "$45,000 - $65,000 USD",
    description:
      "Build and maintain our marketplace platform using React, TypeScript, and modern web technologies.",
    responsibilities: [
      "Develop responsive web applications using React and Tailwind CSS",
      "Collaborate with designers to implement pixel-perfect UI/UX",
      "Optimize application performance and user experience",
      "Write clean, maintainable code with proper documentation",
      "Participate in code reviews and team discussions",
    ],
    requirements: [
      "3+ years of experience with React and modern JavaScript",
      "Strong understanding of responsive design principles",
      "Experience with state management (Redux, Zustand)",
      "Familiarity with Git and version control",
      "Excellent communication skills in English",
    ],
    niceToHave: [
      "Experience with Next.js or similar frameworks",
      "Knowledge of web performance optimization",
      "Previous work in marketplace or e-commerce platforms",
    ],
    posted: "2025-01-02",
  },
  {
    id: "job_2",
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Senior",
    salary: "$55,000 - $75,000 USD",
    description:
      "Design and build scalable backend systems for our social media marketplace platform.",
    responsibilities: [
      "Design and implement RESTful APIs and microservices",
      "Manage database architecture and optimization",
      "Ensure application security and data protection",
      "Integrate third-party services and payment gateways",
      "Monitor system performance and troubleshoot issues",
    ],
    requirements: [
      "5+ years of backend development experience",
      "Proficiency in Node.js, Python, or similar languages",
      "Strong knowledge of SQL and NoSQL databases",
      "Experience with cloud platforms (AWS, Google Cloud)",
      "Understanding of RESTful API design principles",
    ],
    niceToHave: [
      "Experience with payment processing systems",
      "Knowledge of microservices architecture",
      "Familiarity with DevOps practices",
    ],
    posted: "2025-01-01",
  },
  {
    id: "job_3",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Mid-Level",
    salary: "$40,000 - $60,000 USD",
    description:
      "Create intuitive and beautiful user experiences for our marketplace platform.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Collaborate with developers to ensure design implementation",
      "Maintain and evolve our design system",
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating design thinking",
      "Understanding of responsive and mobile-first design",
      "Experience with user research methodologies",
    ],
    niceToHave: [
      "Motion design or animation skills",
      "Basic HTML/CSS knowledge",
      "Experience designing marketplace platforms",
    ],
    posted: "2024-12-28",
  },
  {
    id: "job_4",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Mid-Level",
    salary: "$38,000 - $55,000 USD",
    description:
      "Drive growth and engagement through strategic marketing campaigns and content creation.",
    responsibilities: [
      "Develop and execute digital marketing campaigns",
      "Create engaging content for social media platforms",
      "Manage email marketing and automation",
      "Analyze campaign performance and metrics",
      "Collaborate with design team on marketing materials",
    ],
    requirements: [
      "3+ years of digital marketing experience",
      "Strong understanding of social media marketing",
      "Experience with marketing analytics tools",
      "Excellent writing and communication skills",
      "Knowledge of SEO and content marketing",
    ],
    niceToHave: [
      "Experience in the tech or marketplace industry",
      "Video content creation skills",
      "Caribbean market knowledge",
    ],
    posted: "2024-12-30",
  },
  {
    id: "job_5",
    title: "Customer Success Manager",
    department: "Customer Support",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Entry-Level",
    salary: "$30,000 - $45,000 USD",
    description:
      "Help our users succeed by providing exceptional support and building lasting relationships.",
    responsibilities: [
      "Respond to customer inquiries via email, chat, and phone",
      "Onboard new users and guide them through the platform",
      "Identify and resolve customer issues efficiently",
      "Gather customer feedback for product improvement",
      "Create help documentation and tutorials",
    ],
    requirements: [
      "1-2 years of customer service experience",
      "Excellent communication and problem-solving skills",
      "Empathetic and patient approach to customer interactions",
      "Ability to work independently in a remote environment",
      "Familiarity with support tools (Zendesk, Intercom, etc.)",
    ],
    niceToHave: [
      "Experience with social media platforms",
      "Caribbean cultural awareness",
      "Multiple language proficiency",
    ],
    posted: "2025-01-02",
  },
  {
    id: "job_6",
    title: "Content Creator",
    department: "Marketing",
    location: "Remote / Caribbean",
    type: "Part-time",
    experience: "Entry-Level",
    salary: "$20,000 - $30,000 USD",
    description:
      "Create engaging content that showcases our platform and helps users succeed.",
    responsibilities: [
      "Produce video tutorials and educational content",
      "Write blog posts and social media content",
      "Create graphics and visual assets",
      "Interview successful sellers and buyers",
      "Maintain content calendar and publishing schedule",
    ],
    requirements: [
      "1+ year of content creation experience",
      "Strong writing and storytelling skills",
      "Basic video editing capabilities",
      "Understanding of social media trends",
      "Self-motivated and creative",
    ],
    niceToHave: [
      "Photography skills",
      "Experience with social media management",
      "Caribbean market knowledge",
    ],
    posted: "2024-12-25",
  },
  {
    id: "job_7",
    title: "Product Manager",
    department: "Product",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Senior",
    salary: "$60,000 - $85,000 USD",
    description:
      "Lead product strategy and development for our marketplace platform.",
    responsibilities: [
      "Define product vision and roadmap",
      "Prioritize features based on user needs and business goals",
      "Work with engineering and design teams on execution",
      "Conduct market research and competitive analysis",
      "Analyze product metrics and user feedback",
    ],
    requirements: [
      "5+ years of product management experience",
      "Strong analytical and strategic thinking skills",
      "Experience with marketplace or e-commerce products",
      "Excellent stakeholder management abilities",
      "Data-driven decision making approach",
    ],
    niceToHave: [
      "Technical background or engineering degree",
      "Experience in Caribbean or emerging markets",
      "Social media industry knowledge",
    ],
    posted: "2024-12-20",
  },
  {
    id: "job_8",
    title: "Data Analyst",
    department: "Analytics",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Mid-Level",
    salary: "$45,000 - $65,000 USD",
    description:
      "Turn data into insights that drive business decisions and platform improvements.",
    responsibilities: [
      "Analyze user behavior and marketplace trends",
      "Create dashboards and reports for stakeholders",
      "Conduct A/B testing and experiment analysis",
      "Identify opportunities for growth and optimization",
      "Build predictive models for business forecasting",
    ],
    requirements: [
      "3+ years of data analysis experience",
      "Proficiency in SQL and data visualization tools",
      "Strong statistical analysis skills",
      "Experience with Python or R for data analysis",
      "Ability to communicate insights to non-technical audiences",
    ],
    niceToHave: [
      "Machine learning experience",
      "E-commerce or marketplace analytics background",
      "Experience with BigQuery or similar platforms",
    ],
    posted: "2024-12-27",
  },
];
