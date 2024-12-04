import { GALLERY_GET } from "@/functions/api";
import { GalleryItem } from "./gallery";

interface GalleryResponse {
    data: GalleryItem;
    info: object;
    config: object;
}

export async function galleryIdGet(id: number) {
    const { url } = GALLERY_GET({ id: id });
    const response = await fetch(url);
    const data: GalleryResponse = await response.json();

    return data;
}
