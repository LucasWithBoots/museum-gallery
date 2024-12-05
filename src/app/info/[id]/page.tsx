"use server";

import ArtFullscreen from "@/app/info/[id]/art-fullscreen";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const slug = +(await params).id;

    return (
        <div className="h-screen lg:px-20 md:px-10 sm:px-5">
            <ArtFullscreen id={slug} />
        </div>
    );
}
