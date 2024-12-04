"use client";

import ArtDisplayed from "@/components/art_displayed";
import { Button } from "@/components/ui/button";
import { useGalleries } from "@/hooks/use-galleries";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [page, setPage] = useState(1);
    const galleries = useGalleries(page);

    return (
        <div className="p-5 max-w-5xl mx-auto">
            {galleries.length !== 0 ? (
                <div className="grid grid-cols-4 gap-5">
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

            <Button
                variant="outline"
                className=" fixed bottom-4 left-1/2 transform -translate-x-1/2"
                onClick={() => setPage(page + 1)}
            >
                <Plus /> Load more
            </Button>
        </div>
    );
}
