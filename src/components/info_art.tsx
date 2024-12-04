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

export default function InfoArt({ id }: { id: number }) {
    const gallery = useGallery(id);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{gallery?.title}</CardTitle>
                <CardDescription>
                    {gallery?.thumbnail?.alt_text}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <img
                    src={`https://www.artic.edu/iiif/2/${gallery?.image_id}/full/843,/0/default.jpg`}
                    className="w-40 rounded-md"
                />
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}
