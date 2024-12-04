"use client";

import ArtDisplayed from "@/components/art_displayed";
import { Button } from "@/components/ui/button";
import { useGalleries } from "@/hooks/use-galleries";
import { Github, Plus } from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [page, setPage] = useState(1);
    const galleries = useGalleries(page);

    return (
        <div className="p-5 max-w-5xl mx-auto mt-4">
            {galleries.length !== 0 ? (
                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 ">
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

            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-5">
                <Button variant="outline" onClick={() => setPage(page + 1)}>
                    <Plus /> Load more
                </Button>
                <a
                    href="https://github.com/LucasWithBoots/museum-gallery"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button variant="outline">
                        <Github /> Github
                    </Button>
                </a>
            </div>
        </div>
    );
}
