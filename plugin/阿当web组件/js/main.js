/**
 * Created by Administrator on 2016-12-7.
 */

require.config({
    paths: {
        jquery: 'jquery.min'
    }
});

require(['jquery', 'window'], function ($, w) {
    $('#a').click(function () {
        new w.Window().alert("welcome", function () {
            $('body').css('background','#ff6666')
        })
    })
});