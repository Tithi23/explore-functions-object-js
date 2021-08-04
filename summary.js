var shyColor = 'white';

var phones = ['iphones', 'xiomi', 'lg', 'htc'];
phones[3] = 'walton';
//check an element exists in an array
if (phones.indexOf('oppo') == -1) {
    console.log('opps! amir khan oppo is missing');
}
// if lg is availeble
if (phones.indexOf('lg') != -1) {
    console.log('lg is availeble now');
}

// loop

var num = 0;
while (num <= 10) {
    num++;
}

for (var i = 0; i < phones.length; i++) {

}


// function
function addThreeNumbers(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return;
}
addThreeNumbers(45, 56, 87);


// object
var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: black
}