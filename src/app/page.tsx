"use client";

import ArtDisplayed from "@/components/art_displayed";
import { Button } from "@/components/ui/button";
import { useGalleries } from "@/hooks/use-galleries";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
    const [page, setPage] = useState(1);
    const galleries = useGalleries(page);

    return (
        <div className="">
            {galleries.length !== 0 ? (
                <div className="grid grid-cols-5">
                    {galleries.map((gallery) => (
                        <ArtDisplayed
                            key={gallery.id}
                            id={gallery.id}
                            title={gallery.title}
                            description={gallery.thumbnail?.alt_text}
                            image_id={`https://www.artic.edu/iiif/2/${gallery.image_id}/full/843,/0/default.jpg`}
                            artist_title={gallery.artist_title}
                        />
                    ))}
                </div>
            ) : (
                <h1>LOADING</h1>
            )}

            <Button className="bg-yellow-500" onClick={() => setPage(page + 1)}>
                <Plus /> Load more
            </Button>
        </div>
    );
}
