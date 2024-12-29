"use server";

import { createAdminClient } from "@/utils/supabase/server";
import { Galery } from "@/types/galery";

export async function fetchTGalery(): Promise<Galery[]> {
  const supabase = await createAdminClient();

  const { data, error } = await supabase.from("abiga_photos").select("*");

  if (error) {
    console.log({ error });

    throw error;
  }

  return data;
}
