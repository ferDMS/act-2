import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
  In a Next.js project, the redirects function is used to configure URL redirects. When you define this function in your next.config.ts file, you can specify rules that automatically redirect users from one URL to another.
  */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/counter",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/counter",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
