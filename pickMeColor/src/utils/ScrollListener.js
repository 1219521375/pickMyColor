
/**
* 获取滚动条位置
*/
function getScrollTop() {
    var scrollPos;
    if (window.pageYOffset) {
        scrollPos = window.pageYOffset;
    }
    else if (document.compatMode && document.compatMode != 'BackCompat') {
        scrollPos = document.documentElement.scrollTop;
    }
    else if (document.body) {
        scrollPos = document.body.scrollTop;
    }
    return scrollPos;
}

//添加监听
function addEvent(obj, type, fn) {
    if (obj.attachEvent) { //ie
        obj.attachEvent('on' + type, function () {
            fn.call(obj);
        })
    } else {
        obj.addEventListener(type, fn, false);
    }
}
export{
    getScrollTop,addEvent
}
