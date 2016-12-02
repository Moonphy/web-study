/**
 * Created by Administrator on 2016-7-26.
 */
$(function() {
    var page = 1;
    var listWrap = $('.activity-list');
    var innerHeight = window.innerHeight;
    var timer2 = null;
    $.ajax({
        url: '/huodong/mobileactivity_lectures/list?page=1',
        type: 'GET',
        dataType: 'json',
        timeout: '1000',
        cache: 'false',
        success: function (data) {
            if (data.error_code === 0) {

                for (var i = 0, t; t = data.list[i++];) {
                    listWrap.append();
                }
            }
            var ajax_getting = false;
            $(window).scroll(function() {
                clearTimeout(timer2);
                timer2 = setTimeout(function() {
                    var scrollTop = $(document.body).scrollTop();
                    var scrollHeight = $('body').height();
                    var windowHeight = innerHeight;
                    var scrollWhole = Math.max(scrollHeight - scrollTop - windowHeight);
                    if (scrollWhole < 100) {
                        if (ajax_getting) {
                            return false;
                        } else {
                            ajax_getting = true;
                        }
                        $('.loading').removeClass('hidden');
                        $('html,body').scrollTop($(window).height() + $(document).height());
                        page++;
                        $.ajax({
                            url: '/lightapp/marketing/verify/apply/list?page=' + page,
                            type: 'GET',
                            dataType: 'json',
                            success: function (data) {
                                if (data.error_code === 0) {
                                    for (var i = 0, t; t = data.list[i++];) {
                                        listWrap.append();
                                    }

                                    $(".load").remove();
                                } else {
                                    $('.loading').addClass('hidden');
                                    listWrap.append('<div class="no-data">没有更多数据。</div>');
                                    $(window).unbind('scroll');
                                };
                                ajax_getting = false;
                            }
                        });
                    };
                    $('.loading').addClass('hidden');
                }, 200);
            });
            if (data.error_code == 156006) {
                $('.coupon').html('<div class="error"><h2>出错啦！</h2><p>原因：未登录</p></div>')
            };
        },
        error: function (data) {

        }
    });
    /*$(window).bind("orientationchange", function() {
        $('.sliders').css('left',$(window).width() / 2 +'px');
    })*/
});