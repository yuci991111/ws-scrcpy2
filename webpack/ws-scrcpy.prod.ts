import { backend, frontend } from './ws-scrcpy.common';
import webpack from 'webpack';

const prodOpts: webpack.Configuration = {
    devtool: 'source-map',
    mode: 'production',
};

const front = () => {
    return Object.assign({}, frontend(), prodOpts);
};
const back = () => {
    return Object.assign({}, backend(), prodOpts);
};

module.exports = [front, back];
