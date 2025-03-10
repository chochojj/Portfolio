/** @type {import('next').NextConfig} */


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
    basePath: '',     
    assetPrefix: '',  


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

 
};

module.exports = nextConfig;
