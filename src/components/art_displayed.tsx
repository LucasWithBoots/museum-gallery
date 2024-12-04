import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function ArtDisplayed({
    title,
    description,
    image_id,
    artist_title,
}: {
    title: string;
    description: string;
    image_id: string;
    artist_title: string;
}) {
    return (
        <Card className="flex flex-col self-start">
            <CardContent className="justify-items-center pt-6">
                <img src={image_id} alt={title} className="w-40 rounded-md" />
            </CardContent>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <p>{artist_title}</p>
            </CardFooter>
        </Card>
    );
}
