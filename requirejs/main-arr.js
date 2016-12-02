requirejs.config({
    baseUrl: "js/",
    paths: {
        jquery: 'jquery.min'
    }
});

requirejs(['jquery','arr'], function ($,arr) {

    //$('body').css('background','red');
    arr.step();
    arr.row();
});