import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}



const clerkAppearance = {
  theme: 'system', // Automatically switch based on OS preference
  variables: {
    // PRIMARY / BRAND COLORS
    colorPrimary: "#FF9F1C",
    colorPrimaryForeground: "#FFFFFF",

    colorAccent: "#00B4D8",
    colorAccentForeground: "#FFFFFF",

    // FEEDBACK COLORS
    colorSuccess: "#3C91E6",
    colorDanger: "#FF6B6B",
    colorWarning: "#ff8e3dff",

    // LIGHT MODE COLORS 
    colorBackground: "#FFFFFF",          
    colorForeground: "#1A1A1A",          
    colorMutedForeground: "#666666",     
    colorInput: "#F5F5F5",              
    colorInputForeground: "#1A1A1A",    
    colorBorder: "#CCCCCC",
    colorRing: "#1DD3B0",                
    colorShadow: "rgba(0,0,0,0.1)",
    colorModalBackdrop: "rgba(0,0,0,0.2)",
    colorShimmer: "#E0E0E0",
    colorMuted: "#F0F0F0",

    // DARK MODE COLORS 
    colorBackgroundDark: "#121212",
    colorForegroundDark: "#FFFFFF",
    colorMutedForegroundDark: "#AAAAAA",
    colorInputDark: "#1E1E1E",
    colorInputForegroundDark: "#FFFFFF",
    colorBorderDark: "#333333",
    colorRingDark: "#1DD3B0",
    colorShadowDark: "rgba(0,0,0,0.5)",
    colorModalBackdropDark: "rgba(0,0,0,0.6)",
    colorShimmerDark: "#2A2A2A",
    colorMutedDark: "#2C2C2C",
  },
  



};


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} appearance={clerkAppearance}>
     <Provider store={store}>
      <App />

      </Provider>
    </ClerkProvider>

  </BrowserRouter>,

)
