'use strict';

function User(name, id) {   // функция конструктор
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
};

User.prototype.exit = function() {  
    console.log(`Пользователь ${this.name} ушел`);
};

const dominik = new User ('Dominik', 7);
const christopher = new User ('Christopher', 5);

dominik.exit();  // Пользователь Dominik ушел

christopher.hello(); // Hello Christopher

console.log(dominik);  // User {name: 'Dominik', id: 7, human: true, hello: ƒ} 
console.log(christopher);  //User {name: 'Christopher', id: 5, human: true, hello: ƒ}

