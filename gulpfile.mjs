import gulp from "gulp";
import { deleteAsync } from "del";
import path from "node:path";
import gulpEsbuild from "gulp-esbuild";

// 清理构建目录
async function clean() {
  await deleteAsync(["out/**", "dist/**"]);
}

// 构建 preview-src
function buildPreview() {
  gulp.src('node_modules/@vscode/codicons/dist/codicon.css').pipe(gulp.dest('media/'));
  gulp.src('node_modules/@vscode/codicons/dist/codicon.ttf').pipe(gulp.dest('media/'));
  return gulp
    .src("preview-src/**/*.ts")
    .pipe(
      gulpEsbuild({
        bundle: true,
        format: "iife",
        sourcemap: false,
        platform: "browser",
        target: "es2022",
        treeShaking: true,
      })
    )
    .pipe(gulp.dest("media/"));
}

// 构建 src
async function buildSrc() {
  return gulp
    .src("src/**/*.ts")
    .pipe(
      gulpEsbuild({
        target: "es2022",
        format: "cjs",
        sourcemap: false,
      })
    )
    .pipe(gulp.dest("out/"));
}

const build = gulp.series(clean, gulp.parallel(buildPreview, buildSrc));

export { clean, buildPreview, buildSrc, build as default };
