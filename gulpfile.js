const gulp = require("gulp");
const cssmin = require("gulp-cssmin");
const autoprefixer = require("gulp-autoprefixer");
//压缩CSS文件，autoprefixer自动添加前缀，需要在package.json里配置
/* "browserslist": [
        "last 2 versions",
        "iOS>7",
        "Firefox < 20",
        "last 2 Explorer versions"
    ] */
const cssHandler = () => {
	return gulp.src("./src/css/*.css")
		.pipe(autoprefixer())
		.pipe(cssmin())
		.pipe(gulp.dest("./dist/css"))
}

const imgHandler = () => {
	return gulp.src("./src/images/**")
		.pipe(gulp.dest("./dist/images"))
}

const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

const jsHandler = () => {
	return gulp.src("./src/js/*.js")
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest("./dist/js"))

}
const libHandler = () => {
	return gulp.src("./src/lib/**")
		.pipe(gulp.dest("./dist/lib"))
}
const interfaceHandler = () => {
	return gulp.src("./src/interface/**")
		.pipe(gulp.dest("./dist/interface"))
}
const htmlmin = require("gulp-htmlmin")
const htmlHandler = () => {
	return gulp.src("./src/pages/*.html")
		.pipe(htmlmin({
			collapseWhitespace: true, //压缩空格
			removeAttributeQuotes: true, //移除属性的引号
			collapseBooleanAttributes: true, //把值为布尔值的属性简写
			removeComments: true, //移除注释
			minifyCSS: true, //把页面里面的style标签里面的css样式也去空格
			minifyJS: true, //把页面里的script标签里面的js代码给去空格
		}))
		.pipe(gulp.dest("./dist/pages"))
}

const watchHandler = () => {
	gulp.watch('./src/css/*.css', cssHandler);
	gulp.watch('./src/js/*.js', jsHandler);
	gulp.watch('./src/pages/*.html', htmlHandler);
	gulp.watch('./src/images/**', imgHandler);
	gulp.watch('./src/lib/*.js', libHandler);
	// 也需要监控sass文件夹里面的文件变化
	gulp.watch('./src/sass/*.scss', sassHandler);
	gulp.watch("./src/interface/**",interfaceHandler)

}

const del = require("del")
const delHandler = () => {
	return del(["./dist"])
}

const sass = require("gulp-sass")
const sassHandler = () => {
	return gulp.src("./src/sass/*.scss")
		.pipe(sass())
		.pipe(cssmin())
		.pipe(gulp.dest("./dist/css"))
}

module.exports.default = gulp.series(
	delHandler,
	gulp.parallel(
		cssHandler, jsHandler, htmlHandler, imgHandler, libHandler, sassHandler,interfaceHandler
	),
	watchHandler
)
