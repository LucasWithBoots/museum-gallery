import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function ArtDisplayed({
    id,
    title,
    description,
    image_id,
    artist_title,
}: {
    id: number;
    title: string;
    description: string;
    image_id: string;
    artist_title: string;
}) {
    return (
        <Card className="flex flex-col self-start">
            <Link href={`./info/${id}`}>
                <CardContent className="justify-items-center pt-6">
                    <img
                        src={image_id}
                        alt={title}
                        className="w-40 rounded-md"
                    />
                </CardContent>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <p>{artist_title}</p>
                </CardFooter>
            </Link>
        </Card>
    );
}
