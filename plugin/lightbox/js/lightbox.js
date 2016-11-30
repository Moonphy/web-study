/**
 * Created by Administrator on 2016-7-6.
 */
;(function ($) {
    var LightBox = function () {
        var self = this;

        //创建遮罩和弹窗
        this.popupMask = $('<div id="G-lightbox-mask">');
        this.popupWin = $('<div id="G-lightbox-popup">');

        this.bodyNode = $(document.body);

        // 渲染剩余DOM,并且插入到body
        this.renderDOM();

        this.picViewArea = this.popupWin.find('.lightbox-pic-view');
        this.popupPic = this.popupWin.find('.lightbox-image');
        this.picCaption = this.popupWin.find('.lightbox-pic-caption');
        this.nextBtn = this.popupWin.find('.lightbox-next-btn');
        this.prevBtn = this.popupWin.find('.lightbox-prev-btn');
        this.captionTest = this.popupWin.find('.lightbox-pic-desc');
        this.currentIndex = this.popupWin.find('.lightbox-of-index');
        this.closeBtn = this.popupWin.find('.lightbox-close-btn');



        // 准备开发事件委托，获取组数据
        this.groupName = null;
        this.groupData = [];
        this.bodyNode.delegate('.js-lightbox,*[data-role=lightbox]','click',  function (e) {
            e.stopPropagation();

            var currentGroupName = $(this).attr('data-group');
            if(currentGroupName != self.groupName){
                self.groupName = currentGroupName;
                //alert(currentGroupName);
                // 根据当前组名获取同一组数据
                self.getGroup();
            }

            // 初始化弹出
            self.initPopup($(this))

        });
        this.popupMask.click(function () {
            $(this).fadeOut();
            self.popupWin.fadeOut();
        });
        this.closeBtn.on('click', function () {
            self.popupMask.fadeOut();
            self.popupWin.fadeOut();
        });
        
        //左右切换按钮事件
        this.nextBtn.click(function () {
            self.goto("next")
        });
        this.prevBtn.click(function () {
            self.goto("prev")
        })
    };

    LightBox.prototype = {
        goto: function (dir) {
            if(dir === 'next'){
                this.index++;
                if(this.index >= this.groupData.length - 1){
                    this.nextBtn.addClass('disable');
                }
                if(this.index != 0){
                    this.prevBtn.removeClass('disable');
                }

                var src = this.groupData[this.index].src;
                this.loadPicSize(src);

            }else if(dir === 'prev'){
                this.index--;
                if(this.index <= 0){
                    this.prevBtn.addClass('disable');
                }
                if(this.index != this.groupData.length - 1){
                    this.nextBtn.removeClass('disable');
                }

                var src2 = this.groupData[this.index].src;
                this.loadPicSize(src2);
            }
        },
        preLoadImg: function (src, callback) {
            var img = new Image();
            if(!!window.ActiveXObject){
                img.onreadystatechange = function () {
                    if(this.readyState == 'complete'){
                        callback();
                    }
                }
            }else{
                img.onload = function () {
                    callback();
                }
            }
            img.src = src;
        },
        changePic: function () {
            var self = this;
            //console.log(this.index);
            this.captionTest.text(this.groupData[this.index].caption);
            this.currentIndex.text("当前索引：" + (this.index + 1) + "of" + (this.groupData.length));
        },
        loadPicSize: function (sourceSrc) {
            var self = this;

            // 监控图片加载完成
            this.preLoadImg(sourceSrc, function () {
                //alert('加载完成！')
                self.popupPic.attr('src',sourceSrc);

                self.changePic();

            });


        },
        getIndexOf: function (currentId) {
            var index = 0;
            $(this.groupData).each(function (i) {
                index = i;
                if(this.id === currentId){
                    return false;
                }
            });
            //alert(index);
            return index;

        },
        showMaskAndPopup: function (sourceSrc,currentId) {
            var self = this;

            this.popupMask.fadeIn();
            this.popupWin.fadeIn();

            //加载图片
            self.loadPicSize(sourceSrc);

            // 根据当前点击的元素ID获取在当前组别里面的索引
            this.index = this.getIndexOf(currentId);
            var groupDataLength = this.groupData.length;
            if(groupDataLength>1){
                if(this.index === 0){
                    this.prevBtn.addClass('disable');
                    this.nextBtn.removeClass('disable');
                }else if(this.index === groupDataLength-1){
                    this.nextBtn.addClass('disable');
                    this.prevBtn.removeClass('disable');
                }else{
                    this.prevBtn.removeClass('disable');
                    this.nextBtn.removeClass('disable');
                }
            }
        },
        initPopup: function (currentObj) {
            var self = this,
                sourceSrc = currentObj.attr("data-source"),
                currentId = currentObj.attr("data-id");

            this.showMaskAndPopup(sourceSrc,currentId);
        },
        getGroup: function () {
            var self = this;

            self.groupData = [];

            // 根据当前组别名称获取所有相同组别对象
            var groupList = this.bodyNode.find("*[data-group="+this.groupName+"]");
            //alert(groupList.size());
            groupList.each(function () {
                self.groupData.push({
                    src: $(this).attr('data-source'),
                    id: $(this).attr('data-id'),
                    caption: $(this).attr('data-caption')
                });
                console.log(self.groupData)
            })
        },
        renderDOM: function(){

            // 需要渲染的DOM
            var strDom = '<div class="lightbox-pic-view">' +
                            '<a href="javascript:;" class="lightbox-btn lightbox-prev-btn">&lt;</a>' +
                            '<img src="" alt="" class="lightbox-image">' +
                            '<a href="javascript:;" class="lightbox-btn lightbox-next-btn">&gt;</a>' +
                        '</div>' +
                        '<div class="lightbox-pic-caption">' +
                            '<div class="lightbox-caption-area">' +
                                '<p class="lightbox-pic-desc"></p>' +
                                '<span class="lightbox-of-index">当前索引：</span>' +
                            '</div>' +
                            '<a href="javascript:;" class="lightbox-close-btn">&Chi;</a>' +
                        '</div>';

            // 插入到this.popupWin
            this.popupWin.html(strDom);

            // 把遮罩和弹窗插入到body
            this.bodyNode.append(this.popupMask,this.popupWin);
        }
    };

    window['LightBox'] = LightBox;
})(jQuery);