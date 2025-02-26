import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY ?? "";

const supabase = createClient(supabaseUrl, supabaseKey);

export const getImageUrl = (name: string) => {
  const { data } = supabase.storage
    .from("aizora")
    .getPublicUrl(`public/brands/${name}`);

  return data.publicUrl;
};

export const uploadFile = async (
  file: File,
  path: "brands" | "proucts" = "brands"
) => {
  const fileType = file.type.split("/")[1];
  const fileName = `${path}-${Date.now()}.${fileType}`;

  await supabase.storage
    .from("aizora")
    .upload(`public/${path}/${fileName}`, file, {
      cacheControl: "3600",
      upsert: false,
    });

  return fileName;
};

export const deleteFile = async (
  fileName: string,
  path: "brands" | "proucts" = "brands"
) => {
  await supabase.storage.from("aizora").remove([`public/${path}/${fileName}`]);
};
