/**
 * @file setFontSize.js
 * @description 设置全局fontsize
 */

export default function setFontSize() {
    const deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    const fontsize = (deviceWidth / 37.5) + 'px'
    document.getElementsByTagName('html')[0].style.fontSize = fontsize
}