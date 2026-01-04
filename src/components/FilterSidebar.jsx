import { ChevronDown, Filter, X } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { formatCurrencySymbolOnly, formatCurrencyWithConversion } from '../lib/utils'
import { countries, niches, platforms } from '../assets/assets'

const FilterSidebar = ({ showFilterPhone, setShowFilterPhone, filters, setFilters }) => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [expandSections, setExpandSections] = useState({
    country:null,
    platform: true,
    price: true,
    followers: true,
    niche: true,
    status: true,
  })







const onChangeSearch = (e) => {
  const value = e.target.value
  setSearch(value)

  onFiltersChange({ search: value || null })

  setSearchParams(prev => {
    const params = new URLSearchParams(prev)
    if (value) params.set("search", value)
    else params.delete("search")
    return params
  })
}


  const onFiltersChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
  }

  const toggleSection = (section) => {
    setExpandSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const onClearFilters = () => {
    if (search) {
      navigate("/marketplace")
    }

    setFilters({
      Country:null,
      platform: null,
      maxPrice: convertCurrency(100000, "Trinidad & Tobago"),
      minFollowers: 0,
      niche: null,
      verified: false,
      monetized: false,

    })
  }

  return (
    <div
      className={`
        ${showFilterPhone ? "fixed" : "hidden"}
        inset-0 z-50 bg-white
        sm:static sm:block sm:top-24
        sm:h-fit sm:min-w-[300px]
        border border-gray-200 rounded-lg shadow-sm
        overflow-y-auto overflow-x-hidden
      `}
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700">
          <Filter className="size-4" />
          <h3 className="font-semibold">Filters</h3>
        </div>

        <div className="flex items-center gap-2">
          <X
            onClick={onClearFilters}
            className=" size-6 text-gray-500 hover:text-gray-700 p-1
            hover:bg-gray-100 rounded transition cursor-pointer"
          />

          <button
            onClick={() => setShowFilterPhone(false)}
            className="sm:hidden text-sm border text-gray-700 px-3 py-1 rounded"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 space-y-6">
        {/* Search */}
        <input
          value={search}
          onChange={onChangeSearch}
          type="text"
          placeholder="Search by username, platform, niche…"
          className="w-full text-sm px-3 py-2 border border-gray-300 rounded-md outline-sky-500"
        />

        {/* Platform */}
        <div>
          <button
            onClick={() => toggleSection("platform")}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-medium">Platform</span>
            <ChevronDown
              className={`size-4 transition-transform ${expandSections.platform ? "rotate-180" : ""
                }`}
            />
          </button>

          {expandSections.platform && (
            <div className="flex flex-col gap-2">
              {platforms.map((platform) => (
                <label
                  key={platform.value}
                  className="flex items-center gap-2 text-gray-700 text-sm"
                >
                  <input
                    type="checkbox"
                    className="accent-sky-600"
                    checked={filters.platform?.includes(platform.value) || false}
                    onChange={(e) => {
                      const checked = e.target.checked
                      const current = filters.platform || []
                      const updated = checked
                        ? [...current, platform.value]
                        : current.filter((p) => p !== platform.value)

                      onFiltersChange({
                        platform: updated.length ? updated : null,
                      })
                    }}
                  />
                  {platform.label}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Countries */}
        <div>
          <button
            onClick={() => toggleSection("country")}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-medium">Country</span>
            <ChevronDown
              className={`size-4 transition-transform ${expandSections.country ? "rotate-180" : ""
                }`}
            />
          </button>

          {expandSections.country && (
            <div className="flex flex-col gap-2">
              {countries.map((country) => (
                <label
                  key={country.value}
                  className="flex items-center gap-2 text-gray-700 text-sm"
                >
                  <input
                    type="checkbox"
                    className="accent-sky-600"
                    checked={filters.country?.includes(country.value) || false}
                    onChange={(e) => {
                      const checked = e.target.checked
                      const current = filters.platform || []
                      const updated = checked
                        ? [...current, country.value]
                        : current.filter((p) => p !== country.value)

                      onFiltersChange({
                        country: updated.length ? updated : null,
                      })
                    }}
                  />
                  {country.label}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div>
          <button
            onClick={() => toggleSection("price")}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-medium">Price Range</span>
            <ChevronDown
              className={`size-4 transition-transform ${expandSections.price ? "rotate-180" : ""
                }`}
            />
          </button>

          {expandSections.price && (
            <div className="space-y-3">
              <input
                type="range"
                min="0"
                max="100000"
                step="100"
                value={filters.maxPrice || convertCurrency(100000, "Trinidad & Tobago")}
                onChange={(e) =>
                  onFiltersChange({ maxPrice: Number(e.target.value) })
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />

              <div className="flex justify-between text-sm text-gray-600">
                <span>{formatCurrencyWithConversion(0, "Trinidad & Tobago")}</span>
                <span>
                   {formatCurrencyWithConversion(
          filters.maxPrice ?? 100000,
          "Trinidad & Tobago"
        )}
                </span>
              </div>
            </div>
          )}
        </div>




        {/* Followers Range */}
        <div>
          <button
            onClick={() => toggleSection("followers")}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-medium">Minimum Followers</span>
            <ChevronDown
              className={`size-4 transition-transform ${expandSections.followers ? "rotate-180" : ""
                }`}
            />
          </button>


          {expandSections.followers && (
            <select
              value={filters.minFollowers?.toString() || "0"}
              onChange={(e) => onFiltersChange({
                ...filters, minFollowers: parseInt(e.target.value) || 0
              })}
              className="text-sm px-3 py-2 border border-gray-300 rounded-md">
              <option value="0">Any Amount</option>
              <option value="1000">1k+</option>
              <option value="10000">10k+</option>
              <option value="50000">50k+</option>
              <option value="100000">100k+</option>
              <option value="500000">500k+</option>
              <option value="1000000">1M+</option>
            </select>
          )}
        </div>

        {/* Niche */}
        <div>
          <button
            onClick={() => toggleSection("niche")}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-medium">Niche</span>
            <ChevronDown
              className={`size-4 transition-transform ${expandSections.niche ? "rotate-180" : ""
                }`}
            />
          </button>


          {expandSections.niche && (
            <select
              value={filters.niche?.toString() || ""}
              onChange={(e) => onFiltersChange({
                ...filters, niche: e.target.value || null
              })}
              className="text-sm px-3 py-2 border border-gray-300 rounded-md">
              {niches.map((niche) => (
                <option key={niche.value} value={niche.value}>
                  {niche.label}
                </option>
              ))}
            </select>
          )}
        </div>


        {/* Status */}
        <div>
          <button
            onClick={() => toggleSection("status")}
            className="flex items-center justify-between w-full mb-3"
          >
            <span className="font-medium">Account Status</span>
            <ChevronDown
              className={`size-4 transition-transform ${expandSections.status ? "rotate-180" : ""
                }`}
            />
          </button>


          {expandSections.status && (
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.verified || false}
                  onChange={(e) =>
                    onFiltersChange({
                      ...filters,
                      verified: e.target.checked,
                    })
                  }
                  className="accent-sky-600"
                />
                <span>Verified accounts only</span>
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.monetized || false}
                  onChange={(e) =>
                    onFiltersChange({
                      ...filters,
                      monetized: e.target.checked,
                    })
                  }
                  className="accent-sky-600"
                />
                <span>Monetized accounts only</span>
              </label>
            </div>

          )}
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar
