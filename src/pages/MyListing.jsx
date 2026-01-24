import {
  ArrowDownCircleIcon,
  CheckCircle,
  Clock,
  CoinsIcon,
  DollarSign,
  Edit,
  Eye,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  Plus,
  StarIcon,
  Trash,
  TrashIcon,
  TrendingUp,
  Users,
  Wallet2Icon,
  XCircle,
} from "lucide-react";
import React, { use, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StatCard from "../components/StatCard";
import { formatCurrencyWithConversion, getUserCountry } from "../lib/utils";
import { platformIcons } from "../assets/assets";
import { useTime } from "motion/react";
import CredentialSubmissionModal from "../components/CredentialSubmissionModal";
import WithdrawlModal from "../components/WithdrawModal";
import Pagination from "../components/Pagination";

const ITEMS_PER_PAGE = 6;

const MyListing = () => {
  const { userListings, balance } = useSelector((state) => state.listing);
  const navigate = useNavigate();
  const [showCredSubmission, setShowCredSubmission] = useState(null);
  const [showWithdrawal, setShowWithdrawal] = useState(null);

  const totalValue = userListings.reduce(
    (sum, listing) => sum + (listing.price || 0),
    0,
  );

  const [currentPage, setCurrentPage] = useState(1);
  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [userListings]);

  // Calculate pagination
  const totalPages = Math.ceil(userListings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentListings = userListings.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    } else {
      return num.toString();
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="size-3.5 text-green-500" />;
      case "sold":
        return <DollarSign className="size-3.5 text-orange-500" />;
      case "ban":
        return <LockIcon className="size-3.5 text-red-500" />;
      case "inactive":
        return <XCircle className="size-3.5 text-gray-400" />;
      default:
        return <Clock className="size-3.5" />;
    }
  };

  const toggleStatus = async (listingId) => {};

  const deleteListing = async (listingId) => {};

  const markAsFeatured = async (listingId) => {};

  const activeListings = userListings.filter(
    (listing) => listing.status === "active",
  ).length;

  const soldListings = userListings.filter(
    (listing) => listing.status === "sold",
  ).length;

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 pt-10 pb-16">
      {/* Page header with title and create button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Listings</h1>
          <p className="text-gray-600 mt-1">
            Manage your social media account listings
          </p>
        </div>

        <button
          onClick={() => navigate("/createlisting")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
            bg-linear-to-r from-[#FF6B6B] to-[#FFD93D]
            text-white font-medium  hover:bg-linear-to-r hover:from-teal-400 hover:via-cyan-500 hover:to-blue-800
            transition duration-300 
            "
        >
          <Plus className="w-4 h-4" />
          <span>Add Listing</span>
        </button>
      </div>

      {/* Overview statistics cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Listings"
          value={userListings.length}
          icon={<Eye />}
          color="sky"
          className="size-6"
        />

        <StatCard
          title="Active Listings"
          value={activeListings}
          icon={<CheckCircle />}
          color="green"
          className="size-6"
        />

        <StatCard
          title="Sold Listings"
          value={soldListings}
          icon={<TrendingUp />}
          color="orange"
          className="size-6"
        />

        <StatCard
          title="Total Value"
          value={formatCurrencyWithConversion(
            totalValue.toFixed(2),
            getUserCountry(),
            getUserCountry(),
          )}
          icon={<DollarSign />}
          color="blue"
          className="size-6"
        />
      </div>

      {/* Balance breakdown section */}
      <div
        className="flex flex-col sm:flex-row justify-between mb-10 mt-10
      gap-4 xl:gap-20 p-6  bg-white rounded-l-xl border
      border-gray-200"
      >
        {[
          { label: "Earned", value: balance?.earned ?? 0, Icon: Wallet2Icon },
          {
            label: "Withdrawn",
            value: balance?.withdrawn ?? 0,
            Icon: ArrowDownCircleIcon,
          },
          {
            label: "Available",
            value: balance?.available ?? 0,
            Icon: CoinsIcon,
          },
        ].map((item, index) => (
          <div
            onClick={() =>
              item.label === "Available" && setShowWithdrawal(true)
            }
            key={index}
            className={`flex flex-1 items-center justify-between
      p-4 rounded-lg border border-gray-200 
      bg-white ${item.label === "Available" ? "cursor-pointer hover:bg-gray-300" : ""} `}
          >
            <div className="flex items-center gap-4">
              <item.Icon className="w-6 h-6 text-gray-500" />
              <span className="font-medium text-gray-600">{item.label}</span>
            </div>

            <span className="text-lg font-semibold text-gray-800">
              {formatCurrencyWithConversion(
                Number(item.value).toFixed(2),
                getUserCountry(),
                getUserCountry(),
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Listings grid or empty state */}
      {userListings.length === 0 ? (
        <div
          className="bg=white rounded-lg border
         border-gray-200 p-16 text-center "
        >
          <div
            className="w-16 h-16
           bg-gray-100 rounded-full 
           flex items-center jusitfy-center mx-auto mb-4"
          >
            <Plus className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-800 mb-2">
            No listings found
          </h3>
          <p className="text-gray-600 mb-6">
            Start by creating your first listing{" "}
          </p>
          <button
            onClick={() => navigate("/createlisting")}
            className="gap-2 px-6 py-2.5 rounded-lg
            bg-linear-to-r from-[#FF6B6B] to-[#FFD93D]
            text-white font-medium  hover:bg-linear-to-r hover:from-teal-400 hover:via-cyan-500 hover:to-blue-800
            transition duration-300
            "
          >
            Create Listing
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white rounded-lg border border-gray-200 
      hover:shadow-2xl transition-shadow shadow-gray-200/70 duration-300"
            >
              <div className="p-6">
                {/* Card header with platform icon, title, and status indicators */}
                <div className="flex items-center justify-between">
                  {/* Platform icon and account info */}
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="shrink-0">
                      {platformIcons[listing.platform]}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-gray-800 truncate">
                        {listing.title}
                      </h3>
                      <p className="text-xs text-gray-500 truncate">
                        @{listing.username}
                      </p>
                    </div>
                  </div>

                  {/* Credential status and featured badge */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="relative group">
                      <LockIcon
                        size={14}
                        className="text-gray-400 cursor-pointer"
                      />

                      <div
                        className="absolute right-0 top-full mt-2 invisible opacity-0
                group-hover:visible group-hover:opacity-100
                bg-white text-gray-600 text-xs rounded border
                border-gray-200 p-2 px-3 z-10
                transition-all duration-200 pointer-events-auto"
                      >
                        {!listing.isCredentialVerified && (
                          <>
                            <button
                              onClick={() => setShowCredSubmission(listing)}
                              className="block text-left w-full text-nowrap hover:text-gray-900"
                            >
                              Add Credentials
                            </button>
                            <hr className="my-1 border-gray-200" />
                          </>
                        )}

                        <div className="text-nowrap">
                          Status:{" "}
                          <span
                            className={
                              listing.isCredentialSubmitted
                                ? listing.isCredentialVerified
                                  ? listing.isCredentialChanged
                                    ? "text-green-500"
                                    : "text-sky-500"
                                  : "text-gray-500"
                                : "text-red-500"
                            }
                          >
                            {listing.isCredentialSubmitted
                              ? listing.isCredentialVerified
                                ? listing.isCredentialChanged
                                  ? "Changed"
                                  : "Verified"
                                : "Submitted"
                              : "Not Submitted"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {listing.status === "active" && (
                      <StarIcon
                        onClick={() => markAsFeatured(listing.id)}
                        size={16}
                        className={`text-yellow-500 ${
                          listing.featured && "fill-amber-300"
                        }`}
                      />
                    )}
                  </div>
                </div>

                {/* Account metrics and listing status */}
                <div className="space-y-5 mt-5">
                  {/* Follower count, engagement rate, and current status */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="size-4 text-gray-400" />
                        <span>
                          {formatNumber(listing.followers_count)} Followers
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <TrendingUp className="size-4 text-gray-400" />
                        <span>{listing.engagement_rate}% Engagement</span>
                      </div>
                    </div>

                    <span className="flex items-center gap-2 capitalize">
                      {getStatusIcon(listing.status)}
                      <span>{listing.status}</span>
                    </span>
                  </div>

                  {/* Listing price  and action buttons*/}
                  <div className="pt-4 flex justify-between  border-t border-gray-200">
                    <span className="text-2xl font-bold text-gray-800">
                      {formatCurrencyWithConversion(
                        Number(listing.price).toFixed(2),
                        getUserCountry(),
                        getUserCountry(),
                      )}
                    </span>
                    <div className="flex items-center space-x-2">
                      {listing.status === "sold" && (
                        <button
                          onClick={() => deleteListing(listing.id)}
                          className="p-2 border border-gray-300 
                             rounded-lg hover:bg-gray-50 hover:text-red-500"
                        >
                          <TrashIcon className="size-4" />
                        </button>
                      )}

                      <button
                        onClick={() => navigate(`/editlisting/${listing.id}`)}
                        className="p-2 border border-gray-300 
                             rounded-lg hover:bg-gray-50 hover:text-gray-600"
                      >
                        <Edit className="size-4" />
                      </button>

                      <button
                        onClick={() => toggleStatus(listing.id)}
                        className="p-2 border border-gray-300 
                             rounded-lg hover:bg-gray-50 hover:text-sky-500"
                      >
                        {listing.status === "active" ? (
                          <EyeOffIcon className="size-4" />
                        ) : (
                          <EyeIcon className="size-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={userListings.length}
      />
      {showCredSubmission && (
        <CredentialSubmissionModal
          listing={showCredSubmission}
          onClose={() => setShowCredSubmission(null)}
        />
      )}

      {showWithdrawal && (
        <WithdrawlModal onClose={() => setShowWithdrawal(null)} />
      )}
    </div>
  );
};

export default MyListing;
