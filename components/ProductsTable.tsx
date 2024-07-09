"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import DashAddProduct from "./DashAddProduct";
import { createClient } from "@/utils/supabase/client";

type Product = {
  id: string;
  name: string;
  desc?: string;
  price: number;
};

const ProductsTable = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const supabase = createClient();
        const { data, error } = await supabase.from("products").select("*");

        if (error) {
          throw error;
        }

        setProducts(data);
      } catch (error) {
        setError("this is error");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="space-y-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <Input className="flex-1 max-w-sm" placeholder="Search..." />
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="font-medium flex items-center border py-2 px-3 rounded-lg hover:bg-gray-50 transition-all dark:hover:bg-gray-800">
                Columns <ChevronDown className="ml-2 h-4 w-4" />
              </div>
            </DropdownMenuTrigger>
          </DropdownMenu>
          <DashAddProduct />
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead className="w-[200px]">Product Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product: Product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.desc}</TableCell>
              <TableCell className="text-right">{product.price} DT</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
