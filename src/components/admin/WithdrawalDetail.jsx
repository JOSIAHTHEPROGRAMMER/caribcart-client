import toast from "react-hot-toast";
import { XIcon, CopyIcon } from "lucide-react";

const WithdrawalDetail = ({ data, onClose }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const copyToClipboard = ({ name, value }) => {
    navigator.clipboard.writeText(value || "");
    toast.success(`${name} copied to clipboard`);
  };

  const markAsWithdrawn = async () => {};

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur z-100 flex items-center justify-center sm:p-4">
      <div className="bg-white sm:rounded-lg shadow-2xl w-full max-w-xl h-screen sm:h-[480px] flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-600 to-sky-400 text-white p-4 sm:rounded-t-lg flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate">
              Withdrawal Request
            </h3>
            <p className="text-sm text-sky-100 truncate">
              Request by{" "}
              <span className="font-medium text-white">
                {data.user?.name || "—"}
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-1 hover:bg-white/20 rounded-lg transition-colors"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 text-gray-700">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-sm text-gray-500">Amount</p>
              <p className="font-medium text-lg">
                {currency}
                {data.amount.toLocaleString("en-IN")}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Requested At</p>
              <p className="font-medium">
                {new Date(data.createdAt).toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-3">
            <h4 className="font-semibold">Account Details</h4>
            <div className="mt-2 flex flex-col gap-2">
              {data.account.length > 0 ? (
                data.account.map((field, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center gap-3 group"
                  >
                    <div className="min-w-0">
                      <p className="text-sm text-gray-500">{field.name}</p>
                      <p className="font-medium truncate">{field.value}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(field)}
                      className="invisible group-hover:visible p-1 rounded hover:bg-gray-100"
                      title={`Copy ${field.name}`}
                    >
                      <CopyIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">
                  No account info available.
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 border-t border-gray-200 pt-3">
            <h4 className="font-semibold">User Summary</h4>
            <div className="mt-2 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <img
                  src={data.user?.image}
                  alt={data.user?.name}
                  className="w-10 h-10 rounded-full object-cover border"
                />
                <div className="min-w-0">
                  <p className="font-medium truncate">
                    {data.user?.name || "—"}
                  </p>
                  <p className="truncate text-xs text-gray-500">
                    {data.user?.email || "—"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {data.isWithdrawn && (
            <div className="mt-4 p-3 bg-green-50 border border-green-100 text-green-700 rounded">
              This withdrawal is already marked as withdrawn.
            </div>
          )}
        </div>

        {/* Footer actions */}
        {!data.isWithdrawn && (
          <div className="p-4 border-t border-gray-200 flex items-center justify-end gap-2">
            <button
              onClick={markAsWithdrawn}
              className="text-sm bg-sky-500 text-white font-medium py-2 px-4 rounded-md flex items-center gap-2"
            >
              Mark as withdrawn
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WithdrawalDetail;
