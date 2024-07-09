import {
  Bolt,
  ChevronDown,
  LogOut,
  NotebookIcon,
  User2Icon,
} from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Image from "next/image";

const DashUserComponent = () => {
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-3 cursor-pointer rounded-full border border-transparent hover:bg-gray-100 hover:border-gray-100 py-1 lg:px-4 px-1 transform duration-200 dark:hover:bg-gray-800 dark:hover:border-gray-700">
            <h1 className="text-gray-700 font-semibold dark:text-gray-300 max-lg:hidden">
              RayeN3
            </h1>
            <div className="flex items-center gap-1">
              <div className=" h-10 w-10 rounded-full overflow-hidden relative">
                <Image
                  src="/no_avatar.jpg"
                  alt="Profile"
                  fill
                  className=" object-cover"
                />
              </div>
              <ChevronDown className="text-gray-600 hover:text-blue-500 transition-all dark:text-gray-300 max-sm:hidden" />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <DropdownMenuGroup>
            <DropdownMenuItem className="dark:hover:bg-gray-700">
              <User2Icon className="mr-2 h-4 w-4 text-gray-700 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-300">Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-gray-700">
              <NotebookIcon className="mr-2 h-4 w-4 text-gray-700 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-300">Contact</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:hover:bg-gray-700">
              <Bolt className="mr-2 h-4 w-4 text-gray-700 dark:text-gray-300" />
              <span className="text-gray-700 dark:text-gray-300">
                Account settings
              </span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-500 dark:hover:bg-gray-700">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DashUserComponent;
