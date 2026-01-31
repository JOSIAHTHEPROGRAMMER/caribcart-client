import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import {
  ArrowUpRightFromSquareIcon,
  CopyIcon,
  Loader2Icon,
  XIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { dummyOrders, socialMediaLinks } from "../../assets/assets";
import { useAuth } from "@clerk/clerk-react";
import api from "../../configs/axios";

const CredentialChangeModal = ({ listing, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [credential, setCredential] = useState(null);
  const [newCredential, setNewCredential] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const { getToken } = useAuth();

  const copyToClipboard = ({ name, value }) => {
    navigator.clipboard.writeText(value);
    toast.success(`${name} copied to clipboard`);
  };

  const fetchCredential = async () => {
    try {
      const token = await getToken();
      const { data } = await api.get(`/api/admin/credential/${listing.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCredential(data.credential);
      setNewCredential(
        data.credential.originalCredential.map((cred) => ({
          ...cred,
          value: "",
        })),
      );
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
      console.log(error);
    }
  };

  const changeCredential = async () => {
    try {
      const token = await getToken();
      const { data } = await api.put(
        `/api/admin/change-credential/${listing.id}`,
        { newCredential, credentialId: credential.id },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      toast.success(data.message);
      onClose();
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCredential();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-100 flex items-center justify-center sm:p-4">
      <div className="bg-white sm:rounded-lg shadow-2xl w-full max-w-xl h-screen sm:h-[450px] flex flex-col">
        {/* Header */}
        <div className="bg-linear-to-r from-sky-600 to-sky-400 text-white p-4 sm:rounded-t-lg flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate">{listing?.title}</h3>
            <p className="text-sm text-sky-100 truncate">
              changing credentials for{" "}
              <span className="font-medium text-white">
                {listing?.username}
              </span>{" "}
              on {listing?.platform}
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-1 hover:bg-white/20 hover:bg-opacity-20 rounded-lg transition-colors"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* preview credentials */}
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2Icon className="animate-spin text-sky-500 size-6" />
          </div>
        ) : (
          <div className="flex flex-col items-start gap-3 p-4 overflow-y-scroll text-gray-700">
            {credential?.originalCredential.map((cred, index) => (
              <div key={index} className="w-full flex items-center gap-2 group">
                <span className="font-medium">{cred.name}</span> :{" "}
                {cred.name.toLowerCase() === "password"
                  ? "********"
                  : cred?.value}
                <CopyIcon
                  onClick={() => copyToClipboard(cred)}
                  size={14}
                  className="group-hover:visible invisible"
                />
              </div>
            ))}

            <div className="text-sm flex gap-1 items-center">
              <p>Open Platform : </p>
              <Link
                to={socialMediaLinks[listing.platform]}
                target="_blank"
                className="flex gap-1 items-center text-sky-500"
              >
                click here
                <ArrowUpRightFromSquareIcon size={13} />
              </Link>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-lg">Add New Credentials</h3>
              {newCredential?.map((cred, index) => (
                <div
                  key={index}
                  className="w-full flex items-center gap-2 group max-w-sm"
                >
                  <span className="font-medium">{cred.name}</span> :{" "}
                  <input
                    type={cred.type}
                    value={cred.value}
                    onChange={(e) =>
                      setNewCredential((prev) =>
                        prev.map((c, i) =>
                          i === index ? { ...c, value: e.target.value } : c,
                        ),
                      )
                    }
                    className="w-full bg-gray-50 outline-sky-400 rounded-md p-2 text-sm"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-2 items-start mt-2">
              <input
                type="checkbox"
                onChange={() => setIsChanged((prev) => !prev)}
                className="size-4 mt-0.5 text-sky-500 bg-gray-100"
              />
              <p className="text-gray-500 text-sm">
                I have changed the credentials above and provided the new
                credential <br /> If credential are not correct, please contact
                the owner of the listing.
              </p>
            </div>

            <button
              onClick={changeCredential}
              disabled={!isChanged}
              className="mt-2 text-sm bg-sky-500 not-disabled:hover:bg-sky-700 disabled:opacity-50 text-white font-medium py-2 px-5 rounded-md"
            >
              Change Credentials
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CredentialChangeModal;
