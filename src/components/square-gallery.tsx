import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function SquareGallery({
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
    const audioRef = useRef<HTMLAudioElement>(null);

    const playSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <audio ref={audioRef} src="assets/audio/sound.mp3" preload="auto" />
            <Card
                className="h-80 overflow-hidden relative"
                onMouseEnter={playSound}
                onClick={playSound}
            >
                <Link href={`./info/${id}`}>
                    <CardContent className="justify-items-center pt-6">
                        <Image
                            src={image_id}
                            alt={title ?? "No title"}
                            width={200}
                            height={100}
                            className="rounded-md"
                        />
                    </CardContent>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <p>{artist_title}</p>
                    </CardFooter>
                    <div className="absolute bottom-0 h-2/6 w-full z-10 bg-gradient-to-b from-transparent to-black "></div>
                </Link>
            </Card>
        </motion.div>
    );
}
