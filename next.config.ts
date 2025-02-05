import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
        {
            source: '/dashboard',
            destination: '/Dashboard/CourseProgress', 
        },
    ];
},
};

export default nextConfig;
