"use server";

import { GALLERY_GET } from "@/functions/api";

export interface GalleryItem {
    id: number;
    title: string;
    description: string;
    thumbnail: {
        alt_text: string;
    };
    artist_title: string;
    image_id: string;
}

interface GalleryResponse {
    pagination: object;
    data: GalleryItem[];
}

export async function galleryGet(page: number) {
    const { url } = GALLERY_GET({ page: page, limit: 10 });
    const response = await fetch(url);
    const data: GalleryResponse = await response.json();

    return data;
}
