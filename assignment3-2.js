/**
 *
 * @type {{set: Function, get: Function, count: Function, remove: Function, removeAll: Function}}
 */


var base = {
    set: function (param, val) {
        this.store.setItem(param, val);
    },
    get: function (param) {
        return this.store.getItem(param);
    },
    count: function () {
        return this.store.length;
    },
    remove: function (param) {
        this.store.removeItem(param);
    },
    removeAll: function () {
        this.store.clear();
    }
};


var sessionStore = Object.create(base);
sessionStore.store = sessionStorage;


sessionStore.set('pleasure', 4208);
console.log(sessionStore.get('pleasure')); //4208

sessionStore.set('maruti', 3508);
sessionStore.set('swift', 1579);

console.log(sessionStore.get('maruti')); //3508
console.log(sessionStore.get('swift')); //1579

console.log(sessionStore.count()); //4

sessionStore.remove('pleasure');
console.log(sessionStore.get('pleasure')); //null

sessionStore.removeAll();
sessionStore.count(); //0


var localStore = Object.create(base);
localStore.store = localStorage;


localStore.set('php', 1111);
console.log(localStore.get('php')); //1111

localStore.set('js', 2222);
localStore.set('ruby', 3333);

console.log(localStore.get('ruby')); //3333
console.log(localStore.get('js')); //2222

console.log(localStore.count()); //3

localStore.remove('php');
console.log(localStore.get('php')); //null

localStore.removeAll();
localStore.count(); //0






