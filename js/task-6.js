"use strict";

const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },
];

const calculateTotalPrice = function (allProdcuts, productName) {
    let rez=0;

    for (let i = 0; i < allProdcuts.length; i++) {
        if (allProdcuts[i].name === productName) {
            rez = (allProdcuts[i].price * allProdcuts[i].quantity);
        }

    }
    return rez;
};


console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800