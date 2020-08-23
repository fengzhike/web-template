/**
 * @file loadscript.js
 * @description 加载js脚本
 */

export default function loadScirpt(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = function () {
        callback && callback();
    };
}