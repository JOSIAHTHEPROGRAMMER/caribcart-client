import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import AdminTitle from "../../components/admin/AdminTitle";
import WithdrawalDetail from "../../components/admin/WithdrawalDetail";
import { dummyWithdrawalRequests } from "../../assets/assets";

const Withdrawal = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const [requests, setRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const getRequests = async () => {
    setRequests(dummyWithdrawalRequests);
    setIsLoading(false);
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2Icon className="size-7 text-sky-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="h-full">
      <AdminTitle text1="All" text2="Withdrawals" />
      <div className="mt-10 overflow-x-auto bg-white border border-gray-200 w-full max-w-6xl rounded-xl">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="pl-4 py-3">#</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                  No withdrawal requests found.
                </td>
              </tr>
            ) : (
              requests.map((req, index) => (
                <tr
                  key={req.id}
                  className="border-t border-gray-200 hover:bg-sky-50/50"
                >
                  <td className="pl-4 py-3">{index + 1}.</td>
                  <td className="px-4 py-3 flex items-center gap-2">
                    <img
                      src={req.user?.image}
                      alt={req.user?.name}
                      className="w-8 h-8 rounded-full"
                    />
                    {req.user?.name}
                  </td>
                  <td className="px-4 py-3">{req.user?.email}</td>
                  <td className="px-4 py-3 font-medium">
                    {currency}
                    {req.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3">
                    {req.isWithdrawn ? (
                      <span className="text-green-600 font-medium">Paid</span>
                    ) : (
                      <span className="text-gray-500 font-medium">Pending</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => setSelectedRequest(req)}
                      className="text-sky-600 font-medium hover:underline"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {selectedRequest && (
          <WithdrawalDetail
            data={selectedRequest}
            onClose={() => {
              getRequests();
              setSelectedRequest(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Withdrawal;
