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

export async function submitTestimonial(formData: {
  text: string;
  author: string;
  relation: string;
  image?: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = await createAdminClient();

    // Get the current max order to add new testimonial at the end
    const { data: existingTestimonials } = await supabase
      .from("abiga_testimonials")
      .select("order")
      .order("order", { ascending: false })
      .limit(1);

    const nextOrder = existingTestimonials && existingTestimonials.length > 0
      ? (existingTestimonials[0].order || 0) + 1
      : 1;

    const { error } = await supabase.from("abiga_testimonials").insert({
      text: formData.text.trim(),
      author: formData.author.trim(),
      relation: formData.relation.trim(),
      image: formData.image || "/placeholder-family.jpg",
      order: nextOrder,
    });

    if (error) {
      console.error("Error submitting testimonial:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting testimonial:", error);
    return { success: false, error: "Une erreur est survenue lors de la soumission." };
  }
}
