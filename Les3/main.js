console.log('Задача 1');
for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
        continue;
    }
    (i % 2 === 0) ? console.log(`${i} - четное число`) : console.log(`${i} - нечетное число`);  
}


console.log('Задача 2');
const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);


console.log('Задача 3');
const rndArr = [];
for (let i = 0; i < 5; i++) {
    rndArr.push(Math.round(Math.random()*10));   
}
console.log(rndArr);
const newRndArr = rndArr.map(el => el ** 2);
console.log(newRndArr);


console.log('Задача 4');
const rndArr2 = [];
for (let i = 0; i < 5; i++) {
    rndArr2.push(Math.round(Math.random()*10));
}
filterRndArr2 = rndArr2.filter(elem => (elem !== 3));
console.log(filterRndArr2);
const newRndArr2 = filterRndArr2.map(el => (el * 1.1).toFixed(1));
console.log(newRndArr2);

console.log('Задача 5');
for (let i = 0; i <= 9; console.log(i++)) {  
}

console.log('Задача 6');
for (let i = 1; i <= 20; console.log('*'.repeat(i++))) { 
}