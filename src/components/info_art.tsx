"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useGallery } from "@/hooks/use-gallery";
import Image from "next/image";

export default function InfoArt({ id }: { id: number }) {
    const gallery = useGallery(id);

    return (
        <Card className="h-auto lg:w-1/2 mx-auto my-10">
            <CardHeader>
                <CardTitle>{gallery?.title}</CardTitle>
                <CardDescription>
                    {gallery?.thumbnail?.alt_text}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                    src={`https://www.artic.edu/iiif/2/${gallery?.image_id}/full/843,/0/default.jpg`}
                    className="rounded-md"
                    width={500}
                    height={100}
                    alt={gallery?.title ?? "No title"}
                />
            </CardContent>
            <CardFooter>
                <div
                    dangerouslySetInnerHTML={{
                        __html: gallery?.description || "",
                    }}
                />
            </CardFooter>
        </Card>
    );
}
