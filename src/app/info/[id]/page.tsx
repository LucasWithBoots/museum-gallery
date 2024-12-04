"use server";

import InfoArt from "@/components/info_art";

export default async function Page({ params }: { params: { id: number } }) {
    const slug = params.id;

    return (
        <div>
            <div>My Post: {slug}</div>
            <InfoArt id={slug} />
        </div>
    );
}
