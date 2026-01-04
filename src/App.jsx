import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Loading from "./pages/Loading";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import MyOrders from "./pages/MyOrders";
import MyListing from "./pages/MyListing";
import Messages from "./pages/Messages";
import ManageListing from "./pages/ManageListing";
import ListingDetails from "./pages/ListingDetails";
import ContactForm from "./pages/ContactForm";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import { Toaster } from 'react-hot-toast';
import Footer from "./components/Footer";


const App = () => {
  const {pathname} = useLocation();



  return (
    <div>
      <Toaster
  position="top-right"
  toastOptions={{
    duration: 3000,
    style: {
      background: '#FF6B6B',
      color: '#fff',
      fontWeight: '600',
      borderRadius: '0.5rem',
    },
  }}
/>

      {!pathname.includes('/admin') && <Navbar />}
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* Listings */}
        <Route path="/mylisting" element={<MyListing />} />
        <Route path="/createlisting" element={<ManageListing />} />
        <Route path="/editlisting/:listingId" element={<ManageListing />} />
        <Route path="/listing/:listingId" element={<ListingDetails />} />

        {/* Orders */}
        <Route path="/myorders" element={<MyOrders />} />

        {/* Messaging */}
        <Route path="/messages" element={<Messages />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
           {!pathname.includes('/admin') && <Footer />}
    </div>
  );
};

export default App;
