/** @type {import('next').NextConfig} */
const nextConfig = {
  // Short link to share: fitutoo.com/cohort
  async redirects() {
    return [{ source: "/cohort", destination: "/apex/cohort", permanent: false }];
  },
};
export default nextConfig;
