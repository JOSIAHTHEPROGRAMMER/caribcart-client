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
  theme: "system",

  variables: {
    // PRIMARY / BRAND COLORS
    colorPrimary: "#FF9F1C",
    colorPrimaryForeground: "#FFFFFF",



    // FEEDBACK COLORS
    colorSuccess: "#3C91E6",
    colorDanger: "#FF6B6B",
    colorWarning: "#ff8e3dff",

  }
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
