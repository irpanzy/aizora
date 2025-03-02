"use server";

import { schemaProduct, schemaProductUpdate } from "@/lib/schema";
import { uploadFile } from "@/lib/supabase";
import { ActionResult } from "@/types";
import { redirect } from "next/navigation";
import prisma from "../../../../../../../lib/prisma";
import { ProductStatus } from "@prisma/client";
import { deleteFile } from "../../../../../../lib/supabase";

export async function storeProduct(
  _: unknown,
  formData: FormData
): Promise<ActionResult> {
  const parse = schemaProduct.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    stock: formData.get("stock"),
    brand_id: formData.get("brand_id"),
    category_id: formData.get("category_id"),
    location_id: formData.get("location_id"),
    images: formData.getAll("images"),
  });

  if (!parse.success) {
    return {
      error: parse.error.errors[0].message,
    };
  }

  const uploadImages = parse.data.images as File[];
  const fileNames = [];

  for (const image of uploadImages) {
    const fileName = await uploadFile(image, "products");
    fileNames.push(fileName);
  }

  try {
    await prisma.product.create({
      data: {
        name: parse.data.name,
        description: parse.data.description,
        price: Number.parseInt(parse.data.price),
        stock: parse.data.stock as ProductStatus,
        brand_id: Number.parseInt(parse.data.brand_id),
        category_id: Number.parseInt(parse.data.category_id),
        location_id: Number.parseInt(parse.data.location_id),
        images: fileNames,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to create data",
    };
  }
  return redirect("/dashboard/products");
}

export async function updateProduct(
  _: unknown,
  formData: FormData,
  id: number
): Promise<ActionResult> {
  const parse = schemaProductUpdate.safeParse({
    id: id,
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    stock: formData.get("stock"),
    brand_id: formData.get("brand_id"),
    category_id: formData.get("category_id"),
    location_id: formData.get("location_id"),
  });

  if (!parse.success) {
    return {
      error: parse.error.errors[0].message,
    };
  }

  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
  });

  if (!product) {
    return {
      error: "Product not found",
    };
  }

  const uploadImages = formData.getAll("images") as File[];
  let fileNames = [];

  if (uploadImages.length === 3) {
    const parseImages = schemaProduct.pick({ images: true }).safeParse({
      images: uploadImages,
    });

    if (!parseImages.success) {
      return {
        error: "Failed to upload images",
      };
    }

    for (const image of uploadImages) {
      const fileName = await uploadFile(image, "products");
      fileNames.push(fileName);
    }
  } else {
    fileNames = product.images;
  }

  try {
    await prisma.product.update({
      where: {
        id: id,
      },
      data: {
        name: parse.data.name,
        description: parse.data.description,
        price: Number.parseInt(parse.data.price),
        stock: parse.data.stock as ProductStatus,
        brand_id: Number.parseInt(parse.data.brand_id),
        category_id: Number.parseInt(parse.data.category_id),
        location_id: Number.parseInt(parse.data.location_id),
        images: fileNames,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to update data",
    };
  }
  return redirect("/dashboard/products");
}

export async function deleteProduct(
  _: unknown,
  formData: FormData,
  id: number
): Promise<ActionResult> {
  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      images: true,
    },
  });

  if (!product) {
    return {
      error: "Product not found",
    };
  }

  try {
    for (const image of product.images) {
      await deleteFile(image, "proucts");
    }

    await prisma.product.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    return {
      error: "Failed to delete data",
    };
  }

  return redirect("/dashboard/products");
}
