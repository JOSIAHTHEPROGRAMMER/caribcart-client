import React, { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ageRanges, countries, niches, platforms } from "../assets/assets";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { LoaderFive } from "../components/ui/loader";
import { Upload, X } from "lucide-react";
import { useAuth, useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import api from "../configs/axios";
import {
  getAllPublicListing,
  getAllUserListing,
} from "../app/features/listingSlice";
import { convertCurrency, getUserCountry } from "../lib/utils";

const ManageListing = () => {
  const navigate = useNavigate();
  const { userListings } = useSelector((state) => state.listing);

  const { getToken } = useAuth();
  const { user, isLoaded } = useUser();
  const dispatch = useDispatch();

  const { listingId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [loadingListing, setLoadingListing] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    platform: "",
    username: "",
    followers_count: "",
    engagement_rate: "",
    monthly_views: "",
    niche: "",
    price: "",
    description: "",
    verified: false,
    monetized: false,
    country: "",
    age_range: "",
    images: [],
  });

  const platformsLabels = platforms.map((p) => p.value);
  const nichesLabels = niches.map((n) => n.value);
  const ageRangesLabels = ageRanges.map((a) => a.value);
  const countriesLabels = countries.map((c) => c.value);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    if (formData.images.length + files.length > 5)
      return toast.error("You can only upload 5 images");

    setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  useEffect(() => {
    if (!listingId) return;

    setIsEditing(true);
    setLoadingListing(true);

    const listing = userListings.find((l) => l.id === listingId);

    if (!listing) {
      toast.error("Listing not found");
      return navigate("/");
    }

    setFormData({
      title: listing.title,
      platform: listing.platform,
      username: listing.username,
      followers_count: listing.followers_count,
      engagement_rate: listing.engagement_rate,
      monthly_views: listing.monthly_views,
      niche: listing.niche,
      price: convertCurrency(
        listing.price,
        "Trinidad & Tobago",
        listing.country,
      ),
      description: listing.description,
      verified: listing.verified,
      monetized: listing.monetized,
      country: listing.country,
      age_range: listing.age_range,
      images: listing.images,
    });

    setLoadingListing(false);
  }, [listingId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Saving...");
    const dataCopy = structuredClone(formData);

    try {
      if (isEditing) {
        dataCopy.images = formData.images.filter(
          (image) => typeof image === "string",
        );

        dataCopy.id = listingId;

        dataCopy.price = convertCurrency(
          formData.price,
          formData.country,
          "Trinidad & Tobago",
        );

        const formDataInstance = new FormData();
        formDataInstance.append("accountDetails", JSON.stringify(dataCopy));

        formData.images
          .filter((image) => typeof image !== "string")
          .forEach((image) => {
            formDataInstance.append("images", image);
          });

        const token = await getToken();

        const { data } = await api.put("/api/listing", formDataInstance, {
          headers: { Authorization: `Bearer ${token}` },
        });

        toast.dismissAll();
        toast.success(data.message);
        dispatch(getAllUserListing({ getToken }));
        dispatch(getAllPublicListing());
        navigate("/mylistings");
      } else {
        delete dataCopy.images;

        const formDataInstance = new FormData();
        formDataInstance.append("accountDetails", JSON.stringify(dataCopy));

        formData.images.forEach((image) => {
          formDataInstance.append("images", image);
        });

        const token = await getToken();

        const { data } = await api.post(`/api/listing`, formDataInstance, {
          headers: { Authorization: `Bearer ${token}` },
        });

        toast.dismissAll();
        toast.success(data.message);
        dispatch(getAllUserListing({ getToken }));
        dispatch(getAllPublicListing());
        navigate("/mylistings");
      }
    } catch (error) {
      console.log(error);
      toast.dismissAll();
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  if (loadingListing)
    return (
      <div className="mb-100">
        <Loading />
      </div>
    );

  return (
    <div className="min-h-screen py-8 ">
      <div className="max-w-2xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            {isEditing ? "Edit Listing" : "Create Listing"}
          </h1>
          <p className="text-gray-600 mt-2">
            {isEditing
              ? "Update your account listing"
              : "Create a mock listing to display your account info"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 sm:w-200">
          {/* basic info */}
          <Section title="Basic Info">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputField
                label="Listing Title *"
                value={formData.title}
                placeholder="e.g. Youtube Family Cooking Channel"
                onChange={(value) => handleInputChange("title", value)}
                required={true}
              />

              <SelectField
                label="Platform *"
                options={platformsLabels}
                value={formData.platform}
                onChange={(value) => handleInputChange("platform", value)}
                required={true}
              />

              <InputField
                label="Username/Handle *"
                value={formData.username}
                placeholder="e.g. @johndoe"
                onChange={(value) => handleInputChange("username", value)}
                required={true}
              />

              <SelectField
                label="Niche *"
                options={nichesLabels}
                value={formData.niche}
                onChange={(value) => handleInputChange("niche", value)}
                required={true}
              />
            </div>
          </Section>

          {/* metrics */}

          <Section title="Account Metrics">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <InputField
                label="Followers Count *"
                type="number"
                value={formData.followers_count}
                min={0}
                placeholder="e.g. 5000"
                onChange={(value) =>
                  handleInputChange("followers_count", value)
                }
                required={true}
              />

              <InputField
                label="Engagement Rate (%) *"
                value={formData.engagement_rate}
                min={0}
                max={100}
                placeholder="e.g. 4"
                onChange={(value) =>
                  handleInputChange("engagement_rate", value)
                }
                required={true}
              />

              <InputField
                label="Monthly Views *"
                value={formData.monthly_views}
                min={0}
                placeholder="e.g. 5000"
                onChange={(value) => handleInputChange("monthly_views", value)}
                required={true}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <SelectField
                label="Country *"
                options={countriesLabels}
                value={formData.country}
                onChange={(value) => handleInputChange("country", value)}
                required={true}
              />
              <SelectField
                label="Age Range *"
                options={ageRangesLabels}
                value={formData.age_range}
                onChange={(value) => handleInputChange("age_range", value)}
                required={true}
              />
            </div>
            <div className="space-y-3">
              <CheckboxField
                label="Verified"
                checked={formData.verified}
                onChange={(value) => handleInputChange("verified", value)}
              />

              <CheckboxField
                label="Monetized"
                checked={formData.monetized}
                onChange={(value) => handleInputChange("monetized", value)}
              />
            </div>
          </Section>

          {/* pricing */}

          <Section title="Pricing & Description">
            <InputField
              label="Asking Price (Based on Listing Country) *"
              type="number"
              value={formData.price}
              min={0}
              placeholder="e.g. 5000"
              onChange={(value) => handleInputChange("price", value)}
              required={true}
            />
            <TextareaField
              label="Description *"
              value={formData.description}
              placeholder="e.g. Details about the account like branding...."
              onChange={(value) => handleInputChange("description", value)}
              required={true}
            />
          </Section>

          {/* images */}
          <Section title="Screenshots & Proof">
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg
                  p-6 text-center"
            >
              <input
                type="file"
                id="images"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <label
                htmlFor="images"
                className="px-4 py-2 
                      border border-gray-300 rounded-lg hover:bg-gray-50 
                      cursor-pointer"
              >
                upload files
              </label>

              <p className="text-gray-500 mt-2 text-sm">
                Upload screenshots or proof of account analytics
              </p>
            </div>

            {formData.images.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {formData.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={
                        typeof image === "string"
                          ? image
                          : URL.createObjectURL(image)
                      }
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />

                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute -top-2 right-2 size-6 
                       rounded-full hover:bg-red-700 text-white 
                      "
                    >
                      <X />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </Section>

          <div className="flex justify-end gap-3 text-sm  ">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 transition-colors border border-gray-300 rounded-lg
                  hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 transition-colors
                      bg-sky-600 hover:bg-sky-700 rounded-lg text-white"
            >
              {isEditing ? "Update Listing" : "Create Listing"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CheckboxField = ({ label, checked, onChange, required = false }) => (
  <label className="flex items-center space-x-2 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      required={required}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span className="text-sm font-medium text-gray-800">{label}</span>
  </label>
);

const TextareaField = ({
  label,
  value,
  onChange,
  required = false,
  placeholder,
}) => (
  <div className="flex flex-col gap-4">
    <label
      className="block text-sm font-medium
      text-gray-700 "
    >
      {label}
    </label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder}
      className="w-full px-2 py-1.5 text-sm border
        border-gray-300 rounded outline-sky-400"
    />
  </div>
);

const Section = ({ title, children }) => (
  <div
    className="mb-8 bg-white p-6 rounded-lg border border-gray-200 
  space-y-6"
  >
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    {children}
  </div>
);

const InputField = ({
  label,
  value,
  onChange,
  required = false,
  type = "text",
  placeholder,
  min = null,
  max = null,
}) => (
  <div className="flex flex-col  gap-4">
    <label
      className="block text-sm font-medium
     text-gray-700 "
    >
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder}
      min={min}
      max={max}
      className="w-full px-2 py-1.5 text-sm border
       border-gray-300 rounded outline-sky-400"
    />
  </div>
);

const SelectField = ({ label, options, value, onChange, required = false }) => (
  <div className="flex flex-col gap-4">
    <label className="block text-sm font-medium text-gray-700">{label}</label>

    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full px-3 py-1.5 text-sm border
        border-gray-300 rounded outline-sky-400"
    >
      <option value="">Select an option</option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default ManageListing;
