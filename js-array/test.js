/**
 * Created by Administrator on 2016-12-19.
 */
;(function ($) {
    function Hello(){}

    Hello.prototype = {
        con: function () {
            alert('hehe')
        }
    };
    window.Hello = Hello;
})(jQuery);