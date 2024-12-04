"use server";

import InfoArt from "@/components/info_art";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const slug = +(await params).id;

    return (
        <div className="h-screen lg:px-20 md:px-10 sm:px-5">
            <InfoArt id={slug} />
        </div>
    );
}
