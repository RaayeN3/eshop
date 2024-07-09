import { Bell, ChevronDown, Menu, Search } from "lucide-react";
import DarkMode from "./DarkMode";
import DashUserComponent from "./DashUserComponent";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";

const DashHeader = () => {
  return (
    <div className="shadow-md border-b bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between mx-auto py-3 px-4 container">
        <div className="md:hidden">
          <MobileSidebar />
        </div>
        
        <form className="flex items-center gap-2 border p-2 rounded-full shadow-sm focus-within:border-blue-500 transition-all dark:border-gray-700 max-md:hidden w-[200px] focus-within:lg:w-[300px] focus-within:w-[250px] overflow-hidden">
          <button
            type="submit"
            className="text-gray-500 hover:text-blue-500 transition-all focus:outline-none dark:text-gray-300"
          >
            <Search />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-gray-700 placeholder-gray-400 dark:text-gray-300 dark:placeholder-gray-500 flex-grow min-w-0"
          />
        </form>

        <div className="flex items-center gap-6">
          <DarkMode />

          <div className="relative">
            <Bell className="text-gray-600 hover:text-blue-500 transition-all cursor-pointer dark:text-gray-300" />
            <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></div>
          </div>

          <DashUserComponent />
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
