//1、加载gulp包
var gulp = require("gulp");
//引入sass插件对应的模块
var sass = require("gulp-sass");
//引入合并文件对应的模块
//var concat = require("gulp-concat");
//引入压缩的模块
//var uglify = require("gulp-uglify");
//引入重命名的模块
//var rename = require("gulp-rename");
//引入压缩CSS的模块
//var minifycss = require('gulp-minify-css');

//2、写个copy文件的任务
gulp.task("copy-index",function(){
	//gulp.src(["index.html","login.html","goodlist.html","zhuce.html","goodDetails.html","addGoods.html","shopCart.html"]).pipe(gulp.dest("dist"));
	gulp.src(["*.html"]).pipe(gulp.dest("demo"));
});

//拷贝php
gulp.task("copy-php",function(){
	gulp.src(["php/*"]).pipe(gulp.dest("demo/php"));
});

//拷贝js
gulp.task("copy-js",function(){
	//把开发的代码部署到服务器上。
	gulp.src("js/*").pipe(gulp.dest("demo/js"));
});

gulp.task("copy-images",function(){
	gulp.src("img/*").pipe(gulp.dest("demo/img"));
});

gulp.task("copy-scss",function(){
	gulp.src("Scss/*.scss").pipe(gulp.dest("demo/Scss"));
});

//copy css
gulp.task("copy-css",function(){
	gulp.src("css/*").pipe(gulp.dest("demo/css"));
});
//
//把dist放入www目录下
//gulp.task("copy-dist",function(){
//	gulp.src("dist/**/*").pipe(gulp.dest("D:/phpStudy/WWW/dist"));
//});

//sass编译任务
gulp.task("sass",function(){
	gulp.src("Scss/*.scss")//源文件
	.pipe(sass())//做sass预编译（做什么样的处理）
	.pipe(gulp.dest("css/"));//把结果放在何处。
	
});


gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("img/*",["copy-images"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("css/*",["copy-css"]);
	gulp.watch("php/*",["copy-php"]);
	//gulp.watch("dist/**/*",["copy-dist"]);
	gulp.watch("Scss/*.scss",["copy-scss"]);
	gulp.watch("Scss/*.scss",["sass"]);	
});

//合并
/*gulp.task("concatJS",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))
	.pipe(gulp.dest("dist/js"));
});

//合并并压缩
gulp.task("uglify",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))//合并
	.pipe(uglify())//压缩
	.pipe(gulp.dest("dist/js"));
});

//合并，压缩，重命名
gulp.task("concatuglifyrename",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))//合并
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())//压缩
	.pipe(rename("all.min.js"))
	.pipe(gulp.dest("dist/js"));
});


gulp.task("minifycss",function(){
	gulp.src("css/index.scss")
	.pipe(sass())
	.pipe(minifycss())//压缩
	.pipe(gulp.dest("dist/css"));
});
*/



