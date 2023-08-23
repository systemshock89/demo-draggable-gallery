"use strict";

import { dist, production } from "../gulpfile.js";

import pkg from 'gulp';
const {src, dest, parallel, series, watch} = pkg;
import gulpSass from 'gulp-sass';
import * as dartSass from 'sass';
const sass = gulpSass(dartSass);
import gulpif from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import postCss from "gulp-postcss";
import postcssSortMediaQueries from "postcss-sort-media-queries";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import rename from "gulp-rename";
import browserSync from "browser-sync";

function styles() {
    return src("./src/scss/main.scss")
        .pipe(gulpif(!production, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(production, postCss([
            postcssSortMediaQueries({sort: 'desktop-first'}),
            autoprefixer({ grid: 'autoplace' }),
            cssnano({ preset: ['default', { discardComments: { removeAll: true } }] })
        ])))
        .pipe(rename({
            basename: 'bundle',
            suffix: '.min'
        }))
        .pipe(gulpif(!production, sourcemaps.write("./maps/")))
        .pipe(dest(dist + '/css'))
        .pipe(browserSync.stream());
}

export default styles;