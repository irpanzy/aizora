import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { getBrands } from "../../brands/lib/data";
import { getCategories } from "../../categories/lib/data";
import { getLocations } from "../../locations/lib/data";
import FormProduct from "../components/form-product";

export default async function CreatePage() {
  const brands = await getBrands()
  const categories = await getCategories()
  const locations = await getLocations()

  return (
    <FormProduct type="create">
      <div className="grid gap-3">
        <Label htmlFor="category">Category</Label>
        <Select name="category_id">
          <SelectTrigger id="category" aria-label="Select category">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories?.map((categories) => (
              <SelectItem key={categories.id} value={`${categories.id}`}>{categories.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="brand">Brand</Label>
        <Select name="brand_id">
          <SelectTrigger id="brand" aria-label="Select Brand">
            <SelectValue placeholder="Select brand" />
          </SelectTrigger>
          <SelectContent>
            {brands?.map((brands) => (
              <SelectItem key={brands.id} value={`${brands.id}`}>{brands.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-3">
        <Label htmlFor="location_id">Location</Label>
        <Select name="location_id">
          <SelectTrigger id="location" aria-label="Select location">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            {locations?.map((locations) => (
              <SelectItem key={locations.id} value={`${locations.id}`}>{locations.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </FormProduct>
  );
}
