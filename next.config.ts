import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
    images: {
        domains: ["www.artic.edu"],
    },
};

export default nextConfig;
