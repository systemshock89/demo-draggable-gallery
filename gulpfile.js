"use strict";

export const dist = "./dist";

import pkg from 'gulp';
const {src, dest, parallel, series, watch} = pkg;
import {deleteAsync} from 'del';

import scripts from './gulp-tasks/scripts.js';
import styles from './gulp-tasks/styles.js';
import images from "./gulp-tasks/images.js";
import sprites from "./gulp-tasks/sprites.js";
import html from "./gulp-tasks/html.js";
import copyAssets from "./gulp-tasks/assets.js";
import serve from "./gulp-tasks/serve.js";

export let production;
async function isProd() {
    production = true;
}

async function clearDistTask() {
    await deleteAsync(dist, { force: true });
}

export const clearDist = clearDistTask;
export const img = images;
export const build = parallel(html, styles, scripts, copyAssets, sprites, images);
export const prod = series(isProd, clearDist, build);
export default series(build, serve);