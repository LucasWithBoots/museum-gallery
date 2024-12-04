export default function ArtDisplayed({ title }: { title: string }) {
    return (
        <div className="bg-white">
            <h1 className="text-black">{title}</h1>
        </div>
    );
}
