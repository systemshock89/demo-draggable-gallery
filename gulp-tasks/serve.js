"use strict";

import { dist, production } from "../gulpfile.js";
import scripts from "./scripts.js";
import styles from "./styles.js";
import images from "./images.js";
import sprites from "./sprites.js";
import html from "./html.js";
import copyAssets from "./assets.js";

const {src, dest, parallel, series, watch} = pkg;
import pkg from 'gulp';
import browserSync from "browser-sync";

function serve() {
    browserSync.init({
        server: dist,
        ghostMode: false,
        notify: false,
        online: true,
        // tunnel: 'yousutename', // Attempt to use the URL https://yousutename.loca.lt
    });

    watch(["./src/*.html", "./src/includes/*.html"], { usePolling: true }, html);
    watch(["./src/fonts/**/*", "./src/js/libs/**/*"], { usePolling: true }, copyAssets);
    watch(['./src/img/**/*', './src/img_nocompress/**/*', './src/img_noconvert/**/*'], { usePolling: true }, images);
    watch('./src/sprites/**/*', { usePolling: true }, sprites);
    watch("./src/scss/**/*", { usePolling: true }, styles);
    watch("./src/js/**/*", { usePolling: true }, scripts);
}

export default serve;