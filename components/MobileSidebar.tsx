"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOverlayClick = () => {
    setOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <Menu />
      </button>
      {open && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 ${
            open ? "backdrop-blur-sm" : "backdrop-blur-0"
          } transition-all duration-500 z-10`}
          onClick={handleOverlayClick}
        ></div>
      )}
      <div
        className={`fixed transition-all duration-300 ${
          open ? "left-0" : "left-[-300px]"
        } top-0 z-20 h-full bg-white shadow-lg`}
      >
        <Sidebar />
      </div>
    </div>
  );
};

export default MobileSidebar;
