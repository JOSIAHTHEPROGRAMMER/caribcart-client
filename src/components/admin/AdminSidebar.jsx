import { NavLink } from "react-router-dom";
import {
  BanknoteIcon,
  CheckIcon,
  LayoutDashboardIcon,
  ListIcon,
  Settings2Icon,
  WalletIcon,
} from "lucide-react";
import { assets } from "../../assets/assets";
import { useUser } from "@clerk/clerk-react";

const AdminSidebar = () => {
  const { user } = useUser();

  const adminNavlinks = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboardIcon },
    { name: "Verify", path: "/admin/verify-credentials", icon: CheckIcon },
    { name: "Change", path: "/admin/change-credentials", icon: Settings2Icon },
    { name: "Listings", path: "/admin/list-listings", icon: ListIcon },
    { name: "Transactions", path: "/admin/transactions", icon: BanknoteIcon },
    { name: "Withdrawal", path: "/admin/withdrawal", icon: WalletIcon },
  ];

  return (
    <div className="h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-200 text-sm">
      <img
        className="size-9 md:size-12 rounded-full mx-auto"
        src={user.imageUrl}
        alt="sidebar"
      />
      <p className="mt-2 text-base max-md:hidden">
        {user.firstName} {user.lastName}
      </p>
      <div className="w-full">
        {adminNavlinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            end
            className={({ isActive }) =>
              `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 md:pl-10 first:mt-6 text-gray-600 ${isActive && "bg-sky-500/10 text-sky-600 group"}`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className="w-5 h-5" />
                <p className="max-md:hidden">{link.name}</p>
                <span
                  className={`w-1.5 h-10 rounded-l right-0 absolute ${isActive && "bg-sky-500"}`}
                />
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
