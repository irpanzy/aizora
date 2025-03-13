import { z } from "zod";

export const ALLOW_MIME_TYPES = ["image/jpg", "image/jpeg", "image/png"];

export const schemaSignIn = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const schemaSignUp = z.object({
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const schemaCategory = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }),
});

export const schemaLocation = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }),
});

export const schemaBrand = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }),
  image: z
    .any()
    .refine((file: File) => ALLOW_MIME_TYPES.includes(file.type), {
      message: "Only .jpg, .jpeg, and .png files are allowed",
    })
    .refine((file: File) => file?.name, { message: "Image is required" }),
});

export const schemaProduct = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }),
  description: z
    .string({ required_error: "Description is required" })
    .min(10, { message: "Description must be at least 10 characters" }),
  price: z.string({ required_error: "Price is required" }),
  stock: z.string({ required_error: "Stock is required" }),
  brand_id: z.string({ required_error: "Brand is required" }),
  category_id: z.string({ required_error: "Category is required" }),
  location_id: z.string({ required_error: "Location is required" }),
  images: z
    .any()
    .refine((files: File[]) => files.length === 3, {
      message: "Please upload 3 product images.",
    })
    .refine(
      (files: File[]) => {
        let validate = false;

        Array.from(files).find((file) => {
          validate = ALLOW_MIME_TYPES.includes(file.type);
        });

        return validate;
      },
      {
        message: "Only .jpg, .jpeg, and .png files are allowed",
      }
    ),
});

export const schemaProductUpdate = schemaProduct
  .extend({
    id: z.number({ required_error: "Product is required" }),
  })
  .omit({ images: true });
