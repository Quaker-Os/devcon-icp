/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",

    images: { unoptimized: true }, // to make npm run dev work
    output: "export", // to export index.html at build times
  };
  
  export default nextConfig;