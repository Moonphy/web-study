/**
 * Created by Administrator on 2016-7-11.
 * 输入框自动填充插件
 * @input: 输入框class
 * @data: 匹配的数组
 */
;(function ($) {
    var autoInput = function (input, data) {
        var self = this;

        this.input = input;
        this.dataMain = this.input.next('div');
        this.bodyNode = $(document.body);

        this.oldValue = "";
        this.currentItemIndex = -1;

        input.on('input', function () {
            var input_this = this;
            //console.log(input_this)
            $(this).next('.auto-data').show();
            self.AutoComplete(data);

        });

        this.bodyNode.click(function (e) {
            var e = e ? e : window.event;
            var tar = e.srcElement || e.target;
            if (tar.class != input) {
                self.dataMain.hide();
            }
        })
    };
    autoInput.prototype = {
        AutoComplete: function (data) {
            if(this.input.val() != this.oldValue){
                var appendList = [];
                var n = 0;
                this.oldValue = this.input.val();

                for(var i=0;i<data.length;i++){
                    if(data[i].indexOf(this.oldValue) >= 0){
                        appendList[n++] = data[i];
                        console.log(data[i])
                    }
                }

                this.dataMain.empty();

                for(var j=0;i<appendList.length;j++){
                    var itemWord = appendList[j];
                    var itemDiv = $('<div>').attr({id: j,class: 'item'});
                    itemDiv.html(itemWord).appendTo(this.dataMain);
                }

                this.dataMain.find('.item').click(function () {
                    var currentItem = $(this).text();
                    $(this).parent().prev().val(currentItem);
                }).hover(function () {
                    self.currentItemIndex = $(this).attr("id");
                }, function () {
                    self.currentItemIndex = -1;
                })
            }
        },
        /*renderDOM: function () {
            var itemDom = $('<div>').attr('id',i);
        }*/
    };

    /*autoInput.init = function (inputs, datas) {
        var _this_ = this;

        inputs.each(function (i) {
            new _this_($(this), datas[i]);
        })
    };*/
    window['autoInput'] = autoInput;
})(jQuery);