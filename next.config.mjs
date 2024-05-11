/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path  from 'path'
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    output: 'export',
    basePath: "/mutuo-app",
};

export default nextConfig;
