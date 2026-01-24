import AdminTitle from "../../components/admin/AdminTitle";
import { useState } from "react";
import { useEffect } from "react";
import ListingDetailsModal from "../../components/admin/ListingDetailsModal";
import { Loader2Icon } from "lucide-react";
import { dummyOrders } from "../../assets/assets";

const Transactions = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const [trasactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(null);

  const getTransactions = async () => {
    setTransactions(dummyOrders);
    setLoading(false);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-full">
      <Loader2Icon className="animate-spin text-sky-600 size-7" />
    </div>
  ) : (
    <div>
      <AdminTitle text1="List" text2=" Transactions" />

      <div className="mt-10 overflow-x-auto bg-white border border-gray-200 w-full max-w-5xl rounded-xl">
        <table className="w-full text-sm text-left  text-gray-700  ">
          <thead className="text-xs uppercase border-b border-gray-200">
            <tr>
              <th className="pl-4 py-3"> # </th>
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Platform</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Purchase Date</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {trasactions.map((t, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-sky-50/50"
              >
                <td className="pl-4 py-3">{index + 1}.</td>
                <td className="px-4 py-3">@{t.listing.username}</td>
                <td className="px-4 py-3">{t.listing.platform}</td>
                <td className="px-4 py-3">
                  {currency}
                  {t.amount}
                </td>
                <td className="px-4 py-3">
                  {new Date(t.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => setShowModal(t.listing)}
                    className="text-sky-600 font-medium"
                  >
                    more details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <ListingDetailsModal
          listing={showModal}
          onClose={() => {
            setShowModal(null);
          }}
        />
      )}
    </div>
  );
};

export default Transactions;
