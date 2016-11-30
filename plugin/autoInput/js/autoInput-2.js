/**
 * Created by Administrator on 2016-3-23.
 */


//测试用的数据
var test_list = ["中山大学", "华南理工大学", "济南大学", "暨南大学", "华南师范大学", "广东外语外贸大学", "广东财经大学", "华南农业大学", "广东工业大学", "广东医科大学", "广东药科大学", "广州大学", "广东金融学院", "深圳大学", "中山职业技术学院"];

var old_value = "";
var highlightindex = -1;

//自动完成
function AutoComplete(auto, search, mylist) {
    if ($("#" + search).val() != old_value) {
        var autoNode = $("#" + auto);
        var carlist = new Array();
        var n = 0;
        old_value = $("#" + search).val();
        for (i in mylist) {
            if (mylist[i].indexOf(old_value) >= 0) {
                carlist[n++] = mylist[i];
            }
        }
        if (carlist.length == 0) {
            autoNode.hide();
            return;
        }
        autoNode.empty();
        for (i in carlist) {
            var wordNode = carlist[i];
            var newDivNode = $("<div>").attr("id", i);
            newDivNode.attr("style", "font:14px/25px arial;height:25px;padding:0 8px;cursor: pointer;");
            newDivNode.html(wordNode).appendTo(autoNode);

            newDivNode.mouseover(function () {
                if (highlightindex != -1) {
                    autoNode.children("div").eq(highlightindex).css("background-color", "white");
                }

                highlightindex = $(this).attr("id");
                $(this).css("background-color", "#ebebeb");
            });
            /*newDivNode.mouseout(function () {
                $(this).css("background-color", "white");
            });*/

            //鼠标点击文字上屏
            newDivNode.click(function () {

                var comText = autoNode.hide().children("div").eq(highlightindex).text();
                highlightindex = -1;

                $("#" + search).val(comText);
            })
            if (carlist.length > 0) {
                autoNode.show();
            } else {
                autoNode.hide();

                highlightindex = -1;
            }
        }
    }

    document.onclick = function (e) {
        var e = e ? e : window.event;
        var tar = e.srcElement || e.target;
        if (tar.id != search) {
            if ($("#" + auto).is(":visible")) {
                $("#" + auto).css("display", "none")
            }
        }
    }
}