import logo from './NiceLogo.png';
import { CiLinkedin } from 'react-icons/ci';
import { CgYoutube, CgInstagram, CgFacebook, CgTwitter } from 'react-icons/cg';
import {
  Music2,
  Pin, Camera, Gamepad2, MessageCircle
} from 'lucide-react';
import ctabg from './cta.png';
import image_1 from './image_1.jpg';
import image_2 from './image_2.jpg';
import image_3 from './image_3.jpg';
import image_4 from './image_4.jpg';

import user_profile from './default_pic.png';



// ASSETS

export const assets = { logo, user_profile, ctabg };

//  SOCIAL MEDIA BASE LINKS

export const socialMediaLinks = {
  youtube: 'https://www.youtube.com',
  instagram: 'https://www.instagram.com',
  tiktok: 'https://www.tiktok.com',
  facebook: 'https://www.facebook.com',
  twitter: 'https://www.twitter.com',
  linkedin: 'https://www.linkedin.com/in',
  pinterest: 'https://www.pinterest.com',
  snapchat: 'https://www.snapchat.com/add',
  twitch: 'https://www.twitch.tv',
  discord: 'https://discord.com/users',
};


//   PROFILE LINK BUILDER

export function getProfileLink(platform, username) {
  if (!platform || !username) return null;

  const key = platform.toLowerCase();
  const base = socialMediaLinks[key];
  if (!base) return null;

  const cleanUsername = username.replace(/^@/, '');

  switch (key) {
    case 'linkedin':
    case 'snapchat':
    case 'discord':
      return `${base}/${cleanUsername}`;

    case 'youtube':
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
  { value: "Saint Vincent and the Grenadines", label: "Saint Vincent and the Grenadines" },
  { value: "Suriname", label: "Suriname" },
  { value: "Trinidad & Tobago", label: "Trinidad & Tobago" },
  { value: "Cayman Islands", label: "Cayman Islands" },
  { value: "Other", label: "Other" }
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
]

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
  { value: "other", label: "Other" }
];



//   ICONS

export const platformIcons = {
  youtube: <CgYoutube color="#FF0000" className="bg-[#FF000010] size-10 p-2 rounded" />,
  instagram: <CgInstagram color="#E1306C" className="bg-[#E1306C10] size-10 p-2 rounded" />,
  tiktok: <Music2 color="#000000" className="bg-[#00000010] size-10 p-2 rounded" />,
  facebook: <CgFacebook color="#1877F2" className="bg-[#1877F210] size-10 p-2 rounded" />,
  twitter: <CgTwitter color="#1DA1F2" className="bg-[#1DA1F210] size-10 p-2 rounded" />,
  linkedin: <CiLinkedin color="#0077B5" className="bg-[#0077B510] size-10 p-2 rounded" />,
  pinterest: <Pin color="#E60023" className="bg-[#E6002310] size-10 p-2 rounded" />,
  snapchat: <Camera color="#FFFC00" className="bg-[#FFFC0010] size-10 p-2 rounded" />,
  twitch: <Gamepad2 color="#9146FF" className="bg-[#9146FF10] size-10 p-2 rounded" />,
  discord: <MessageCircle color="#5865F2" className="bg-[#5865F210] size-10 p-2 rounded" />,
};


//   USERS

export const dummyUsers = [
  {
    id: 'user_1',
    email: 'islandcreator@example.com',
    name: 'Marvin Pierre',
    image: 'https://randomuser.me/api/portraits/men/12.jpg',
    role: 'seller',
    rating: 4.8,
    totalSales: 12,
    verified: true,
    createdAt: '2025-11-21T18:32:10.000Z',
    updatedAt: '2025-11-21T18:32:10.000Z',
  },
  {
    id: 'user_2',
    email: 'beachvibes@example.com',
    name: 'Renee Charles',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    role: 'seller',
    rating: 4.4,
    totalSales: 6,
    verified: false,
    createdAt: '2025-11-21T18:34:50.000Z',
    updatedAt: '2025-11-21T18:35:00.000Z',
  },
  {
    id: 'user_3',
    email: 'calypsoking@example.com',
    name: 'Darren Joseph',
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
    role: 'seller',
    rating: 4.9,
    totalSales: 18,
    verified: true,
    createdAt: '2025-11-21T18:40:22.000Z',
    updatedAt: '2025-11-21T18:40:22.000Z',
  },
  {
    id: 'user_4',
    email: 'islandgirl@example.com',
    name: 'Tara Singh',
    image: 'https://randomuser.me/api/portraits/women/67.jpg',
    role: 'seller',
    rating: 4.6,
    totalSales: 9,
    verified: true,
    createdAt: '2025-11-21T18:50:11.000Z',
    updatedAt: '2025-11-21T18:50:11.000Z',
  },
  {
    id: 'user_5',
    email: 'gamerpro@example.com',
    name: 'Marcus Thompson',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    role: 'seller',
    rating: 4.9,
    totalSales: 24,
    verified: true,
    createdAt: '2025-11-22T09:15:30.000Z',
    updatedAt: '2025-11-22T09:15:30.000Z',
  },
  {
    id: 'user_6',
    email: 'fashionista@example.com',
    name: 'Keisha Williams',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    role: 'seller',
    rating: 4.7,
    totalSales: 15,
    verified: true,
    createdAt: '2025-11-22T10:20:45.000Z',
    updatedAt: '2025-11-22T10:20:45.000Z',
  },
  {
    id: 'user_7',
    email: 'musicvibes@example.com',
    name: 'Andre Baptiste',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    role: 'seller',
    rating: 4.8,
    totalSales: 20,
    verified: true,
    createdAt: '2025-11-22T11:30:12.000Z',
    updatedAt: '2025-11-22T11:30:12.000Z',
  },
  {
    id: 'user_8',
    email: 'lifestyleblogger@example.com',
    name: 'Samantha Brown',
    image: 'https://randomuser.me/api/portraits/women/52.jpg',
    role: 'seller',
    rating: 4.5,
    totalSales: 8,
    verified: false,
    createdAt: '2025-11-22T12:45:30.000Z',
    updatedAt: '2025-11-22T12:45:30.000Z',
  },
  {
    id: 'user_9',
    email: 'beautyguru@example.com',
    name: 'Aaliyah Roberts',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    role: 'seller',
    rating: 4.9,
    totalSales: 22,
    verified: true,
    createdAt: '2025-11-22T13:10:22.000Z',
    updatedAt: '2025-11-22T13:10:22.000Z',
  },
  {
    id: 'user_10',
    email: 'comedyking@example.com',
    name: 'Kyle Mohammed',
    image: 'https://randomuser.me/api/portraits/men/58.jpg',
    role: 'seller',
    rating: 4.8,
    totalSales: 17,
    verified: true,
    createdAt: '2025-11-22T14:25:50.000Z',
    updatedAt: '2025-11-22T14:25:50.000Z',
  },
  {
    id: 'user_11',
    email: 'bizpro@example.com',
    name: 'Richard Clarke',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    role: 'seller',
    rating: 4.6,
    totalSales: 11,
    verified: true,
    createdAt: '2025-11-22T15:40:10.000Z',
    updatedAt: '2025-11-22T15:40:10.000Z',
  },
  {
    id: 'user_12',
    email: 'fitnessgirl@example.com',
    name: 'Jade Campbell',
    image: 'https://randomuser.me/api/portraits/women/72.jpg',
    role: 'seller',
    rating: 4.9,
    totalSales: 19,
    verified: true,
    createdAt: '2025-11-22T16:15:35.000Z',
    updatedAt: '2025-11-22T16:15:35.000Z',
  },
  {
    id: 'user_13',
    email: 'cookingmama@example.com',
    name: 'Patricia Johnson',
    image: 'https://randomuser.me/api/portraits/women/82.jpg',
    role: 'seller',
    rating: 4.7,
    totalSales: 13,
    verified: false,
    createdAt: '2025-11-23T08:30:20.000Z',
    updatedAt: '2025-11-23T08:30:20.000Z',
  },
  {
    id: 'user_14',
    email: 'photographer@example.com',
    name: 'Daniel Lewis',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    role: 'seller',
    rating: 4.8,
    totalSales: 16,
    verified: true,
    createdAt: '2025-11-23T09:45:15.000Z',
    updatedAt: '2025-11-23T09:45:15.000Z',
  },
  {
    id: 'user_15',
    email: 'teacher@example.com',
    name: 'Karen Adams',
    image: 'https://randomuser.me/api/portraits/women/88.jpg',
    role: 'seller',
    rating: 4.8,
    totalSales: 14,
    verified: true,
    createdAt: '2025-11-23T10:20:40.000Z',
    updatedAt: '2025-11-23T10:20:40.000Z',
  },
  {
    id: 'user_16',
    email: 'sportsfan@example.com',
    name: 'Christopher Walker',
    image: 'https://randomuser.me/api/portraits/men/84.jpg',
    role: 'seller',
    rating: 4.7,
    totalSales: 10,
    verified: true,
    createdAt: '2025-11-23T11:35:55.000Z',
    updatedAt: '2025-11-23T11:35:55.000Z',
  },
  {
    id: 'user_17',
    email: 'motivator@example.com',
    name: 'Michelle Green',
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
    role: 'seller',
    rating: 4.9,
    totalSales: 21,
    verified: true,
    createdAt: '2025-11-23T12:50:10.000Z',
    updatedAt: '2025-11-23T12:50:10.000Z',
  },
  {
    id: 'user_18',
    email: 'petlover@example.com',
    name: 'Nicole Martinez',
    image: 'https://randomuser.me/api/portraits/women/95.jpg',
    role: 'seller',
    rating: 4.6,
    totalSales: 12,
    verified: false,
    createdAt: '2025-11-23T14:05:25.000Z',
    updatedAt: '2025-11-23T14:05:25.000Z',
  },
  {
    id: 'user_19',
    email: 'artist@example.com',
    name: 'Ryan Phillips',
    image: 'https://randomuser.me/api/portraits/men/92.jpg',
    role: 'seller',
    rating: 4.7,
    totalSales: 9,
    verified: false,
    createdAt: '2025-11-23T15:20:45.000Z',
    updatedAt: '2025-11-23T15:20:45.000Z',
  },
  {
    id: 'user_20',
    email: 'dancer@example.com',
    name: 'Brianna Scott',
    image: 'https://randomuser.me/api/portraits/women/78.jpg',
    role: 'seller',
    rating: 4.9,
    totalSales: 23,
    verified: true,
    createdAt: '2025-11-23T16:35:30.000Z',
    updatedAt: '2025-11-23T16:35:30.000Z',
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
    id: 'listing_1',
    ownerId: 'user_1',
    title: 'Caribbean Tech YouTube Channel - 145k Subscribers',
    platform: 'youtube',
    username: 'IslandTechTV',
    followers_count: 145000,
    engagement_rate: 4.5,
    monthly_views: 980000,
    niche: 'tech',
    price: 8200,
    currency: 'USD',
    description: 'Fast-growing Caribbean tech review channel.',
    verified: true,
    monetized: true,
    country: 'Trinidad & Tobago',
    age_range: '18-34',
    status: 'active',
    featured: true,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: true,
    owner: dummyUsers[0],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: true,
    createdAt: '2025-11-21T18:32:10.000Z',
    updatedAt: '2025-11-21T18:40:02.000Z',
  },

  {
    id: 'listing_2',
    ownerId: 'user_2',
    title: 'Travel Instagram Page - 72k Followers',
    platform: 'instagram',
    username: 'islandwanderer',
    followers_count: 72000,
    engagement_rate: 3.8,
    monthly_views: 260000,
    niche: 'travel',
    price: 3200,
    currency: 'USD',
    description: 'Beautiful Caribbean landscapes + resort content.',
    verified: false,
    monetized: false,
    country: 'Jamaica',
    age_range: '25-44',
    status: 'active',
    featured: false,
    images: [image_1, image_2, image_3],
    platformAssured: false,
    owner: dummyUsers[1],
    isCredentialSubmitted: true,
    isCredentialVerified: false,
    isCredentialChanged: false,
    createdAt: '2025-11-21T18:35:00.000Z',
    updatedAt: '2025-11-21T18:35:00.000Z',
  },

  {
    id: 'listing_3',
    ownerId: 'user_3',
    title: 'Fitness TikTok - 310k Followers',
    platform: 'tiktok',
    username: 'fitwithdarren',
    followers_count: 310000,
    engagement_rate: 5.2,
    monthly_views: 2700000,
    niche: 'fitness',
    price: 13000,
    currency: 'USD',
    description: 'Explosive Caribbean workout channel.',
    verified: true,
    monetized: true,
    country: 'Barbados',
    age_range: '18-34',
    status: 'active',
    featured: true,
    images: [image_1, image_3],
    platformAssured: true,
    owner: dummyUsers[2],
    isCredentialSubmitted: false,
    isCredentialVerified: false,
    isCredentialChanged: false,
    createdAt: '2025-11-21T18:40:22.000Z',
    updatedAt: '2025-11-21T18:45:55.000Z',
  },

  {
    id: 'listing_4',
    ownerId: 'user_4',
    title: 'Food Pinterest Board - 110k Monthly Views',
    platform: 'pinterest',
    username: 'caribbites',
    followers_count: 18000,
    engagement_rate: 4.1,
    monthly_views: 110000,
    niche: 'food',
    price: 890,
    currency: 'USD',
    description: 'Caribbean cuisine inspiration + viral recipes.',
    verified: false,
    monetized: false,
    country: 'Trinidad & Tobago',
    age_range: '25-54',
    status: 'active',
    featured: false,
    images: [image_2, image_4],
    platformAssured: false,
    owner: dummyUsers[3],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: '2025-11-21T18:50:11.000Z',
    updatedAt: '2025-11-21T18:55:10.000Z',
  },

  {
    id: 'listing_5',
    ownerId: 'user_5',
    title: 'Gaming YouTube Channel - 520k Subscribers',
    platform: 'youtube',
    username: 'CaribbeanGamerPro',
    followers_count: 520000,
    engagement_rate: 6.8,
    monthly_views: 4200000,
    niche: 'gaming',
    price: 25000,
    currency: 'USD',
    description: 'Top Caribbean gaming channel with loyal fanbase and consistent uploads.',
    verified: true,
    monetized: true,
    country: 'Trinidad & Tobago',
    age_range: '13-24',
    status: 'active',
    featured: true,
    images: [image_1, image_2, image_3, image_4],
    platformAssured: true,
    owner: dummyUsers[4],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: '2025-11-22T13:15:30.000Z',
    updatedAt: '2025-11-22T13:15:30.000Z',
  },

  {
    id: 'listing_6',
    ownerId: 'user_6',
    title: 'Fashion Instagram - 89k Followers',
    platform: 'instagram',
    username: 'island_style_daily',
    followers_count: 89000,
    engagement_rate: 4.3,
    monthly_views: 340000,
    niche: 'fashion',
    price: 4500,
    currency: 'USD',
    description: 'Caribbean fashion and style content with high engagement.',
    verified: true,
    monetized: false,
    country: 'Barbados',
    age_range: '18-34',
    status: 'active',
    featured: false,
    images: [image_1, image_3, image_4],
    platformAssured: false,
    owner: dummyUsers[5],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: '2025-11-22T14:20:45.000Z',
    updatedAt: '2025-11-22T14:20:45.000Z',
  },

  {
    id: 'listing_7',
    ownerId: 'user_7',
    title: 'Music TikTok - 425k Followers',
    platform: 'tiktok',
    username: 'soca_vibes_official',
    followers_count: 425000,
    engagement_rate: 7.1,
    monthly_views: 3800000,
    niche: 'music',
    price: 18500,
    currency: 'USD',
    description: 'Viral Caribbean music content, soca and dancehall focused.',
    verified: true,
    monetized: true,
    country: 'Jamaica',
    age_range: '18-34',
    status: 'active',
    featured: true,
    images: [image_2, image_3, image_4],
    platformAssured: true,
    owner: dummyUsers[6],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: '2025-11-22T15:30:12.000Z',
    updatedAt: '2025-11-22T15:30:12.000Z',
  },

  {
    id: 'listing_8',
    ownerId: 'user_8',
    title: 'Lifestyle Blog Twitter - 34k Followers',
    platform: 'twitter',
    username: 'caribbean_living',
    followers_count: 34000,
    engagement_rate: 2.9,
    monthly_views: 150000,
    niche: 'lifestyle',
    price: 1200,
    currency: 'USD',
    description: 'Caribbean lifestyle tips, culture, and daily inspiration.',
    verified: false,
    monetized: false,
    country: 'Saint Lucia',
    age_range: '25-44',
    status: 'active',
    featured: false,
    images: [image_1, image_2],
    platformAssured: false,
    owner: dummyUsers[7],
    isCredentialSubmitted: true,
    isCredentialVerified: false,
    isCredentialChanged: false,
    createdAt: '2025-11-22T16:45:30.000Z',
    updatedAt: '2025-11-22T16:45:30.000Z',
  },

  {
    id: 'listing_9',
    ownerId: 'user_9',
    title: 'Beauty YouTube Channel - 198k Subscribers',
    platform: 'youtube',
    username: 'GlowUpCaribbean',
    followers_count: 198000,
    engagement_rate: 5.6,
    monthly_views: 1400000,
    niche: 'beauty',
    price: 11500,
    currency: 'USD',
    description: 'Caribbean beauty tutorials, makeup reviews, and skincare routines.',
    verified: true,
    monetized: true,
    country: 'Trinidad & Tobago',
    age_range: '18-34',
    status: 'active',
    featured: true,
    images: [image_1, image_2, image_3],
    platformAssured: true,
    owner: dummyUsers[8],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: '2025-11-22T17:10:22.000Z',
    updatedAt: '2025-11-22T17:10:22.000Z',
  },

  {
    id: 'listing_10',
    ownerId: 'user_10',
    title: 'Comedy TikTok - 267k Followers',
    platform: 'tiktok',
    username: 'trini_comedy_king',
    followers_count: 267000,
    engagement_rate: 8.2,
    monthly_views: 2200000,
    niche: 'entertainment',
    price: 9800,
    currency: 'USD',
    description: 'Hilarious Caribbean comedy skits and relatable content.',
    verified: true,
    monetized: true,
    country: 'Trinidad & Tobago',
    age_range: '18-34',
    status: 'active',
    featured: false,
    images: [image_2, image_3],
    platformAssured: true,
    owner: dummyUsers[9],
    isCredentialSubmitted: true,
    isCredentialVerified: true,
    isCredentialChanged: false,
    createdAt: '2025-11-22T18:25:50.000Z',
    updatedAt: '2025-11-22T18:25:50.000Z',
  },
]

//   CHATS 

export const dummyChats = [
  {
    id: 'chat_1',
    chatUserId: 'user_2',
    ownerUserId: 'user_1',
    listingId: 'listing_1',
    active: true,
    lastMessage: 'Yes, still available. You need analytics screenshots?',
    isLastMessageRead: false,
    createdAt: 'Fri Nov 21 2025 14:59:00 GMT-0400',
    updatedAt: 'Fri Nov 21 2025 15:02:10 GMT-0400',
  },
];


//   MESSAGES 

export const dummyMessages = [
  {
    id: 'msg501',
    chatId: 'chat_1',
    sender_id: 'user_2',
    message: 'Hey, is the tech channel still for sale?',
    createdAt: 'Fri Nov 21 2025 15:00:00 GMT-0400',
  },
  {
    id: 'msg502',
    chatId: 'chat_1',
    sender_id: 'user_1',
    message: 'Yes, still available. You need analytics screenshots?',
    createdAt: 'Fri Nov 21 2025 15:02:10 GMT-0400',
  },
];


//   ORDERS 

export const dummyOrders = [
  {
    id: '37410546-9b88-4917-a396-612e10d1df13',
    listingId: 'listing_1',
    ownerId: 'user_1',
    userId: 'user_2',
    amount: 2500,
    isPaid: true,
    createdAt: '2025-11-07T13:14:56.112Z',
    listing: dummyListings[0],
    credential: {
      id: '3c4a950f-e25b-43c7-b592-36e76215ec2f',
      listingId: 'listing_1',
      originalCredential: [
        { name: 'Email', type: 'email', value: 'user@example.com' },
        { name: 'Password', type: 'password', value: '12345678' },
      ],
      updatedCredential: [
        { name: 'Email', type: 'email', value: 'user@example.com' },
        { name: 'Password', type: 'password', value: '9876543210' },
      ],
      createdAt: '2025-11-07T13:13:08.881Z',
    },
  },
];


//   WITHDRAWAL REQUESTS

export const dummyWithdrawalRequests = [
  {
    id: '79443d65-8dc4-447b-9d27-3a862387fa5a',
    userId: 'user_1',
    amount: 1000,
    account: [
      { name: 'Account Holder Name', type: 'text', value: 'John Doe' },
      { name: 'Bank Name', type: 'text', value: 'Bank Of America' },
      { name: 'Account Number', type: 'number', value: '112233445566' },
      { name: 'Account Type', type: 'text', value: 'Saving' },
      { name: 'SWIFT', type: 'text', value: 'AM9908TY09' },
      { name: 'Branch', type: 'text', value: 'LA' },
    ],
    isWithdrawn: true,
    createdAt: '2025-11-09T06:00:35.759Z',
    updatedAt: '2025-11-09T13:05:26.385Z',
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
    description: "Build and maintain our marketplace platform using React, TypeScript, and modern web technologies.",
    responsibilities: [
      "Develop responsive web applications using React and Tailwind CSS",
      "Collaborate with designers to implement pixel-perfect UI/UX",
      "Optimize application performance and user experience",
      "Write clean, maintainable code with proper documentation",
      "Participate in code reviews and team discussions"
    ],
    requirements: [
      "3+ years of experience with React and modern JavaScript",
      "Strong understanding of responsive design principles",
      "Experience with state management (Redux, Zustand)",
      "Familiarity with Git and version control",
      "Excellent communication skills in English"
    ],
    niceToHave: [
      "Experience with Next.js or similar frameworks",
      "Knowledge of web performance optimization",
      "Previous work in marketplace or e-commerce platforms"
    ],
    posted: "2025-01-02"
  },
  {
    id: "job_2",
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Senior",
    salary: "$55,000 - $75,000 USD",
    description: "Design and build scalable backend systems for our social media marketplace platform.",
    responsibilities: [
      "Design and implement RESTful APIs and microservices",
      "Manage database architecture and optimization",
      "Ensure application security and data protection",
      "Integrate third-party services and payment gateways",
      "Monitor system performance and troubleshoot issues"
    ],
    requirements: [
      "5+ years of backend development experience",
      "Proficiency in Node.js, Python, or similar languages",
      "Strong knowledge of SQL and NoSQL databases",
      "Experience with cloud platforms (AWS, Google Cloud)",
      "Understanding of RESTful API design principles"
    ],
    niceToHave: [
      "Experience with payment processing systems",
      "Knowledge of microservices architecture",
      "Familiarity with DevOps practices"
    ],
    posted: "2025-01-01"
  },
  {
    id: "job_3",
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Mid-Level",
    salary: "$40,000 - $60,000 USD",
    description: "Create intuitive and beautiful user experiences for our marketplace platform.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity mockups",
      "Collaborate with developers to ensure design implementation",
      "Maintain and evolve our design system"
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating design thinking",
      "Understanding of responsive and mobile-first design",
      "Experience with user research methodologies"
    ],
    niceToHave: [
      "Motion design or animation skills",
      "Basic HTML/CSS knowledge",
      "Experience designing marketplace platforms"
    ],
    posted: "2024-12-28"
  },
  {
    id: "job_4",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Mid-Level",
    salary: "$38,000 - $55,000 USD",
    description: "Drive growth and engagement through strategic marketing campaigns and content creation.",
    responsibilities: [
      "Develop and execute digital marketing campaigns",
      "Create engaging content for social media platforms",
      "Manage email marketing and automation",
      "Analyze campaign performance and metrics",
      "Collaborate with design team on marketing materials"
    ],
    requirements: [
      "3+ years of digital marketing experience",
      "Strong understanding of social media marketing",
      "Experience with marketing analytics tools",
      "Excellent writing and communication skills",
      "Knowledge of SEO and content marketing"
    ],
    niceToHave: [
      "Experience in the tech or marketplace industry",
      "Video content creation skills",
      "Caribbean market knowledge"
    ],
    posted: "2024-12-30"
  },
  {
    id: "job_5",
    title: "Customer Success Manager",
    department: "Customer Support",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Entry-Level",
    salary: "$30,000 - $45,000 USD",
    description: "Help our users succeed by providing exceptional support and building lasting relationships.",
    responsibilities: [
      "Respond to customer inquiries via email, chat, and phone",
      "Onboard new users and guide them through the platform",
      "Identify and resolve customer issues efficiently",
      "Gather customer feedback for product improvement",
      "Create help documentation and tutorials"
    ],
    requirements: [
      "1-2 years of customer service experience",
      "Excellent communication and problem-solving skills",
      "Empathetic and patient approach to customer interactions",
      "Ability to work independently in a remote environment",
      "Familiarity with support tools (Zendesk, Intercom, etc.)"
    ],
    niceToHave: [
      "Experience with social media platforms",
      "Caribbean cultural awareness",
      "Multiple language proficiency"
    ],
    posted: "2025-01-02"
  },
  {
    id: "job_6",
    title: "Content Creator",
    department: "Marketing",
    location: "Remote / Caribbean",
    type: "Part-time",
    experience: "Entry-Level",
    salary: "$20,000 - $30,000 USD",
    description: "Create engaging content that showcases our platform and helps users succeed.",
    responsibilities: [
      "Produce video tutorials and educational content",
      "Write blog posts and social media content",
      "Create graphics and visual assets",
      "Interview successful sellers and buyers",
      "Maintain content calendar and publishing schedule"
    ],
    requirements: [
      "1+ year of content creation experience",
      "Strong writing and storytelling skills",
      "Basic video editing capabilities",
      "Understanding of social media trends",
      "Self-motivated and creative"
    ],
    niceToHave: [
      "Photography skills",
      "Experience with social media management",
      "Caribbean market knowledge"
    ],
    posted: "2024-12-25"
  },
  {
    id: "job_7",
    title: "Product Manager",
    department: "Product",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Senior",
    salary: "$60,000 - $85,000 USD",
    description: "Lead product strategy and development for our marketplace platform.",
    responsibilities: [
      "Define product vision and roadmap",
      "Prioritize features based on user needs and business goals",
      "Work with engineering and design teams on execution",
      "Conduct market research and competitive analysis",
      "Analyze product metrics and user feedback"
    ],
    requirements: [
      "5+ years of product management experience",
      "Strong analytical and strategic thinking skills",
      "Experience with marketplace or e-commerce products",
      "Excellent stakeholder management abilities",
      "Data-driven decision making approach"
    ],
    niceToHave: [
      "Technical background or engineering degree",
      "Experience in Caribbean or emerging markets",
      "Social media industry knowledge"
    ],
    posted: "2024-12-20"
  },
  {
    id: "job_8",
    title: "Data Analyst",
    department: "Analytics",
    location: "Remote / Caribbean",
    type: "Full-time",
    experience: "Mid-Level",
    salary: "$45,000 - $65,000 USD",
    description: "Turn data into insights that drive business decisions and platform improvements.",
    responsibilities: [
      "Analyze user behavior and marketplace trends",
      "Create dashboards and reports for stakeholders",
      "Conduct A/B testing and experiment analysis",
      "Identify opportunities for growth and optimization",
      "Build predictive models for business forecasting"
    ],
    requirements: [
      "3+ years of data analysis experience",
      "Proficiency in SQL and data visualization tools",
      "Strong statistical analysis skills",
      "Experience with Python or R for data analysis",
      "Ability to communicate insights to non-technical audiences"
    ],
    niceToHave: [
      "Machine learning experience",
      "E-commerce or marketplace analytics background",
      "Experience with BigQuery or similar platforms"
    ],
    posted: "2024-12-27"
  }
];