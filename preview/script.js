'use strict';

class Rec {
    constructor(width, height) { //свойства
        this.width = width;
        this.height = height;
    }

    calcArea() { //метод
        return this.width * this.height;
    }
}

class RecTextColor extends Rec {
    constructor(width, height, text, color) {
        super(width, height);  //вызывает то что было у родителя 
        this.text = text;
        this.color = color;
    }

    showMyProps() {
        return `Текст: ${this.text}, цвет: ${this.color}`;
    }
}

const r1 = new Rec(10, 10);
const r2 = new RecTextColor(5, 5, 'HELLO', 'blue');


console.log(r1, r1.calcArea());  // Rec { width: 10, height: 10 } 100
console.log(r2, r2.showMyProps(), r2.calcArea()); // RecTextColor { width: 5, height: 5, text: 'HELLO', color: 'blue' } Текст: HELLO, цвет: blue 25