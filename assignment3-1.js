/**
 * implement inheritance
 * use sessionStorage and localStorage as derived class
 * @constructor
 */


//base class
function Base(){

}

Base.prototype.set = function(param,val){
    this.storage.setItem(param,val);
};

Base.prototype.get = function(param){
    return this.storage.getItem(param);
};

Base.prototype.remove = function(param){
    return this.storage.removeItem(param);
};

Base.prototype.removeAll = function(){
    return this.storage.clear();
};

Base.prototype.count = function(){
    return this.storage.length;
};


// derived from base
function SessionStorageFunction(){
    this.storage = sessionStorage;
}

SessionStorageFunction.prototype = Object.create(Base.prototype);
SessionStorageFunction.prototype.constructor = SessionStorageFunction;

var sessionObj = new SessionStorageFunction();

sessionObj.set('pm',3100);
console.log(sessionObj.get('pm')); //3100

sessionObj.set('prm',3200);
sessionObj.set('phs',3300);

console.log(sessionObj.get('prm')); //3200
console.log(sessionObj.get('phs')); //3300

sessionObj.remove('pm');
console.log(sessionObj.get('pm')); //null

console.log(sessionObj.count()); //2

sessionObj.removeAll();
console.log(sessionObj.get('prm')); //null
console.log(sessionObj.get('phs')); //null


//derived class from base
function LocalStorageFunction(){
    this.storage = localStorage;
}

LocalStorageFunction.prototype = Object.create(Base.prototype);
LocalStorageFunction.prototype.constructor = LocalStorageFunction;

var localObj = new LocalStorageFunction();

localStorage.setItem('home','Tara');
console.log(localStorage.getItem('home')); //"Tara"

localObj.remove('home');
console.log(localObj.get('home')); //null

localObj.set('home1','Savali');
localObj.set('home2','Yashoda');

console.log(localObj.get('home1')); //"Savali"
console.log(localObj.get('home2')); //"Yashoda"

console.log(localObj.count()); //2

localObj.removeAll();
console.log(localObj.get('home1')); //null
console.log(localObj.get('home2')); //null
