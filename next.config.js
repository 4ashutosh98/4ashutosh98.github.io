/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // ✅ Enables static export (replaces `next export`)
    images: {
      unoptimized: true, // ✅ Needed for static exports if using Next.js Image component
    },
  };
  
  module.exports = nextConfig;
  