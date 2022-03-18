const {src, dest, watch} = require('gulp'); //Extraemos del gulp
const sass = require('gulp-sass')(require('sass'));

function css(done) {
    src('src/scss/**/*.scss') //Identificar el archivo a compilar
        .pipe(sass()) //Compilar el archivo
        .pipe(dest('build/css')) //Almacenarlo en el disco duro
    done();
}

function dev(done) {
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;