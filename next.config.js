/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["tailwindui.com","picsum.photos","lh3.googleusercontent.com","res.cloudinary.com"],
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/mohith/image/upload/'
  }
}

module.exports = nextConfig
