"use server";

import { createAdminClient } from "@/utils/supabase/server";
import type { Testimonial } from "@/types/testimonials";

export async function fetchTestimonials(): Promise<Testimonial[]> {
  const supabase = await createAdminClient();

  const { data, error } = await supabase.from("abiga_testimonials").select("*");

  if (error) {
    console.log({ error });

    throw error;
  }

  return data;
}
