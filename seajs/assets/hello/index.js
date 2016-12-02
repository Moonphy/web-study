define(function (require,exports,module) {

    var $ = require('$');
    var random = require('util').random;
    var handleText = require('handle-text');

    function hello(){
        this.render();
        this.bindAction();
        //seajs.log('new hello() called.')
    }

    hello.prototype.render = function () {
        this.el = $('<div style="position:fixed;'
            + 'left:' + random(0,70) + '%;'
            + 'top:' + random(10,80)+ '%;">'
            + handleText('Hello SPM !')
            + '</div>').appendTo('body')
    };

    hello.prototype.bindAction = function(){
        var el = this.el;
        setTimeout(function(){ el.fadeOut() }, random(500,5000))
    };


    module.exports = hello;
});