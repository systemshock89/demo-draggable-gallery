"use strict";

import { dist, production } from "../gulpfile.js";

const {src, dest, parallel, series, watch} = pkg;
import pkg from 'gulp';
import changed from "gulp-changed";
import browserSync from "browser-sync";

function copyAssets() {
    src("./src/js/libs/**/*")
        .pipe(changed(dist + "/js/libs"))
        .pipe(dest(dist + "/js/libs"))
        .pipe(browserSync.stream());

    return src("./src/fonts/**/*")
        .pipe(changed(dist + "/fonts"))
        .pipe(dest(dist + "/fonts"))
        .pipe(browserSync.stream());
}

export default copyAssets;