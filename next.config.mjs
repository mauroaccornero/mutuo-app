/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path  from 'path'
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    output: 'export',
    //assetPrefix: isProd ? 'http://localhost:63342/mutuo-app/out/' : "",
};

export default nextConfig;
