"use client";

import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type Props = {
  label: string;
  url: string;
  icon: React.ReactNode;
};

const DashLinkButton = ({ label, url, icon }: Props) => {
  return (
    <div>
      <Link
        href={url}
        className="hover:bg-gray-700 py-2 px-4 w-full rounded-md transition-all flex"
      >
        <div className="flex items-center gap-3">
          {icon}
          <h1 className="text-base font-medium">{label}</h1>
        </div>
      </Link>
    </div>
  );
};

export default DashLinkButton;
