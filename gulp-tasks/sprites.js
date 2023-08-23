"use strict";

import { dist, production } from "../gulpfile.js";

const {src, dest, parallel, series, watch} = pkg;
import pkg from 'gulp';
import svgSprite from "gulp-svg-sprite";
import browserSync from "browser-sync";

function sprites() {
    return src("./src/sprites/**/*.svg")
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(dest(dist + "/img"))
        .pipe(browserSync.stream());
}

export default sprites;