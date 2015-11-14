/**
 * Created by John on 2015/11/14.
 */
var utils = {
    getOffset: function(ele) {
        var l, t;
        var eleParent = ele.offsetParent;
        var userAgent = window.navigator.userAgent.indexOf('MISE 8') > -1;
        if(userAgent) {
            l = ele.offsetLeft + ele.clientLeft;
            t = ele.offsetTop + ele.clientTop;
        } else {
            l = ele.offsetLeft;
            t = ele.offsetTop;
        }
        while (eleParent) {
            if(userAgent) {
                l += eleParent.offsetLeft + eleParent.clientLeft;
                t += eleParent.offsetTop + eleParent.clientTop;
            } else {
                l += eleParent.offsetLeft;
                t += eleParent.offsetTop;
            }
            eleParent = eleParent.offsetParent;
        }
        return {l: l, t: t};
    }
};