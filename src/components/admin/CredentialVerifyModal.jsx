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
import { dummyOrders, getProfileLink } from "../../assets/assets";

const CredentialVerifyModal = ({ listing, onClose }) => {
  const [loading, setLoading] = useState(true);
  const [credential, setCredential] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const profileLink = getProfileLink(listing.platform, listing.username);

  const copyToClipboard = ({ name, value }) => {
    navigator.clipboard.writeText(value);
    toast.success(`${name} copied to clipboard`);
  };

  const fetchCredential = async () => {
    setCredential(dummyOrders[0].credential);
    setLoading(false);
  };

  const verifyCredential = async () => {};

  useEffect(() => {
    fetchCredential();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-100 flex items-center justify-center sm:p-4">
      <div className="bg-white sm:rounded-lg shadow-2xl w-full max-w-xl h-screen sm:h-[400px] flex flex-col">
        {/* Header */}
        <div className="bg-linear-to-r from-sky-600 to-sky-400 text-white p-4 sm:rounded-t-lg flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate">{listing?.title}</h3>
            <p className="text-sm text-sky-100 truncate">
              verifying Credentials for{" "}
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
                  : cred?.value}{" "}
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
                to={profileLink}
                target="_blank"
                className="flex gap-1 items-center text-sky-500"
              >
                click here
                <ArrowUpRightFromSquareIcon size={13} />
              </Link>
            </div>

            <div className="flex gap-2 items-start mt-2">
              <input
                type="checkbox"
                onChange={() => setIsVerified((prev) => !prev)}
                className="size-4 mt-0.5 text-sky-500 bg-gray-100"
              />
              <p className="text-gray-500 text-sm">
                Please verify the credentials above and click on the button
                below to verify. <br /> If credential are not correct, please
                contact the owner of the listing.
              </p>
            </div>

            <button
              onClick={verifyCredential}
              disabled={!isVerified}
              className="mt-2 text-sm bg-sky-500 not-disabled:hover:bg-sky-700 disabled:opacity-50 text-white font-medium py-2 px-5 rounded-md"
            >
              Verify Credentials
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CredentialVerifyModal;
