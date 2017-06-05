/**
 * implement inheritance
 */


//simple class implementation
function baseClass() {

    this.setItem = function setItem(param, value) {
        return sessionStorage.setItem(param, value);
    }

    this.getItem = function getItem(param) {
        return sessionStorage.getItem(param);
    }

    this.removeItem = function removeItem(param) {
        return sessionStorage.removeItem(param);
    }

    this.removeAll = function removeAll() {
        return sessionStorage.clear;
    }

}

var obj = new baseClass();

//set value
obj.setItem('variable', 1234);

//get value
console.log('set value of variable :' + obj.getItem('variable'));

//remove value of variable
obj.removeItem('variable');
console.log('after remove :' + obj.getItem('variable'));

//set multiple variable
obj.setItem('a1', 10);
obj.setItem('a2', 20);

//get values of all
console.log('vaiable1 :' + obj.getItem('a1'));
console.log('vaiable2 :' + obj.getItem('a2'));

//remove all
obj.removeAll();

//get values of all
console.log('vaiable1 :' + obj.getItem('a1'));
console.log('vaiable2 :' + obj.getItem('a2'));


/**
 *
 * @type {{setItem: Function, getItem: Function, removeItem: Function, clear: Function}}
 */
var baseObject = {

    setItem: function (param, value) {
        return sessionStorage.setItem(param, value);
    },

    getItem: function (param) {
        return sessionStorage.getItem(param);
    },

    removeItem: function (param) {
        return sessionStorage.removeItem(param);
    },

    clear: function () {
        return sessionStorage.clear()
    }

};

baseObject.setItem('priya', 1313);
console.log(baseObject.getItem('priya')); //1313

var derivedObject = Object.create(baseObject);

derivedObject.setItem('me', 66);
console.log(derivedObject.getItem('me')); // 66

derivedObject.removeItem('me');
console.log(derivedObject.getItem('me')); // null

baseObject.setItem('p', 1);
baseObject.setItem('r', 2);
baseObject.setItem('m', 3);

console.log(derivedObject.getItem('p')); //1
console.log(derivedObject.getItem('r')); //2
console.log(derivedObject.getItem('m')); //3

baseObject.clear();

console.log(derivedObject.getItem('p')); // null
console.log(derivedObject.getItem('r')); // null
console.log(derivedObject.getItem('m')); // null