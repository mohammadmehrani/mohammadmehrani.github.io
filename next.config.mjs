/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp']
  }
};

if (process.env.STATIC_EXPORT === 'true') {
  nextConfig.output = 'export';
  nextConfig.trailingSlash = true;
}

export default nextConfig;
