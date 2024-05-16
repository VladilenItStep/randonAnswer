'use strict'
const answers = ['1', "2", "3"]

function Card(selector1, selector2) {
    this.input = document.querySelector(selector1);
    this.btn = document.querySelector(selector2);

}

// const cards = [{
//         input: document.querySelector('.input1'),
//         btn: document.querySelector('.btn1'),
//     },
//     {
//         input: document.querySelector('.input2'),
//         btn: document.querySelector('.btn2'),
//     },
//     {
//         input: document.querySelector('.input3'),
//         btn: document.querySelector('.btn3'),
//     },
// ]

const cards = [
    new Card('.input1', '.btn1'),
    new Card('.input2', '.btn2'),
    new Card('.input3', '.btn3')
]


const getAnswer = (index) => {
    return answers[index]
}

let count = 0
console.log(window);
const handlerCheckAnswer = function(index) {
    if (this.input.value === getAnswer(index)) {
        this.input.disabled = true
        this.btn.disabled = true
        count++
        if (count === 3) {
            alert('Вы ответили правильно')
            window.location.href = 'https://google.com'
        }
    } else {
        this.input.value = ''
        alert('Ответ неверный, попробуйте угадать 1, 2 или 3')
    }
}


cards
    .sort(() => Math.random() - 0.5)
    .forEach((card, index) => {
        card.btn.addEventListener('click', handlerCheckAnswer.bind(card, index))
    })

//TODO

const dog = {
    name: 'Dora',
    sayGav() {
        console.log(`${this.name} говорит Gav`)
    },
    meet() {
        console.log(`Привет, я ${this.name}`);
    },

}

const cat = {
    name: 'Tosay',
    sayMay() {
        console.log(`${this.name} говорит May`)
    },
    meet() {
        console.log(`Привет, я ${this.name}`);
    },

}

function Pet(name) {

    // this.meet = function() {
    //     console.log(`Привет, я ${this.name}`);
    // }

    this.setName(name)

}

Pet.prototype.setName = function(name) {
    this.name = name;
};

Pet.prototype.getName = function() {
    return this.name;
};

Pet.prototype.meet = function() {
    console.log(`Привет, я ${this.name}`);
};

function Cat(name) {

    Cat.prototype.sayMay = function() {
        console.log(`${this.name} говорит May`)
    };

}


function Dog(name) {

    Dog.prototype.sayGav = function() {
        console.log(`${this.name} говорит Gav`)
    };

    Dog.prototype.meet = function() {
        Pet.prototype.meet.call(this)
        console.log(`NEW MEEET`)
    };
}


function inherit(child, parent) {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
}



const dog2 = new Dog()
console.log(dog2.setName('Dora'));
dog2.meet()

console.log(cat2);
console.log(dog2);


















// Если вызвать функцию c кулючевым словом NEW, то функция начнет возвращать "пустой" объект
// this внутри функции конструктора указывает на экземпляр
// у экземпляра есть свойство constructor (указывает на фукнцию-конструктор)
// У каждого конструктора есть свойство prototype, которое изначально является "пустым" объектом
// Наполняя prototype любыми свойствами, мы, тем самым, наполняеем свойствами и все экс данного конструктора
/*
 Когда конструктор создает экз, помимо свойства constructor, в экз помещается СКРЫТОЕ св-во
 __proto__, которое ссылается на prototype конструктора
*/