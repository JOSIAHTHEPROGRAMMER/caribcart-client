import AdminTitle from "../../components/admin/AdminTitle";
import { useEffect } from "react";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";
import CredentialChangeModal from "../../components/admin/CredentialChangeModal";
import { dummyListings } from "../../assets/assets";

const CredentialChange = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(null);

  const fetchAllUnchangedListings = async () => {
    setListings(dummyListings);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllUnchangedListings();
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-full">
      <Loader2Icon className="animate-spin text-sky-600 size-7" />
    </div>
  ) : (
    <div className="h-full">
      {listings.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-600 h-full">
          <h3 className="text-2xl font-bold">All Credentials Changed</h3>
          <p>No listings with unchanged credentials found</p>
        </div>
      ) : (
        <>
          <AdminTitle text1="Change" text2=" Credentials" />
          <div className="mt-10 overflow-x-auto bg-white border border-gray-200 w-full max-w-5xl rounded-xl">
            <table className="w-full text-sm text-left  text-gray-700  ">
              <thead className="text-xs uppercase border-b border-gray-200">
                <tr>
                  <th className="pl-4 py-3"> # </th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Niche</th>
                  <th className="px-4 py-3">Platform</th>
                  <th className="px-4 py-3">Username</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-200 hover:bg-sky-50/50"
                  >
                    <td className="pl-4 py-3">{index + 1}.</td>
                    <td className="px-4 py-3">{listing.title}</td>
                    <td className="px-4 py-3">{listing.niche}</td>
                    <td className="px-4 py-3">{listing.platform}</td>
                    <td className="px-4 py-3">{listing.username}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setShowModal(listing)}
                        className="text-sky-600 font-medium"
                      >
                        change
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {showModal && (
              <CredentialChangeModal
                listing={showModal}
                onClose={() => {
                  fetchAllUnchangedListings();
                  setShowModal(null);
                }}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CredentialChange;
