// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import $ from 'jquery'
import axios from 'axios'
import Distpicker from 'v-distpicker'
import './assets/css/base.css'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/reset.css'
import './assets/css/bbzx.css'

import './mock/index.js';  // 该项目所有请求使用mockjs模拟

// import '../common/js/api'
// 引入MD5模块
// import crypto from 'crypto'

Vue.config.productionTip = false
Vue.use(ElementUI)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})

Vue.prototype.rightwidth = function(w, l) {
    var w = w || 300;
    var l = l || 270;
    var winwidth = $('#app').width(); //$(window).width();
    winwidth = winwidth - w;
    $("#main>.rightwork").css({
        "width": winwidth,
        "left": l
    });
}
Vue.prototype.closetag = function($dom) {
    $dom.click(); //$(".is-active .el-icon-close")
}
Vue.component('v-distpicker', Distpicker);
// window.userid = false;
window.userid = 1000365;
window.userName = false;
Vue.prototype.ckAjax = function(method, obj, callback) {
    $.post("http://116.62.171.144/index.php/home/stock/" + method, obj, callback);
}
Vue.prototype.baseAjax = function(method, obj, callback) {
    $.post("http://116.62.171.144/index.php/home/index/" + method, obj, callback);
}
Vue.prototype.ajax = function(option) {
    !!option.type ? '' : option.type = 'POST';
    !!option.async ? '' : option.async = true;
    !!option.timeout ? '' : option.timeout = 5000;
    $.ajax({
        url: 'http://116.62.171.144/post/index.php',
        type: option.type,
        async: option.async,
        data: {
            datas: option.data.datas,
            method: option.data.method
        },
        timeout: option.timeout,
        success: function(data, textStatus, jqXHR) {
            option.success(data, textStatus, jqXHR)
        }
    })
}
Date.prototype.format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};
window.myEle = {
    OpenTab: function(vm) {
        let that = vm;
        var $this = $(this);
        var txt = $("span", $this).html();

        var tabarr = that.$parent.editableTabs2;
        var indexof = -1;
        for (var i = 0; i < tabarr.length; i++) {
            console.log(tabarr[i].title + "---" + txt);
            if (tabarr[i].title == txt) {
                indexof = tabarr[i].name;
            }
        }
        if (indexof == -1) {
            let newTabName = ++that.$parent.tabIndex + '';
            var cont = $this.attr("href");
            cont = cont.substring(2, cont.length);
            that.$parent.editableTabs2.push({
                title: txt,
                name: newTabName,
                content: cont
            });
            that.$parent.editableTabsValue2 = newTabName;
        } else {
            that.$parent.editableTabsValue2 = indexof;
        }
    }

}
Vue.prototype.openAlert = function(content, title, type = 'error', callBack) {
    this.$alert(content, title, {
        confirmButtonText: '确定',
        type: type,
        callback: action => {
            if (callBack) callBack();
        }
    });
};
//确认弹窗
Vue.prototype.openConfirm = function(content, sureCallback, cancelCallback) {
    this.$confirm(content, '系统提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        if (sureCallback) sureCallback();
    }).catch(() => {
        if (cancelCallback) cancelCallback();
    });
};
//123