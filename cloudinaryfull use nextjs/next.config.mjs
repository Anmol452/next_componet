/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Isse Cloudinary ki saari images allow ho jayengi
      },
    ],
  },
};

export default nextConfig;
