"use server";

import InfoArt from "@/components/info_art";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const slug = +(await params).id;

    return (
        <div>
            <div>My Post: {slug}</div>
            <InfoArt id={slug} />
        </div>
    );
}
