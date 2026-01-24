import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dummyChats, getProfileLink, platformIcons } from "../assets/assets";
import { LoaderOne } from "../components/ui/loader";
import {
  ArrowLeftIcon,
  ArrowUpRightFromSquare,
  BadgeCheck,
  Calendar,
  DollarSign,
  Eye,
  LineChart,
  MessageSquareMoreIcon,
  ShieldCheck,
  ShoppingBagIcon,
  Users,
} from "lucide-react";
import { formatCurrencyWithConversion } from "../lib/utils";
import Badge from "../components/ui/Badge";
import SliderButton from "../components/ui/SliderButton";
import InfoCard from "../components/ui/InfoCard";
import Metric from "../components/ui/Metric";
import Detail from "../components/ui/Detail";
import { setChat } from "../app/features/chatSlice";

const ListingDetails = () => {
  const navigate = useNavigate();
  const { listingId } = useParams();
  const { listings } = useSelector((state) => state.listing);

  const [listing, setListing] = useState(null);
  const [current, setCurrent] = useState(0);

  const dispatch = useDispatch();

  const images = listing?.images || [];

  //  SWIPE HANDLING
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const prevSlide = () => {
    if (images.length <= 1) return;
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    if (images.length <= 1) return;
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) < 60) return;

    diff > 0 ? nextSlide() : prevSlide();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handlePurchaseAccount = async () => {};

  const handleLoadChat = () => {
    const existingChat = dummyChats.find((c) => c.listing.id === listing.id);

    dispatch(
      setChat({
        listing,
        chatId: existingChat?.id ?? null,
      }),
    );
  };

  // LOAD LISTING
  useEffect(() => {
    const found = listings.find((l) => l.id === listingId);
    if (found) setListing(found);
  }, [listingId, listings]);

  if (!listing) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoaderOne />
      </div>
    );
  }

  const profileLink = getProfileLink(listing.platform, listing.username);

  return (
    <div className="mx-auto min-h-screen p-4 sm:p-6 md:px-16 lg:px-24 xl:px-32">
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-600 py-4 hover:text-slate-800"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Go Back
      </button>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* LEFT COLUMN - Main Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* HEADER */}
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
              <div className="flex gap-4">
                <div className="p-3 rounded-xl bg-gray-50 shrink-0">
                  {platformIcons[listing.platform]}
                </div>

                <div>
                  <h1 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                    {listing.title}
                    <a
                      href={profileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-sky-500"
                    >
                      <ArrowUpRightFromSquare className="w-4 h-4" />
                    </a>
                  </h1>

                  <p className="text-sm text-gray-600">
                    @{listing.username} ·{" "}
                    {listing.platform.charAt(0).toUpperCase() +
                      listing.platform.slice(1)}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {listing.verified && (
                      <Badge text="Verified" color="sky" icon={BadgeCheck} />
                    )}
                    {listing.monetized && (
                      <Badge text="Monetized" color="green" icon={DollarSign} />
                    )}
                    {listing.platformAssured && (
                      <Badge
                        text="Platform Assured"
                        color="sky"
                        icon={ShieldCheck}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className="text-lg font-bold text-gray-800 whitespace-nowrap">
                {formatCurrencyWithConversion(listing.price, listing.country)}
              </div>
            </div>
          </div>

          {/* IMAGE SLIDER */}
          {images.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-800">Screenshots</h3>
              </div>

              <div
                className="relative w-full aspect-video overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="listing proof"
                      className="w-full shrink-0 object-cover"
                    />
                  ))}
                </div>

                {images.length > 1 && (
                  <>
                    <SliderButton side="left" onClick={prevSlide} />
                    <SliderButton side="right" onClick={nextSlide} />

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrent(i)}
                          className={`w-2.5 h-2.5 rounded-full ${
                            current === i ? "bg-sky-600" : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* METRICS */}
          <InfoCard title="Account Metrics">
            <Metric
              icon={Users}
              value={listing.followers_count.toLocaleString()}
              label="Followers"
            />
            <Metric
              icon={LineChart}
              value={`${listing.engagement_rate}%`}
              label="Engagement"
            />
            <Metric
              icon={Eye}
              value={listing.monthly_views.toLocaleString()}
              label="Monthly Views"
            />
            <Metric
              icon={Calendar}
              value={new Date(listing.createdAt).toLocaleDateString()}
              label="Listed"
            />
          </InfoCard>

          {/* DESCRIPTION */}
          <InfoCard title="Description" single>
            <p className="text-sm text-gray-600">{listing.description}</p>
          </InfoCard>

          {/* DETAILS */}
          <InfoCard title="Additional Details">
            <Detail label="Niche" value={listing.niche} />
            <Detail label="Primary Country" value={listing.country} />
            <Detail label="Audience Age" value={listing.age_range} />
            <Detail label="Status" value={listing.status} />
            <Detail
              label="Credentials"
              value={
                listing.isCredentialVerified
                  ? "Verified"
                  : listing.isCredentialSubmitted
                    ? "Submitted"
                    : "Not Submitted"
              }
            />
            <Detail label="Featured" value={listing.featured ? "Yes" : "No"} />
          </InfoCard>
        </div>

        {/* RIGHT COLUMN - Seller Card */}
        <div className="lg:w-80 shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4 lg:sticky lg:top-6">
            <h4 className="font-semibold text-gray-800">Seller Information</h4>

            <div className="flex items-center gap-4">
              <img
                src={listing.owner?.image || "/avatar-placeholder.png"}
                alt={listing.owner?.name}
                className="w-14 h-14 rounded-full object-cover border"
              />

              <div className="flex-1">
                <p className="font-semibold text-gray-800">
                  {listing.owner?.name}
                </p>
                <p className="text-sm text-gray-500">{listing.owner?.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span>
                Member since{" "}
                <span className="font-medium text-gray-800">
                  {new Date(listing.owner?.createdAt).toLocaleDateString()}
                </span>
              </span>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={handleLoadChat}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-sky-500 text-sky-600 hover:bg-sky-50 transition text-sm font-medium"
              >
                <MessageSquareMoreIcon className="w-4 h-4" />
                Chat
              </button>

              {listing.isCredentialChanged && (
                <button
                  onClick={handlePurchaseAccount}
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 transition text-sm font-medium"
                >
                  <ShoppingBagIcon className="w-4 h-4" />
                  Purchase
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
