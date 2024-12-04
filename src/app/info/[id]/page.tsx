"use server";

import InfoArt from "@/components/info_art";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const slug = +(await params).id;

    return (
        <div className="h-screen px-20">
            <InfoArt id={slug} />
        </div>
    );
}
