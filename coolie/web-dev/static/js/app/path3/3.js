/**
 * Created by Administrator on 2015/9/30.
 */

define(function (require,exports,module) {
    var $ = require('../../jquery.min.js');
    console.log(module.id);
    console.log($);

    function step() {
        for (var i = 1; i <= 9; i++) {
            for (var j = 1; j <= i; j++) {
                $('.step').append(j + "x" + i + "=" + i * j + "  &nbsp;");
            }
            $('.step').append("<br/>")
        }
    }

    function row() {
        var arr1 = ['a', 'b', 'c'];
        var arr2 = [1, 2, 3];
        for (var i = 0; i < arr1.length; i++) {
            for (var j = 0; j < arr2.length; j++) {
                var str = '';
                str += arr1[i] + arr2[j] + ',&nbsp;';
                $('.row').append(str);
            }
        }
    }
    step();
    row();
});