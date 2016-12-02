define(['jquery'], function ($) {
    return {
        step: function () {
            for (var i = 1; i <= 9; i++) {
                for (var j = 1; j <= i; j++) {
                    $('.step').append(i + "x" + j + "=" + i * j + "  ");
                }
                $('.step').append("<br/>")
            }
        },

        row: function () {
            var arr1 = ['a', 'b', 'c'];
            var arr2 = [1, 2, 3];
            for (var i = 0; i < arr1.length; i++) {
                for (var j = 0; j < arr2.length; j++) {
                    var str = '';
                    str += arr1[i] + arr2[j] + ',';
                    $('.row').append(str);
                }
            }
        }
    }
});

/*
 eg1:
 p1:(a,b,c)
 p2:(1,2,3)
 =>
 (a1,a2,a3,b1,b2,b3,c1,c2,c3)

 eg2:
 p1:(a,b)
 p2:(1,2)
 p3:(%,*)

 =>
 (a1%,a1*,a2%,a2*,......)

 */

/*
 1x1=1
 1x2=2 2x2=4






 1x9=9 2x9=18                         9x9=81
 */