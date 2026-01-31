import { useAuth } from "@clerk/clerk-react";
import { CirclePlus, ListIcon, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getAllUserListing } from "../app/features/listingSlice";
import api from "../configs/axios";

const CredentialSubmissionModal = ({ onClose, listing }) => {
  const { getToken } = useAuth();
  const dispatch = useDispatch();

  const [newField, setNewField] = useState("");
  const [credential, setCredential] = useState([
    { type: "email", name: "Email", value: "" },
    { type: "password", name: "Password", value: "" },
  ]);

  const handleAddField = () => {
    const name = newField.trim();
    if (!name) return toast("Please enter a field name");
    setCredential((prev) => [...prev, { type: "text", name, value: "" }]);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      // check if there is at least one field
      if (credential.length === 0) {
        return toast.error("Please add at least one field");
      }

      // check all fields are filled
      for (const cred of credential) {
        if (!cred.value) {
          return toast.error(`Please fill in the ${cred.name} field`);
        }
      }

      // React-hot-toast confirmation
      toast(
        (t) => (
          <div className="flex flex-col gap-3">
            <div>
              <p className="font-semibold">Submit Credentials?</p>
              <p className="text-sm text-gray-600 mt-1">
                Credential will be verified & changed post submission. Are you
                sure you want to submit?
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={async () => {
                  toast.dismiss(t.id);
                  toast.loading("Submitting credentials...");
                  try {
                    const token = await getToken();
                    const { data } = await api.post(
                      "/api/listing/add-credential",
                      { credential, listingId: listing.id },
                      { headers: { Authorization: `Bearer ${token}` } },
                    );
                    toast.dismissAll();
                    toast.success(data.message);
                    dispatch(getAllUserListing({ getToken }));
                    onClose();
                  } catch (error) {
                    toast.dismissAll();
                    toast.error(
                      error?.response?.data?.message || error?.message,
                    );
                    console.log(error);
                  }
                }}
                className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
              >
                Submit
              </button>
              <button
                onClick={() => toast.dismiss(t.id)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        ),
        {
          duration: Infinity,
        },
      );
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
      <div className="bg-white sm:rounded-lg shadow-2xl w-full max-w-lg h-screen sm:h-80 flex flex-col ">
        <div className="bg-linear-to-r from-sky-600 to-sky-400 text-white p-4 sm:rounded-t-lg flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3>{listing?.title}</h3>
            <p>
              Adding Credentials for {listing?.username} on {listing?.platform}
            </p>
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
          {credential.map((cred, index) => (
            <div
              key={cred.type}
              className="grid grid-cols-[2fr_3fr_1fr] items-center gap-2"
            >
              <label className="text-sm font-medium text-gray-800">
                {cred.name}
              </label>
              <input
                type="text"
                value={cred.value}
                onChange={(e) =>
                  setCredential((prev) =>
                    prev.map((c, i) =>
                      i === index ? { ...c, value: e.target.value } : c,
                    ),
                  )
                }
                className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded outline-sky-400"
              />
              <X
                className="w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() =>
                  setCredential((prev) => prev.filter((_, i) => i !== index))
                }
              />
            </div>
          ))}

          {/* add fields */}

          <div className="flex items-center gap-2">
            <input
              className="outline-none border-b border-gray-200"
              type="text"
              value={newField}
              onChange={(e) => setNewField(e.target.value)}
              placeholder="field name..."
            />

            <button
              type="button"
              onClick={handleAddField}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-700 cursor-pointer"
            >
              <CirclePlus className="w-5 h-5" />
            </button>
          </div>

          <button
            className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 mt-4 rounded-md"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CredentialSubmissionModal;
