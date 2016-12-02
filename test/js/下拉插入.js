/**
 * Created by Administrator on 2016-7-26.
 */
$(function () {
    $(window).scroll(function () {
        var scrollTop = $(this).scrollTop(),
            windowHeight = $(this).height(),
            scrollHeight = $(document).height();

        var dom = '<div class="list-item">' +
            '<div class="img-wrap">' +
            '<img src="../images/activity-img-1.jpg" alt="">' +
            '<div class="img-info">' +
            '<i class="icon-time"></i><span>报名截止</span><span>2016-7-18 20:30</span>' +
            '</div>' +
            '</div>' +
            '<div class="item-title">大学生展翅计划新鲜出炉啦！美瞳为你量身定做！' +
            '<span class="ui-label label-green">报名中</span>' +
            '</div>' +
            '<div class="event-metas">' +
            '<span class="time">活动时间：08-22 12:30</span><span class="count">已报名：18</span>' +
            '</div>' +
            '</div>';

        if(scrollTop + windowHeight == scrollHeight){
            $('.loading').removeClass('hidden');
            for(var i = 0;i<10;i++){
                $('.activity-list').append(dom);
            }
            $('.loading').addClass('hidden');
        }
    });
});