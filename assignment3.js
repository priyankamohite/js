function Base(){


}

Base.prototype.set = function(param,val){
    this.storage.setItem(param,val);
};

Base.prototype.get = function(param){
    return this.storage.getItem(param);
};

function SessionStorageFunction(){
    this.storage = sessionStorage;
}

SessionStorageFunction.prototype = Object.create(Base.prototype);
SessionStorageFunction.prototype.constructor = seesionStorageFunction;

var sessionObj = new SessionStorageFunction();

sessionObj.set('pm',3100);
console.log(sessionObj.get('pm'));
