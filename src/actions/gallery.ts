"use server";

import { GALLERIES_GET } from "@/functions/api";
import { GalleryItem } from "@/interfaces/gallery-item";

interface GalleryResponse {
    pagination: object;
    data: GalleryItem[];
}

export async function galleryGet(page: number) {
    const { url } = GALLERIES_GET({ page: page, limit: 10 });
    const response = await fetch(url, { next: { revalidate: 3600 } });
    const data: GalleryResponse = await response.json();

    return data;
}
