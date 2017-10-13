window.w5sys = {
  config: {
    //请求头
    API_PREFIX: "http://116.62.171.144/index.php/home/index/",
  },
  // api: {
    // 1.登录
    baseAjax: function(method,obj, callback){
      $.post(w5sys.config.API_PREFIX + method, obj, callback);
    // }
  }
};