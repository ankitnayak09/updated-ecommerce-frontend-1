/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // async rewrites() {
    
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/:path*` // Proxy to Backend
  //     }
  //   ]
  // },
   
  images:{
    domains:["tailwindui.com","picsum.photos","lh3.googleusercontent.com","res.cloudinary.com"],
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/mohith/image/upload/'
  }
}

module.exports = nextConfig
