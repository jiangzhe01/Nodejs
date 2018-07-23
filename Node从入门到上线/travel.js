const fs = require('fs')
const path = require('path')

/**
 * 目录遍历 - 同步版
 * @param {string} dir
 * @param {func} callback
 */
function travel(__dirname, callback) {
    fs.readdirSync(__dirname).forEach(function (file) {
        var pathname = path.resolve(__dirname, file)

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, function(){
                console.log(pathname)
            });
        } else {
                console.log(pathname);

        }
    })
}

function travel(__dirname,callback,finish){
    fs.readdir(dir,function(err,files){

    })
}

travel(__dirname,function(pathname){
    console.log(pathname)
});
