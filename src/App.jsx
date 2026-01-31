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
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox";
import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import CredentialChange from "./pages/admin/CredentialChange";
import CredentialVerify from "./pages/admin/CredentialVerify";
import AllListings from "./pages/admin/AllListings";
import Transactions from "./pages/admin/Transactions";
import Withdrawal from "./pages/admin/Withdrawal";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getAllPublicListing,
  getAllUserListing,
} from "./app/features/listingSlice";

const App = () => {
  const { pathname } = useLocation();
  const { getToken } = useAuth();

  const { user, isLoaded } = useUser();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPublicListing());
  }, []);

  useEffect(() => {
    if (isLoaded && user) {
      dispatch(getAllUserListing({ getToken }));
    }
  }, [isLoaded, user]);

  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#FF6B6B",
            color: "#fff",
            fontWeight: "600",
            borderRadius: "0.5rem",
          },
        }}
      />

      {!pathname.includes("/admin") && <Navbar />}
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/loading/:nextUrl" element={<Loading />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/aboutus" element={<AboutUs />} />

        {/* Listings */}
        <Route path="/mylistings" element={<MyListing />} />
        <Route path="/createlisting" element={<ManageListing />} />
        <Route path="/editlisting/:listingId" element={<ManageListing />} />
        <Route path="/listing/:listingId" element={<ListingDetails />} />

        {/* Orders */}
        <Route path="/myorders" element={<MyOrders />} />

        {/* Messaging */}
        <Route path="/messages" element={<Messages />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactForm />} />

        {/* Admin */}

        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="verify-credentials" element={<CredentialVerify />} />
          <Route path="change-credentials" element={<CredentialChange />} />
          <Route path="list-listings" element={<AllListings />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="withdrawal" element={<Withdrawal />} />
        </Route>
      </Routes>
      {!pathname.includes("/admin") && <Footer />}
      <ChatBox />
    </div>
  );
};

export default App;
