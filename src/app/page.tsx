import { galleryGet } from "@/actions/gallery";
import ArtDisplayed from "@/components/art_displayed";
import Image from "next/image";

export default async function Home() {
    const galleries = await galleryGet();

    return (
        <div>
            <h1>Teste</h1>
            {galleries.data.map((gallery) => (
                <ArtDisplayed title={gallery.title} />
            ))}
        </div>
    );
}
