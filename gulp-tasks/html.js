"use strict";

import {dist, production} from "../gulpfile.js";

const {src, dest, parallel, series, watch} = pkg;
import pkg from 'gulp';
import include from "gulp-file-include";
import browserSync from "browser-sync";

function html() {
    return src('./src/*.html')
        .pipe(include({
            prefix: '@@',
            basepath: './src/includes/',
            indent: true
        }))
        .pipe(dest(dist))
        .pipe(browserSync.stream());
}

export default html;