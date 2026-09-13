import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/ResumeJorge.docx", destination: "/resume.pdf", permanent: true }];
  },
};

export default nextConfig;
