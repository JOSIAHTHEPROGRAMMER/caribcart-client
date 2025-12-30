import logo from './NiceLogo.png';
import { CiLinkedin } from 'react-icons/ci';
import { CgYoutube, CgInstagram, CgFacebook, CgTwitter } from 'react-icons/cg';
import {
  Music2, 
  Pin, Camera, Gamepad2, MessageCircle
} from 'lucide-react';

import image_1 from './image_1.jpg';
import image_2 from './image_2.jpg';
import image_3 from './image_3.jpg';
import image_4 from './image_4.jpg';

import user_profile from './default_pic.png';
import { tr } from 'motion/react-client';



// ASSETS

export const assets = { logo, user_profile };

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
    createdAt: 'Fri Nov 21 2025 14:32:10 GMT-0400',
    updatedAt: 'Fri Nov 21 2025 14:32:10 GMT-0400',
  },
  {
    id: 'user_2',
    email: 'beachvibes@example.com',
    name: 'Renee Charles',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
    createdAt: 'Fri Nov 21 2025 14:34:50 GMT-0400',
    updatedAt: 'Fri Nov 21 2025 14:35:00 GMT-0400',
  },
  {
    id: 'user_3',
    email: 'calypsoking@example.com',
    name: 'Darren Joseph',
    image: 'https://randomuser.me/api/portraits/men/71.jpg',
    createdAt: 'Fri Nov 21 2025 14:40:22 GMT-0400',
    updatedAt: 'Fri Nov 21 2025 14:40:22 GMT-0400',
  },
  {
    id: 'user_4',
    email: 'islandgirl@example.com',
    name: 'Tara Singh',
    image: 'https://randomuser.me/api/portraits/women/67.jpg',
    createdAt: 'Fri Nov 21 2025 14:50:11 GMT-0400',
    updatedAt: 'Fri Nov 21 2025 14:50:11 GMT-0400',
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
      "Community Access",
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
    isCredentialChanged: false,
    createdAt: 'Fri Nov 21 2025 14:32:10 GMT-0400',
    updatedAt: 'Fri Nov 21 2025 14:40:02 GMT-0400',
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
    createdAt: 'Fri Nov 21 2025 14:35:00 GMT-0400',
    updatedAt: 'Fri Nov 21 2025 14:35:00 GMT-0400',
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
    description: 'Explosive Caribbean workout channel.',
    verified: true,
    monetized: true,
    country: 'Barbados',
    age_range: '18-34',
    status: 'pending',
    featured: true,
    images: [image_1, image_3],
    platformAssured: true,
    owner: dummyUsers[2],
    isCredentialSubmitted: false,
    isCredentialVerified: false,
    isCredentialChanged: false,
    createdAt: 'Fri Nov 21 2025 14:40:22 GMT-0400',
    updatedAt: 'Fri Nov 21 2025 14:45:55 GMT-0400',
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
    createdAt: 'Fri Nov 21 2025 14:50:11 GMT-0400',
    updatedAt: 'Fri Nov 21 2025 14:55:10 GMT-0400',
  },
];

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
