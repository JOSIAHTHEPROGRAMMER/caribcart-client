import {
  ChartLineIcon,
  CircleDollarSignIcon,
  ListIcon,
  Loader2Icon,
  UsersIcon,
} from "lucide-react";
import AdminTitle from "../../components/admin/AdminTitle";
import { useState } from "react";
import { useEffect } from "react";
import ListingDetailsModal from "../../components/admin/ListingDetailsModal";
import { dummyListings } from "../../assets/assets";

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    totalListings: 0,
    totalRevenue: 0,
    activeListings: 0,
    totalUser: 0,
    recentListings: [],
  });
  const [showModal, setShowModal] = useState(null);

  const dashboardCards = [
    {
      title: "Total Listings",
      value: dashboardData.totalListings || "0",
      icon: ChartLineIcon,
    },
    {
      title: "Total Revenue",
      value: currency + dashboardData.totalRevenue.toLocaleString() || "0",
      icon: CircleDollarSignIcon,
    },
    {
      title: "Active Listings",
      value: dashboardData.activeListings || "0",
      icon: ListIcon,
    },
    {
      title: "Total Users",
      value: dashboardData.totalUser || "0",
      icon: UsersIcon,
    },
  ];

  const fetchDashboardData = async () => {
    setDashboardData({
      totalListings: 5,
      totalRevenue: 2980,
      activeListings: 3,
      totalUser: 7,
      recentListings: dummyListings,
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return loading ? (
    <div className="flex items-center justify-center h-full">
      <Loader2Icon className="animate-spin text-sky-600 size-7" />
    </div>
  ) : (
    <>
      <AdminTitle text1="Admin" text2="Dashboard" />

      <div className="relative flex flex-wrap gap-4 mt-6 text-gray-600">
        <div className="flex flex-wrap gap-4 w-full">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 bg-white ring ring-gray-200 rounded-md max-w-50 w-full"
            >
              <div>
                <h1 className="text-sm">{card.title}</h1>
                <p className="text-xl font-medium mt-1">{card.value}</p>
              </div>
              <card.icon />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 text-lg font-medium text-gray-700">Recent Listings</p>
      <div className="mt-6 overflow-x-auto bg-white border border-gray-200 w-full max-w-5xl rounded-xl">
        <table className="w-full text-sm text-left  text-gray-700">
          <thead className="text-xs uppercase border-b border-gray-200">
            <tr>
              <th className="pl-4 py-3"> # </th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Niche</th>
              <th className="px-4 py-3">Platform</th>
              <th className="px-4 py-3">Username</th>
            </tr>
          </thead>
          <tbody>
            {dashboardData.recentListings.map((listing, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <ListingDetailsModal
            listing={showModal}
            onClose={() => setShowModal(null)}
          />
        )}
      </div>
    </>
  );
};

export default Dashboard;
