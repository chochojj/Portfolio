/** @type {import('next').NextConfig} */
const { NEXT_PUBLIC_S3_IMAGE_URL, NEXT_PUBLIC_BASE_URL } = process.env;


const getFormattedDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
};

const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    basePath: '/next',
    assetPrefix: '/next/',


    webpack(config, { isServer }) {
        if (!isServer) {
            const formattedDate = getFormattedDate();
            config.output.filename = `static/chunks/[name]-${formattedDate}-1.js`;
            config.output.chunkFilename = `static/chunks/[name]-${formattedDate}-1.js`;
        }
        return config;
    },

    generateBuildId: async () => {
        // You can, for example, get the latest git commit hash here
        return '0.0.1'
    },

    images: {
        domains: NEXT_PUBLIC_S3_IMAGE_URL
            ? [
                new URL(NEXT_PUBLIC_S3_IMAGE_URL).hostname,
                new URL(NEXT_PUBLIC_BASE_URL).hostname,
                "d17jwiodubhsh2.cloudfront.net",
                'ldb-phinf.pstatic.net',
                'naverbooking-phinf.pstatic.net'
            ]
            : ['ldb-phinf.pstatic.net', 'naverbooking-phinf.pstatic.net'],
    },

    headers: async () => {
        return [
            {
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'private, no-cache, no-store, max-age=0, must-revalidate',
                    },
                ],

                source: '/:path*',
            },
            {
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, immutable',
                    },
                ],

                source: '/:path(.+\\.(?:ico|png|svg|jpg|jpeg|gif|webp|json|mp3|mp4|ttf|ttc|otf|woff|woff2)$)',
            },
            {
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'private, no-cache, no-store, max-age=0, must-revalidate',
                    },
                ],

                source: '/_next/data/:path*',
            },
            {
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'private, no-cache, no-store, max-age=0, must-revalidate',
                    },
                ],

                source: '/_next/:path(.+\\.(?:json)$)',
            },
        ];
    },
};

module.exports = nextConfig;
