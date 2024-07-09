import { Bell, LayoutDashboard, ShoppingBag, User2Icon } from "lucide-react";
import Link from "next/link";
import MenuGroup from "./MenuGroup";

const Sidebar = () => {
  return (
    <div
      className="lg:w-[300px] max-lg:w-[240px] bg-slate-800 dark:bg-slate-900 transition duration-300 h-screen text-white overflow-y-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex items-center gap-3 p-6">
        {/* Logo */}
        <div className="relative flex items-center overflow-hidden">
          <h1 className="font-bold text-2xl">
            <Link href="/dashboard" className="flex items-center gap-2">
              <ShoppingBag size={24} /> E-Shop
            </Link>
          </h1>
          {/* Uncomment if using Image component */}
          {/* <Image src={Logo} alt="Logo" objectFit="cover" /> */}
        </div>
      </div>
      <div className="p-4 space-y-6 mt-5">
        <MenuGroup
          title="Menu"
          items={[
            {
              type: "menu",
              label: "Dashboard",
              icon: <LayoutDashboard size={20} />,
              menuLinks: [
                { title: "Main", url: "/dashboard" },
                { title: "Products", url: "/dashboard/products" },
                { title: "Users", url: "/dashboard/users" },
                { title: "Orders", url: "/dashboard/orders" },
              ],
            },
            {
              type: "link",
              label: "Profile",
              url: "/dashboard/profile",
              icon: <User2Icon size={20} />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Sidebar;
