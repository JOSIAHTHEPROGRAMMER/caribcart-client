import { useAuth } from "@clerk/clerk-react";
import { CirclePlus, ListIcon, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getAllUserListing } from "../app/features/listingSlice";
import api from "../configs/axios";

const WithdrawlModal = ({ onClose }) => {
  const { getToken } = useAuth();
  const dispatch = useDispatch();
  const [newAmount, setNewAmount] = useState("");
  const [account, setAccount] = useState([
    { type: "text", name: "Account Holder Name", value: "" },
    { type: "text", name: "Bank Name", value: "" },
    { type: "number", name: "Account Number", value: "" },
    { type: "text", name: "Account Type", value: "" },
    { type: "text", name: "SWIFT", value: "" },
    { type: "text", name: "Branch", value: "" },
  ]);

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      // check if there is at least one field
      if (account.length === 0) {
        return toast.error("Please add at least one field");
      }

      // check all fields are filled
      for (const field of account) {
        if (!field.value) {
          return toast.error(`Please fill in the ${field.name} field`);
        }
      }

      const confirm = window.confirm("Are you sure you want to submit?");
      if (!confirm) return;

      const token = await getToken();

      const { data } = await api.post(
        "/api/listing/withdraw",
        { account, amount: parseInt(amount) },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      toast.success(data.message);
      dispatch(getAllUserListing({ getToken }));
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message);
      console.log(error);
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 
  z-100 flex items-center justify-center sm:p-4"
    >
      <div className="bg-white sm:rounded-lg shadow-2xl w-full max-w-lg h-screen sm:h-119 flex flex-col ">
        <div className="bg-linear-to-r from-sky-600 to-sky-400 text-white p-4 sm:rounded-t-lg flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate">Withdraw Funds</h3>
          </div>

          <button
            onClick={onClose}
            className="ml-4 p-1
          hover:bg-opacity-20 rounded-lg transition-colors
          hover:bg-white/20"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {/* form */}

        <form
          onSubmit={handleSubmission}
          className="flex flex-col
        overflow-y-scroll p-4 gap-4 items-start"
        >
          <div className="grid grid-cols-[2fr_3fr_1fr] items-center gap-2">
            <label className="text-sm font-medium text-gray-800">Amount</label>
            <input
              type="number"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
              required
              className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded outline-sky-400"
            />
          </div>

          {account.map((field, index) => (
            <div
              key={index}
              className=" grid grid-cols-[2fr_3fr_1fr] items-center gap-2"
            >
              <label className="text-sm font-medium text-gray-800">
                {field.name}
              </label>
              <input
                type={field.type}
                value={field.value}
                onChange={(e) =>
                  setAccount((prev) =>
                    prev.map((c, i) =>
                      i === index ? { ...c, value: e.target.value } : c,
                    ),
                  )
                }
                required
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded outline-sky-400"
              />
            </div>
          ))}

          <button
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 mt-4 mb-2 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WithdrawlModal;
