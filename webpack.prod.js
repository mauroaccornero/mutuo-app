'use strict';

import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import common from './webpack.common.js';

export default merge(common, {
    devtool: 'inline-source-map',
    mode: 'production',
    optimization: {
        runtimeChunk: {
            name: 'mortgage.app.runtime',
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'mortgage.app.vendor',
                    chunks: 'all',
                },
            },
        },
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
});
