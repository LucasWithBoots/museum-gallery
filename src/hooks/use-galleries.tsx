import { galleryGet } from "@/actions/gallery";
import { GalleryItem } from "@/interfaces/gallery-item";
import { useEffect, useState } from "react";

export function useGalleries(page: number) {
    const [galleries, setGalleries] = useState<GalleryItem[]>([]);

    useEffect(() => {
        const fetchGalleries = async () => {
            const data = await galleryGet(page);
            setGalleries((prev) => [...prev, ...data.data]);
        };

        fetchGalleries();
    }, [page]);

    return galleries;
}
