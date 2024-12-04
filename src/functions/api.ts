const API_URL = "https://api.artic.edu/api/v1/artworks";

export function GALLERY_GET({ page, limit }: { page: number; limit: number }) {
  return {
    url: `${API_URL}/?page=${page}&limit=${limit}`,
  };
}
