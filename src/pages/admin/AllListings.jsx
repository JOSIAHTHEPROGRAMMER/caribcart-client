import AdminTitle from "../../components/admin/AdminTitle";
import { useEffect, useState } from "react";
import {
  CheckCircleIcon,
  Loader2Icon,
  MailCheckIcon,
  XIcon,
} from "lucide-react";
import ListingDetailsModal from "../../components/admin/ListingDetailsModal";
import { dummyListings } from "../../assets/assets";

const AllListings = () => {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [showModal, setShowModal] = useState(null);

  const fetchAllListings = async () => {
    setListings(dummyListings);
    setLoading(false);
  };

  const changeListingStatus = async (status, listing) => {
    setListings((prev) => [
      ...prev.filter((l) => l.id !== listing.id),
      { ...listing, status },
    ]);
  };

  const colorMapCredentials = {
    notSubmit: { bg: "bg-red-100", text: "text-red-600", icon: XIcon },
    submitted: {
      bg: "bg-yellow-100",
      text: "text-yellow-600",
      icon: MailCheckIcon,
    },
    verified: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      icon: CheckCircleIcon,
    },
    changed: {
      bg: "bg-green-100",
      text: "text-green-600",
      icon: CheckCircleIcon,
    },
  };

  useEffect(() => {
    fetchAllListings();
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-full">
      <Loader2Icon className="animate-spin text-sky-600 size-7" />
    </div>
  ) : (
    <div>
      <AdminTitle text1="All" text2=" Listings" />

      <div className="mt-10 overflow-x-auto bg-white border border-gray-200 w-full max-w-5xl rounded-xl">
        <table className="w-full text-sm text-left  text-gray-700  ">
          <thead className="text-xs uppercase border-b border-gray-200">
            <tr>
              <th className="pl-4 py-3"> # </th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Niche</th>
              <th className="px-4 py-3">Platform</th>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Credentials</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing, index) => (
              <tr
                onClick={() => setShowModal(listing)}
                key={index}
                className="border-t border-gray-200 hover:bg-sky-50/50 cursor-pointer"
              >
                <td className="pl-4 py-3">{index + 1}.</td>
                <td className="px-4 py-3">{listing.title}</td>
                <td className="px-4 py-3">{listing.niche}</td>
                <td className="px-4 py-3">{listing.platform}</td>
                <td className="px-4 py-3">@{listing.username}</td>
                <td className="px-4 py-3">
                  {(() => {
                    const credentialsStatus = listing.isCredentialChanged
                      ? "changed"
                      : listing.isCredentialVerified
                        ? "verified"
                        : listing.isCredentialSubmitted
                          ? "submitted"
                          : "notSubmit";
                    const color = colorMapCredentials[credentialsStatus];
                    return (
                      <button
                        className={`flex items-center gap-1 px-2 text-xs py-0.5 rounded-full ${color.bg} ${color.text}`}
                      >
                        <color.icon size={12} />{" "}
                        <span className={` font-medium`}>
                          {listing.isCredentialChanged
                            ? "Changed"
                            : listing.isCredentialVerified
                              ? "Verified"
                              : listing.isCredentialSubmitted
                                ? "Submitted"
                                : "Not Submit"}
                        </span>
                      </button>
                    );
                  })()}
                </td>
                <td className="px-4 py-3">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="flex gap-4"
                  >
                    {listing.status !== "deleted" ? (
                      <select
                        value={listing.status}
                        onChange={(e) =>
                          changeListingStatus(e.target.value, listing)
                        }
                        className="px-2 py-1.5 mt-1 text-gray-500 border border-gray-300 rounded-md outline-none"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="ban">Ban</option>
                        <option value="sold">Sold</option>
                      </select>
                    ) : (
                      "Deleted"
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <ListingDetailsModal
          listing={showModal}
          onClose={() => setShowModal(null)}
        />
      )}
    </div>
  );
};

export default AllListings;
