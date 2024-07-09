"use client";
import React, { FC, useState } from "react";
import { ChevronDown, LayoutDashboard, User2Icon } from "lucide-react";
import Link from "next/link";

type MenuLink = {
  title: string;
  url: string;
};

type Props = {
  label: string;
  menuLinks: MenuLink[];
  icon: React.ReactNode;
};

const DashMenuButton = ({ label, menuLinks, icon }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="hover:bg-gray-700 py-2 px-4 w-full rounded-md transition-all flex justify-between items-center"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="text-base font-medium">{label}</span>
        </div>
        <ChevronDown
          className={`transform ${
            open ? "rotate-180" : "rotate-0"
          } transition-all`}
          size={18}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-75  ${
          open ? "h-auto pt-2 opacity-100" : "h-0 opacity-0 "
        }`}
      >
        {menuLinks.map((menuLink, index) => (
          <div className="py-2 px-7 text-gray-300 hover:text-white font-medium" key={index}>
            <Link href={menuLink.url}>{menuLink.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashMenuButton;
