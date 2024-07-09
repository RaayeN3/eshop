import DashHeader from "@/components/DashHeader";
import { ReactNode } from "react";
import Logo from "@/public/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GrDashboard } from "react-icons/gr";
import { LayoutDashboard, LayoutDashboardIcon } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex transition-all duration-500">
      <div className="max-md:hidden ">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full">
        <DashHeader />
        {/* Main Content Area */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
