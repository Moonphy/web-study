/**
 * Created by Administrator on 2016-7-8.
 * @width: 幻灯片的宽度
 * @height: 幻灯片的高度
 * @posterWidth: 幻灯片第一帧的宽度
 * @posterHeight: 幻灯片第一帧的高度
 * @scale: 图片伸缩比例
 * @speed: 图片轮换速度
 * @verticalAlign: 图片对齐方式（默认中间对齐‘middle’）
 * 单个幻灯片时：var carousel = new Carousel($('.poster-main').eq(0))
 * 多个幻灯片时: Carousel.init($('.poster-main'))
 */
;(function ($) {
    var Carousel = function (poster) {
        var self = this;
        //保存对象
        this.poster = poster;
        this.posterItemMain = poster.find('.poster-list');
        this.nextBtn = poster.find('.poster-next-btn');
        this.prevBtn = poster.find('.poster-prev-btn');
        this.posterItems = poster.find('.poster-item');

        if(this.posterItems.size()%2 == 0){
            this.posterItemMain.append(this.posterItems.eq(0).clone());
            this.posterItems = this.posterItemMain.children();
        }

        this.posterFirstItem = this.posterItems.first();
        this.posterLastItem = this.posterItems.last();
        this.rotateFlag = true;

        // 默认配置参数
        this.setting = {
            "width": 1000,
            "height": 270,
            "posterWidth": 640,
            "posterHeight": 270,
            "scale": 0.9,
            "speed": 500,
            "autoPlay": false,
            "delay": 5000,
            "verticalAlign": "middle"
        };
        $.extend(this.setting,this.getSetting());

        this.setSettingValues();
        this.setPosterPos();

        this.nextBtn.click(function () {
            if(self.rotateFlag){
                self.rotateFlag = false;
                self.carouseRotate('left');
            }
        });
        this.prevBtn.click(function () {
            if(self.rotateFlag){
                self.rotateFlag = false;
                self.carouseRotate('right');
            }
        });
        // 自动播放
        if(this.setting.autoPlay){
            this.autoPlay();
            this.poster.hover(function () {
                window.clearInterval(self.timer)
            }, function () {
                self.autoPlay()
            });
        }
    };
    Carousel.prototype = {
        autoPlay: function () {
            var self = this;
            this.timer = window.setInterval(function () {
                //self.carouseRotate('right');
                self.nextBtn.click()
            },this.setting.delay);
        },
        // 图片轮换
        carouseRotate: function (dir) {
            var _this_ = this;
            var zIndexArr = [];

            if(dir === 'left'){
                this.posterItems.each(function () {
                    var self = $(this),
                        prev = self.prev().get(0) ? self.prev() : _this_.posterLastItem;

                    var width = prev.width(),
                        height = prev.height(),
                        zIndex = prev.css("zIndex"),
                        opacity = prev.css("opacity"),
                        left = prev.css("left"),
                        top = prev.css("top");

                    zIndexArr.push(zIndex);

                    self.animate({
                        width: width,
                        height: height,
                        left: left,
                        top: top,
                        opacity: opacity
                    }, _this_.setting.speed, function () {
                        _this_.rotateFlag = true;
                    })
                });
                this.posterItems.each(function (i) {
                    $(this).css('zIndex',zIndexArr[i])
                })
            }else if(dir === 'right'){
                this.posterItems.each(function () {
                    var self = $(this),
                        next = self.next().get(0) ? self.next() : _this_.posterFirstItem;

                    var width = next.width(),
                        height = next.height(),
                        zIndex = next.css("zIndex"),
                        opacity = next.css("opacity"),
                        left = next.css("left"),
                        top = next.css("top");

                    zIndexArr.push(zIndex);
                    self.animate({
                        width: width,
                        height: height,
                        left: left,
                        top: top,
                        opacity: opacity
                    }, _this_.setting.speed, function () {
                        _this_.rotateFlag = true;
                    })
                });
                this.posterItems.each(function (i) {
                    $(this).css('zIndex',zIndexArr[i])
                })
            }
        },
        // 设置剩余图片的位置关系
        setPosterPos: function () {
            var self = this;
            var sliceItems = this.posterItems.slice(1),
                sliceSize = sliceItems.size()/ 2,
                rightSlice = sliceItems.slice(0,sliceSize),
                leftSlice = sliceItems.slice(sliceSize),
                level = Math.floor(this.posterItems.size()/2);
            //console.log(leftSlice)
            var rw = this.setting.posterWidth,
                rh = this.setting.posterHeight,
                gap = ((this.setting.width - this.setting.posterWidth)/2)/level;

            var scale = this.setting.scale;


            var firstLeft = (this.setting.width - this.setting.posterWidth)/ 2,
                fixOffsetLeft = firstLeft + rw;

            // 设置右边图片位置关系和宽高
            rightSlice.each(function (i) {
                level--;
                rw = rw * scale;
                rh = rh * scale;

                $(this).css({
                    zIndex: level,
                    width: rw,
                    height: rh,
                    opacity: 1/(++i),
                    left: fixOffsetLeft + i*gap - rw,
                    top: self.setVerticalAlign(rh)
                });
            });

            //设置左边的图片位置关系和宽高
            var lw = rightSlice.last().width(),
                lh = rightSlice.last().height(),
                oloop = Math.floor(this.posterItems.size()/2);

            leftSlice.each(function (i) {
                $(this).css({
                    zIndex: i,
                    width: lw,
                    height: lh,
                    opacity: 1/oloop,
                    left: i*gap,
                    top: self.setVerticalAlign(lh)
                });
                oloop--;
                lw = lw / scale;
                lh = lh / scale;
            })

        },
        //设置垂直对齐方式
        setVerticalAlign: function(height){
            var mH = this.setting.height,
                verticalAlign = this.setting.verticalAlign,
                top = 0;

            if(verticalAlign === 'top'){
                top = 0;
            }else if(verticalAlign === 'bottom'){
                top = mH - height;
            }else{
                top = (mH - height)/2;
            }
            return top;
        },
        setSettingValues: function () {
            this.poster.css({
                width: this.setting.width,
                height: this.setting.height

            });
            this.posterItemMain.css({
                width: this.setting.width,
                height: this.setting.height
            });


            // 设置切换按钮的宽度
            var btnWidth = (this.setting.width - this.setting.posterWidth)/2 ;

            this.prevBtn.css({
                width:btnWidth,
                zIndex: Math.ceil(this.posterItems.size()/2) //向上舍取大值
            });
            this.nextBtn.css({
                width:btnWidth,
                zIndex: Math.ceil(this.posterItems.size()/2)
            });

            // 设置第一帧图片的宽高左偏
            this.posterFirstItem.css({
                width: this.setting.posterWidth,
                height: this.setting.posterHeight,
                left: btnWidth,
                zIndex: Math.floor(this.posterItems.size()/2) //向下舍取小值
            });


        },
        getSetting: function () {
            var setting = this.poster.attr('data-setting');

            if(setting && setting!=''){
                return $.parseJSON(setting);
            }else{
                return {}
            }
        }
    };
    Carousel.init = function (posters) {
        var _this_ = this;

        posters.each(function () {
            new _this_($(this));
        })
    };
    window['Carousel'] = Carousel;
})(jQuery);