import { GalleryItem } from "@/actions/gallery";
import { galleryIdGet } from "@/actions/gallery-id";
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
