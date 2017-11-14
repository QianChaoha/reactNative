 最终执行的脚本,npm run build就等于执行了babel -d build/ test/。此命令将test目录下的
 jsx转js，es6装es5，scss转css,最终在build目录输出
 最后执行webpack 2.js out.js命令，将