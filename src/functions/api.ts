const API_URL = "https://api.artic.edu/api/v1/artworks";

export function GALLERIES_GET({
    page,
    limit,
}: {
    page: number;
    limit: number;
}) {
    return {
        url: `${API_URL}/?page=${page}&limit=${limit}`,
    };
}

export function GALLERY_GET({ id }: { id: number }) {
    return {
        url: `${API_URL}/${id}`,
    };
}
