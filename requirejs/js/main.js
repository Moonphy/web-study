requirejs.config({
    baseUrl: './js/',
    paths:{
        'jquery': 'jquery.min'
    }
});

requirejs(['jquery','messenger'], function ($,messenger) {
    var id = 55;
    messenger.showMessage(id);
});