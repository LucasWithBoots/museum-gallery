import { galleryIdGet } from "@/actions/gallery-id";
import { GalleryItem } from "@/interfaces/gallery-item";
import { useEffect, useState } from "react";

export function useGallery(id: number) {
    const [gallery, setGallery] = useState<GalleryItem | null>(null);

    useEffect(() => {
        const fetchGallery = async () => {
            const data = await galleryIdGet(id);
            setGallery(data.data);
        };

        fetchGallery();
    }, [id]);

    return gallery;
}
