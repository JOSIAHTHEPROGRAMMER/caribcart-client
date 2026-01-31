import { ArrowLeftIcon } from "lucide-react";
import React, { useMemo, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import ListingCard from "../components/ListingCard";
import FilterSidebar from "../components/FilterSidebar";
import Pagination from "../components/Pagination";
import { convertCurrency, getUserCountry } from "../lib/utils";

const ITEMS_PER_PAGE = 6;

const Marketplace = () => {
  const navigate = useNavigate();
  const listings = useSelector((state) => state.listing.listings);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const [showFilterPhone, setShowFilterPhone] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    country: null,
    platform: null,
    maxPrice: convertCurrency(100000, "Trinidad & Tobago", getUserCountry()),
    minFollowers: 0,
    niche: null,
    verified: false,
    monetized: false,
  });

  const filteredListings = useMemo(() => {
    return listings
      .filter((listing) => {
        if (filters.platform && filters.platform.length > 0) {
          if (!filters.platform.includes(listing.platform)) return false;
        }

        if (filters.country && filters.country.length > 0) {
          if (!filters.country.includes(listing.country)) return false;
        }

        const maxPriceNormalized = convertCurrency(
          filters.maxPrice,
          "Trinidad & Tobago",
          listing.country,
        );

        //  if (listing.price > maxPriceNormalized) return false;

        if (filters.minFollowers) {
          if (listing.followers_count < filters.minFollowers) return false;
        }

        if (filters.niche && filters.niche.length > 0) {
          if (!filters.niche.includes(listing.niche)) return false;
        }

        if (filters.verified && listing.verified !== filters.verified) {
          return false;
        }

        if (filters.monetized && listing.monetized !== filters.monetized) {
          return false;
        }

        if (search) {
          const query = search.trim().toLowerCase();

          const matches =
            listing.title?.toLowerCase().includes(query) ||
            listing.username?.toLowerCase().includes(query) ||
            listing.description?.toLowerCase().includes(query) ||
            listing.country?.toLowerCase().includes(query) ||
            listing.platform?.toLowerCase().includes(query) ||
            listing.niche?.toLowerCase().includes(query);

          if (!matches) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      });
  }, [listings, filters, search]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [filters, search]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredListings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentListings = filteredListings.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="px-6 mt-4 md:px-16 lg:px-24 xl:px-32">
      <div className="flex items-center justify-between text-slate-500">
        <button
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
          className="flex sm:hidden items-center gap-2 py-5"
        >
          <ArrowLeftIcon className="size-4" />
          Back to Home
        </button>

        <button
          onClick={() => setShowFilterPhone(true)}
          className="flex sm:hidden items-center gap-2 py-5"
        >
          <FiFilter className="size-4" />
          Filters
        </button>
      </div>

      <div className="relative flex items-start justify-between gap-8 pb-8">
        <FilterSidebar
          setShowFilterPhone={setShowFilterPhone}
          setFilters={setFilters}
          showFilterPhone={showFilterPhone}
          filters={filters}
        />

        <div className="flex-1">
          {/* Results count */}
          <div className="mb-4 text-sm text-gray-600">
            {filteredListings.length === 0 ? (
              <p>No listings found matching your criteria.</p>
            ) : (
              <p>
                Found{" "}
                <span className="font-medium text-gray-800">
                  {filteredListings.length}
                </span>{" "}
                listing{filteredListings.length !== 1 && "s"}
              </p>
            )}
          </div>

          {/* Listings grid */}
          <div className="grid xl:grid-cols-2 gap-4 max-h-280">
            {currentListings.map((listing) => (
              <ListingCard
                key={`${listing.platform}-${listing.username}-${listing.price}`}
                listing={listing}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredListings.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <FiFilter className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                No listings found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search query
              </p>
            </div>
          )}
        </div>
      </div>
      <div></div>
      {/* Pagination */}
      {filteredListings.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={filteredListings.length}
        />
      )}
    </div>
  );
};

export default Marketplace;
