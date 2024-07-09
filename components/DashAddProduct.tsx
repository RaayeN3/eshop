"use client";
import { PlusIcon } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/client";

type Product = {
  name: string;
  desc?: string;
  price: number;
};

const createProduct = async (product: Product) => {
  try {
    const supabase = createClient();
    const { data, error } = await supabase.from("products").insert([
      {
        name: product.name,
        desc: product.desc,
        price: product.price,
      },
    ]);

    if (error) {
      console.error("Supabase error:", error);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error creating product:", error);
    return null;
  }
};

const DashAddProduct = () => {
  const [product, setProduct] = useState<Product>({
    name: "",
    desc: "",
    price: 0,
  });
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [id]: id === "price" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting product:", product); // Debugging statement
    const result = await createProduct(product);
    if (result) {
      // Reset form inputs
      setProduct({ name: "", desc: "", price: 0 });
      // Close the dialog
      setDialogOpen(false);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger
        className="w-full flex justify-center h-full text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-gray-400 transition-all items-center gap-2 p-4"
        onClick={() => setDialogOpen(true)}
      >
        Add product <PlusIcon size={18} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new product</DialogTitle>
          <DialogDescription>
            Fill in the details below to add a new product to the inventory.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Product name
              </Label>
              <Input
                id="name"
                type="text"
                className="col-span-3"
                value={product.name}
                onChange={handleInputChange}
                placeholder="Enter product name"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="desc" className="text-right">
                Description
              </Label>
              <Input
                id="desc"
                type="text"
                className="col-span-3"
                value={product.desc || ""}
                onChange={handleInputChange}
                placeholder="Enter product description"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                className="col-span-3"
                value={product.price.toString()}
                onChange={handleInputChange}
                placeholder="Enter product price"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Add
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DashAddProduct;
