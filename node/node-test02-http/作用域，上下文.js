/**
 * Created by Administrator on 2015-12-3.
 */
var globalVariable = '';

function globalFn(){

}

var pet = {
    words: '...',
    speak: function(say){
        console.log(say + '' + this.words)
    }
};

var dog = {
    words: 'wang'
};

pet.speak.call(dog, 'Speak');
// Speak wang




// ==========================================
//      call()与apply()方法主要是为了实现继承
// ==========================================

function Pet(words){
    this.words = words;
    this.speak = function () {
        console.log(this.words);
    }
}

function Dog(words){
    Pet.call(this, words);
    //Pet.apply(this, arguments)
}

var dog2 = new Dog('wang');
dog2.speak();