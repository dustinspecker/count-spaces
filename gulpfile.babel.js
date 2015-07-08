'use strict';
import babel from 'gulp-babel';
import babelCompiler from 'babel';
import del from 'del';
import gulp from 'gulp';
import eslint from 'gulp-eslint';
import istanbul from 'gulp-istanbul';
import jscs from 'gulp-jscs';
import jshint from 'gulp-jshint';
import mocha from 'gulp-mocha';

const configFiles = './gulpfile.babel.js'
  , srcFiles = 'index.js'
  , testFiles = 'test.js'

  , destDir = './lib/';

gulp.task('clean', (cb) => {
  del(destDir, cb);
});

gulp.task('lint', ['clean'], () => {
  return gulp.src([configFiles, srcFiles, testFiles])
    .pipe(eslint())
    .pipe(eslint.formatEach('./node_modules/eslint-path-formatter'))
    .pipe(eslint.failOnError())
    .pipe(jscs({
      esnext: true
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('compile', ['lint'], () => {
  return gulp.src(srcFiles)
    .pipe(babel({
      auxiliaryCommentBefore: 'istanbul ignore next',
      modules: 'common'
    }))
    .pipe(gulp.dest(destDir));
});

gulp.task('build', ['compile']);

gulp.task('test', ['build'], (cb) => {
  gulp.src([destDir + 'index.js'])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
      gulp.src([testFiles])
        .pipe(mocha({
          compilers: {
            js: babelCompiler
          }
        }))
        .pipe(istanbul.writeReports())
        .on('end', cb);
    });
});
