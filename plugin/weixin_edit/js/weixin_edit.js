function paragraph_move(source,direction){
    var target = $("p.target");
    var paragraph = source.parent().parent();
    if(target!=paragraph){
        if(target.length==1){
            if(direction=='up'){
                paragraph.insertBefore(target);
            }else{
                paragraph.insertAfter(target);
            }
        }else{
            $("#page-content").append(paragraph);
        }
    }
    return false;
}

function insert_image(source,direction) {
    var target = $("#page-content p.target");
    var li = source.parent().parent();
    var image = li.find('img');
    var content = "<p class='img'><img src='".concat(image.attr("src"),"'/></p>");
    if(target.length==1){
        if(direction='up'){
            $(content).insertBefore(target);
        }else{
            $(content).insertAfter(target);
        }
    }else{
        $("#page-content").append(content);
    }
    li.removeClass("move");
    var tools = li.find(".tools");
    tools.hide();
    return false;
}

function appendClass(clsName) {
    var target = $("#page-content p.target");
    if (target.length == 1) {
        target.toggleClass(clsName);
    }
}

$(function(){

    $("#page-content p").live('mouseover',function(){
        var p = $(this);
        var tools = p.find(".tools");
        if(tools.length==0){
            tools = p.append("<div class='tools'><div class='move-up' /><div class='delete'/><div class='move-down'/></div> ");
            tools = p.find(".tools");
        }
        if(p.hasClass("target")){
            tools.find(".move-up").css("visibility","hidden");
            tools.find(".move-down").css("visibility","hidden");
        }else{
            tools.find(".move-up").css("visibility","visible");
            tools.find(".move-down").css("visibility","visible");
        }
        tools.show();
    });

    $("#page-content p").live('mouseout',function(){
        var tools = $(this).find(".tools");
        tools.hide();
    });

    $("#page-content .delete").live('click',function(){
        var box = $(this).parent().parent();
        var image = box.find('img');
        var image_editor =  $("#edit-panel img[src='".concat(image.attr("src"),"']"));
        var box_editor = image_editor.parent().parent();
        box_editor.addClass("move");
        box.remove();
    });

    $("#page-content .move-up").live('click',function(){
        return paragraph_move($(this),'up');
    });

    $("#page-content .move-down").live('click',function(){
        return paragraph_move($(this),'down');
    });

    $("#page-content p").live('dblclick',function(){
        var box = $(this);
        var content = box.text();
        content = content.replace(/[ \n]/g,"");
        if(content){
            var editor = box.find(".editor");
            if(editor.length==0){
                box.append("<textarea class='editor'></textarea>");
            }
            var h = box.height();
            var editor = box.find(".editor");

            editor.css('height',h-20<17?18:(h-20));
            editor.val(content);
            editor.show();
            editor.focus();
        }
    });

    $("h2").dblclick(function(){
        var h2 = $(this);
        var editor = h2.find("input");
        if(editor.length==0){
            h2.append("<input type='text' value='".concat(h2.text(),"' />"));
        }
        editor = h2.find("input");
        editor.show();
        editor.focus();
    });

    $("h2 input").live('blur',function(){
        var title = $.trim($(this).val());
        $("h2").text(title);
        $("title").text(title);
        $(this).hide();
    });

    $("#page-content p").live('click',function(){
        var p = $(this);
        var has = p.hasClass("target");
        $("#page-content p").removeClass("target");
        if(!has){
            p.addClass("target");
            p.find(".move-up").css("visibility","hidden");
            p.find(".move-down").css("visibility","hidden");
        }else{
            p.find(".move-up").css("visibility","visible");
            p.find(".move-down").css("visibility","visible");
        }
    });

    $(".editor").live('blur',function(){
        var editor = $(this);
        var content = $.trim(editor.val());
        if(content){
            editor.parent().text(content);
            editor.hide();
        }else{
            editor.parent().remove();
        }
    });

    $("#edit-panel li.move").live('mouseover',function(){
        var tools = $(this).find(".tools");
        if(tools.length==0){
            tools = $(this).append("<div class='tools'><div class='move-up'/><div class='move-down'/></div>");
        }
        tools.show();
    });

    $("#edit-panel li.move").live('mouseout',function(){
        var tools = $(this).find(".tools");
        tools.hide();
    });

    $("#edit-panel .move-up").live('click',function(){
        return insert_image($(this),'up');
    });

    $("#edit-panel .move-down").live('click',function(){
        return insert_image($(this),'down');
    });

    $("#btn-add").click(function(){
        var content = $("<p><textarea class='editor'></textarea></p>");
        $("#page-content").append(content);
        var editor = content.find(".editor");
        editor.css('height',18);
        editor.show();
        editor.focus();
    });

    $("#btn-clear").click(function(){
        $("#page-content").empty();
        $("#edit-panel li").addClass("move");
    });

    $("#btn-first-letter").click(function(){
        appendClass("fb");
    });

    $("#btn-align-center").click(function(){
        appendClass("tc");
    });

    $("#btn-first-indent").click(function(){
        appendClass("ti");
    });

    $("#btn-save").click(function(){
        var title = $("h2").text();
        var pList = $("#page-content p");
        var contents = [];
        pList.each(function(index,item){
            var content = "";
            var p = $(item);

            if(p.hasClass("img")){
                content = p.find("img").attr("src");
            }else{
                if(p.hasClass("fb")){
                    content = "f";
                }
                if(p.hasClass("tc")){
                    content += "c";
                }
                if(p.hasClass("ti")){
                    content += "i";
                }
                content+= p.text().replace(/[ \n]/g,"");
            }
            contents.push(content);
        });
        $.post("/ajax/weixin.jsp",{id:id,title:title,content:contents},function(data){

        });
    });
});