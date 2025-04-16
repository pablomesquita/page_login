/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "connect-src 'self' http://162.243.29.98",
              "font-src 'self' https://fonts.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "script-src 'self' 'unsafe-inline'",
              "img-src 'self' data:"
            ].join('; ')
          }
        ]
      }
    ];
  },
  experimental: {
    optimizeFonts: true
  }
};

module.exports = nextConfig;