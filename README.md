# CaribCart

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub repo size](https://img.shields.io/github/repo-size/JOSIAHTHEPROGRAMMER/caribcart-client?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/JOSIAHTHEPROGRAMMER/caribcart-client?style=for-the-badge)

A secure marketplace platform for buying and selling social media accounts. CaribCart connects verified sellers with buyers in a trusted environment, supporting major platforms including Instagram, X (Twitter), Telegram, and YouTube.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [User Roles](#user-roles)
- [Contributing](#contributing)
- [License](#license)

## Overview

CaribCart is a full-stack marketplace application built with React and modern web technologies. The platform provides a secure environment for users to list, browse, and purchase social media accounts while facilitating communication between buyers and sellers through an integrated messaging system.

Designed specifically for the Caribbean market, CaribCart offers multi-currency support with automatic geolocation-based currency detection and real-time price conversion across 17 Caribbean territories.

## Features

### Multi-Currency & Localization
- **Automatic Currency Detection** - Detects user location via IP geolocation and displays prices in local currency
- **17 Caribbean Currencies Supported** - TTD, JMD, BBD, XCD, BSD, GYD, SRD, BZD, KYD, HTG, DOP, CUP, and USD
- **Real-Time Price Conversion** - Automatic currency conversion between seller and buyer currencies
- **Persistent Currency Preference** - Saves user's selected currency for consistent experience
- **Smart Currency Display** - Shows prices in user's local currency while preserving original listing currency

### For Sellers
- Create and manage social media account listings
- Upload images and detailed account information
- Set prices in local currency with automatic conversion for buyers
- Track listing performance and views
- Manage active, pending, and sold listings
- Direct messaging with potential buyers
- Secure credential transfer system

### For Buyers
- Browse marketplace with advanced filtering
- View prices automatically converted to local currency
- View detailed listing information
- Contact sellers through in-app messaging
- Track order history
- Secure payment and credential reception

### For Administrators
- Dashboard with key metrics and analytics
- Manage all platform listings
- Verify user credentials
- Handle credential change requests
- Monitor transactions and withdrawals
- User management and moderation tools

### General Features
- User authentication and authorization via Clerk
- Responsive design for mobile and desktop
- Real-time chat functionality with smart date formatting
- Advanced search and filtering
- Secure credential verification system
- Transaction tracking and management
- Intelligent date display (Today, Yesterday, or full date)

## Supported Countries & Currencies

| Country | Currency Code | Symbol |
|---------|--------------|--------|
| Trinidad & Tobago | TTD | $ |
| Jamaica | JMD | $ |
| Barbados | BBD | $ |
| Saint Lucia | XCD | $ |
| Saint Vincent and the Grenadines | XCD | $ |
| Grenada | XCD | $ |
| Dominica | XCD | $ |
| Antigua and Barbuda | XCD | $ |
| Saint Kitts and Nevis | XCD | $ |
| Bahamas | BSD | $ |
| Guyana | GYD | $ |
| Suriname | SRD | $ |
| Belize | BZD | $ |
| Cayman Islands | KYD | $ |
| Haiti | HTG | $ |
| Dominican Republic | DOP | $ |
| Cuba | CUP | $ |

**Note:** USD is used as the default currency for unsupported regions.

## Tech Stack

### Core Technologies
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![React DOM](https://img.shields.io/badge/React_DOM-19.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### State Management
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.10.1-764ABC?style=flat-square&logo=redux&logoColor=white)
![React Redux](https://img.shields.io/badge/React_Redux-9.2.0-764ABC?style=flat-square&logo=redux&logoColor=white)

### Routing
![React Router](https://img.shields.io/badge/React_Router-7.9.6-CA4245?style=flat-square&logo=react-router&logoColor=white)

### UI & Styling
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-0.554.0-F56565?style=flat-square&logo=lucide&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-12.23.24-FF0080?style=flat-square&logo=framer&logoColor=white)

### Authentication
![Clerk](https://img.shields.io/badge/Clerk-5.59.2-6C47FF?style=flat-square&logo=clerk&logoColor=white)

### Utilities
![date-fns](https://img.shields.io/badge/date--fns-4.1.0-770C56?style=flat-square&logo=date-fns&logoColor=white)
![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-2.6.0-FF6B6B?style=flat-square)

### Development Tools
![ESLint](https://img.shields.io/badge/ESLint-9.39.1-4B32C3?style=flat-square&logo=eslint&logoColor=white)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher recommended)
- npm or yarn package manager
- A Clerk account for authentication setup

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JOSIAHTHEPROGRAMMER/caribcart-client.git
cd caribcart-client
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration values.

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure
```
src/
├── app/                    # Redux store and slices
│   ├── features/
│   │   ├── chatSlice.js
│   │   └── listingSlice.js
│   └── store.js
├── assets/                 # Static assets and images
├── components/             # Reusable components
│   ├── admin/             # Admin-specific components
│   ├── ui/                # UI primitives
│   └── ...                # Shared components
├── lib/                   # Utility functions
│   └── utils.js           # Currency conversion, date formatting, and helpers
├── pages/                 # Route pages
│   ├── admin/            # Admin dashboard pages
│   └── ...               # Public pages
├── App.jsx               # Main application component
├── main.jsx              # Application entry point
└── index.css             # Global styles
```

## Available Scripts

### Development
```bash
npm run dev
```
Starts the development server with hot module replacement.

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality and style.

### Preview
```bash
npm run preview
```
Previews the production build locally.

## Environment Variables

Create a `.env` file in the root directory with the following variables:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=your_backend_api_url
```

Refer to `.env.example` for the complete list of required environment variables.

## User Roles

### Buyer
- Browse and search listings
- View prices in local currency
- View detailed account information
- Message sellers
- Purchase accounts
- Track orders

### Seller
- Create and manage listings
- Set prices in local currency
- Upload account details and credentials
- Communicate with buyers
- Track sales and earnings
- Request withdrawals

### Administrator
- Access admin dashboard
- Manage all listings
- Verify credentials
- Handle disputes
- Monitor platform activity
- Manage user accounts

## Key Pages

### Public Pages
- **Home** - Landing page with platform overview
- **Marketplace** - Browse all available listings with currency conversion
- **Listing Details** - Detailed view of individual listings
- **About Us** - Information about the platform
- **Contact** - Contact form for support
- **Careers** - Job opportunities
- **Privacy Policy** - Platform privacy information

### User Pages
- **Messages** - Chat interface with buyers/sellers
- **My Listings** - Seller's listing management
- **Manage Listing** - Create and edit listings
- **My Orders** - Buyer's purchase history

### Admin Pages
- **Dashboard** - Overview metrics and analytics
- **All Listings** - Manage platform listings
- **Transactions** - Transaction monitoring
- **Withdrawal** - Handle withdrawal requests
- **Credential Verify** - Verify user credentials
- **Credential Change** - Process credential changes

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary. All rights reserved.

---

Built with React and Vite. Designed for the Caribbean market. For questions or support, please contact the repo owner.
