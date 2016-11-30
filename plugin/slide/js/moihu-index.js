var container = document.getElementById('ck-slide'),
    list = document.getElementById('ck-slide-wrapper'),
    buttons = document.getElementById('dot-wrap').getElementsByTagName('li'),
    prev = document.getElementById('ck-prev'),
    next = document.getElementById('ck-next');
var liWidth = 700;
var index = 1;
var len = 4;
var animated = false;
var interval = 3000;
var timer;

function animate(offset){
    var left = parseInt(list.style.left) + offset;

    list.style.left = left + 'px';
    if(left >= liWidth){
        list.style.left = -liWidth * (len-1) + 'px';
    }
    if(left <= (-liWidth * (len))) {
        list.style.left = '0px';
    }
    animated = false;
}
function showButton(){
    for (var i = 0; i < buttons.length ; i++) {
        if( buttons[i].className == 'current'){
            buttons[i].className = '';
            break;
        }
    }
    buttons[index - 1].className = 'current';
}
function autoplay(){
    timer = setTimeout(function () {
        next.onclick();
        autoplay();
    }, interval);
}
function stop(){
    clearTimeout(timer);
}
prev.onclick = function () {
    if (animated) {
        return;
    }
    if (index == 1) {
        index = len;
    }
    else {
        index -= 1;
    }
    animate(liWidth);
    showButton();
};
next.onclick = function () {
    if (animated) {
        return;
    }
    if (index == len) {
        index = 1;
    }
    else {
        index += 1;
    }
    animate(-liWidth);
    showButton();
};
for(var i = 0; i < buttons.length; i++){
    buttons[i].onclick = function () {
        if(animated){
            return;
        }
        if(this.className == 'on'){
            return;
        }
        var myIndex = parseInt(this.getAttribute('index'));
        var offset = -liWidth * (myIndex - index);
        animate(offset);
        index = myIndex;
        showButton();
    }
}
autoplay();
container.onmouseover = stop;
container.onmouseout = autoplay;
