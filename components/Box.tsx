import { ArrowDown, ArrowUp, ShoppingBagIcon } from "lucide-react";

const Box = () => {
  return (
    <div className="border p-5 space-y-3 rounded-md">
      <div className=" rounded-full border w-fit p-2 bg-gray-50 dark:bg-gray-800">
        <ShoppingBagIcon className=" text-blue-700 " />
      </div>
      <div className=" space-y-1">
        <h1 className=" font-bold text-2xl">10</h1>
        <div className="flex justify-between">
          <h2 className=" font-semibold text-sm text-gray-500">
            Total products
          </h2>
          <p className="flex items-center text-green-500 text-sm">
            45% <ArrowUp className=" h-5" />
          </p>
          {/* <p className="flex items-center text-red-500 text-sm">
            45% <ArrowDown className=" h-5" />
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Box;
