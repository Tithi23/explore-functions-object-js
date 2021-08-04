var computer = {
    price: 29000,
    storage: '159gb',
    processor: 'intel i5',
    color: 'sliver'
}
// console.log(computer);
// console.log(computer.stroage);

// var computerPrice = computer.price;
// console.log(computerPrice);


// 1st way

// computer.price = 22000;
// console.log(computer);



// different ways to set a value of an object property

// computer.price = 22000;
// computer['price'] = 23000;
// console.log(computer);


// 3rd way

// var propertyName = 'price';
// computer.price = 22000;
// computer['price'] = 23000;
// computer['propertyName'] = 19000;
// console.log(computer);

//
var storageProperty = 'storage';
computer[storageProperty] = '512gb';

computer['storage'] = '1tb';

computer.storage = '5tb';

console.log(computer);