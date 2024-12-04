"use server";

import { GALLERY_GET } from "@/functions/api";

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image_id: string;
}

interface GalleryResponse {
  pagination: object;
  data: GalleryItem[];
}

export async function galleryGet() {
  const { url } = GALLERY_GET({ page: 1, limit: 10 });
  const response = await fetch(url);
  const data: GalleryResponse = await response.json();

  return data;
}
