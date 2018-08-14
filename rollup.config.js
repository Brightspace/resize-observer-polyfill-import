import babel from 'rollup-plugin-babel';
import buble from 'rollup-plugin-buble';

export default {
    input: 'node_modules/resize-observer-polyfill/src/index.js',
    output: [{
        name: 'ResizeObserver',
        file: 'dist/ResizeObserver.js',
        format: 'iife'
    }],
    plugins: [
        babel({
            plugins: ['transform-class-properties']
        }),

        buble({
            transforms: {
                dangerousForOf: true
            },
            namedFunctionExpressions: false
        })
    ]
};
