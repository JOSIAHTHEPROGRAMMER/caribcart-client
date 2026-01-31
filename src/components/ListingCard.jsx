import React from "react";
import { MapPin, FileLineChart, User, BadgeCheck } from "lucide-react";
import { platformIcons } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import {
  formatCurrency,
  formatCurrencyWithConversion,
  getUserCountry,
} from "../lib/utils";

const ListingCard = ({ listing }) => {
  const navigator = useNavigate();

  if (!listing) return null;

  return (
    <div className="relative rounded-3xl bg-white/95 backdrop-blur border border-slate-400 p-5 flex flex-col justify-between">
      {/* FEATURED BADGE */}
      {listing.featured && (
        <div className="absolute -top-3 -left-3 z-20">
          <span
            className="px-4 py-1 text-xs font-semibold text-white rounded-full
            bg-linear-to-r from-[#FF6B35] via-[#F7C948] to-[#FF9F1C]"
          >
            Featured
          </span>
        </div>
      )}

      {/* HEADER */}
      <div className="rounded-xl p-0.5 bg-linear-to-tr from-[#00B4D8] via-[#0096C7] to-[#0077B6]">
        <div className="bg-white rounded-xl p-4 flex items-center gap-3">
          {platformIcons[listing.platform]}

          <div>
            <h3 className="font-semibold text-gray-800">{listing.title}</h3>
            <p className="text-sm text-gray-500 mt-2">
              @{listing.username} ·{" "}
              <span className="capitalize">{listing.platform}</span>{" "}
            </p>
          </div>

          {listing.verified && (
            <BadgeCheck className="ml-auto text-sky-500 w-5 h-5" />
          )}
        </div>
      </div>

      {/* BODY: STATS + DESCRIPTION */}
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{listing.followers_count?.toLocaleString()} Followers</span>
          </div>

          {listing.engagement_rate && (
            <div className="flex items-center gap-2">
              <FileLineChart className="w-4 h-4" />
              <span>{listing.engagement_rate}% Engagement</span>
            </div>
          )}

          {listing.country && (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{listing.country}</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <span
              className="ml-4 px-2 py-1 capitalize w-24 text-center rounded-lg text-xs font-semibold text-white 
          bg-linear-to-r
from-[#00B4D8]/80
via-[#0096C7]/80
to-[#0077B6]/80
"
            >
              {listing.niche}
            </span>
          </div>
        </div>

        <p className="text-gray-600 leading-snug line-clamp-4">
          {listing.description}
        </p>
      </div>

      {/* FOOTER */}
      <div className="mt-4 flex items-center justify-between">
        <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-[#00B4D8] to-[#06D6A0]">
          {formatCurrencyWithConversion(
            listing.price,
            "Trinidad & Tobago",
            getUserCountry(),
          )}
        </span>

        <button
          onClick={() => {
            navigator(`/listing/${listing.id}`);
            window.scrollTo(0, 0);
          }}
          className="px-5 py-2 text-sm font-semibold rounded-lg text-white
            bg-linear-to-r from-[#FF6B6B] to-[#FFD93D]
            hover:bg-linear-to-r hover:from-teal-400 hover:via-cyan-500 hover:to-blue-800
            transition-all duration-300"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
