import React, { useState, useEffect } from "react";
import { dummyOrders, platformIcons } from "../assets/assets";
import Loading from "./Loading";
import {
  CheckCircle2,
  ChevronUp,
  DollarSign,
  ChevronDown,
  Copy,
} from "lucide-react";
import { formatCurrencyWithConversion } from "../lib/utils";
import { format, set } from "date-fns";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  const fetchOrders = async () => {
    // const response = await fetch('/api/orders')
    // const data = await response.json()
    setOrders(dummyOrders);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const mask = (value, type) => {
    if (!value && value !== 0) return "-";

    return type.toLowerCase() === "password" ? "*".repeat(8) : String(value);
  };

  const copy = (value) => {
    try {
      navigator.clipboard.writeText(value);
      toast.success("Copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading />
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="px-4 md:px-16 lg:px-24 xl:px-32 mb-100">
        <div
          className="max-w-2xl mx-auto mt-14 bg-white rounded-xl
        border border-gray-200 p-8 text-center"
        >
          <h3 className="text-lg font-semibold ">No Orders Found</h3>

          <p className="text-sm text-gray-500 mt-2">
            You have not placed any orders yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-16 lg:px-24 xl:px-32 mb-100">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>

      <div className="space-y-4">
        {orders.map((order) => {
          const id = order.id;
          const listing = order.listing;
          const credential = order.credential;
          const isExpanded = id === expandedId;

          return (
            <div
              key={id}
              className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col
                  max-w-4xl"
            >
              <div className="flex items-start gap-4 flex-1 ">
                <div className="p-2 rounded-lg bg-gray-50 max-sm:hidden">
                  {platformIcons[listing.platform]}
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 ">
                    <div>
                      <h3 className="text-lg font-semibold ">
                        {listing.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        @{listing.username} -{" "}
                        <span className="capitalize">{listing.platform}</span>
                      </p>

                      <div className="flex gap-2 mt-2">
                        {listing.verified && (
                          <span
                            className="px-2 py-1 flex items-center text-xs bg-sky-50
                                  rounded-md text-sky-600 font-semibold"
                          >
                            <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                          </span>
                        )}
                        {listing.monetized && (
                          <span
                            className="px-2 py-1 flex items-center text-xs bg-yellow-50
                                  rounded-md text-yellow-600 font-semibold"
                          >
                            <DollarSign className="w-3 h-3 mr-1 font-medium" />{" "}
                            Monetized
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold">
                        {formatCurrencyWithConversion(
                          order.amount,
                          listing.country,
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 items-end">
                <button
                  onClick={() => setExpandedId((p) => (p === id ? null : id))}
                  className="flex items-center gap-2 bg-white border 
                  border-gray-200 px-3 py-2 rounded hover:shadow text-sm"
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Hide Credentials
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      View Credentials
                    </>
                  )}
                </button>

                <div className="text-xs text-gray-500 mt-2 text-right">
                  <div>
                    Credential Purchased:{" "}
                    {format(new Date(order.createdAt), "MMM d, yyyy")}
                  </div>
                </div>
              </div>
              {isExpanded && (
                <div className="mt-4 md:mt-0 pt-4">
                  <div className="space-y-2">
                    {credential.updatedCredential.map((cred) => (
                      <div
                        key={cred.name}
                        className="flex items-center 
                            justify-between gap-3 bg-gray-50 rounded-md p-2"
                      >
                        <div className="flex flex-col items-center gap-2">
                          <p className="text-sm font-medium text-gray-800">
                            {cred.name}
                          </p>

                          <p className=" text-xs text-gray-500">{cred.type}</p>
                        </div>

                        <div className="flex items-center gap-2  ">
                          <code className="text-sm font-mono">
                            {mask(cred.value, cred.type)}
                          </code>
                          <button
                            title="Copy Credential"
                            onClick={(e) => {
                              e.stopPropagation();
                              copy(cred.value);
                            }}
                            className="px-2 py-1 text-xs bg-white border border-gray-200
                              rounded hover:shadow"
                          >
                            <Copy className="size-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
