function checkJquery(path, callback){
    if(typeof jQuery == 'undefined'){
        var head = document.getElementsByTagName("head")[0];
        var jquery = document.createElement("script");
        jquery.type = "text/javascript";
        jquery.src = path;
        jquery.onload = callback;
        head.appendChild(jquery);
    }
    else{
        callback();
    }
}

function weixin() {
    var title = $.trim($("#activity-name").text());
    var url = window.location.href;
    var contents = [];
    $("#js_content p").each(function(index,item){
        var content = $.trim($(item).text());
        if(content!=''){
            contents.push(content);
        }else{
            var images = $(item).find("img");
            if(images.length==1){
                contents.push(images.attr("src"));
            }
        }
    });

    var jspath = $("#weixinjs").attr("src");
    var domain = jspath.substr(0,jspath.indexOf("/js/"));
    $.post(domain + "/ajax/weixin.jsp",{title:title, content:contents,url:url}, function(data){

    });
}

checkJquery("http://www.moihu.com/js/jquery.1.8.2.js", weixin);