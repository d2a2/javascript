// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
//Должен получиться точно такой же массив

    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];
   
    // for (let i = 0; i < arr.length; i++){
    //     result [i] = arr [i]
    // }
    // console.log(result);
    // return result;



// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);


// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// const arr = [5, 10, 'shopping', 20,'homework'];

//  for ( let i = 0; i < arr.length; i++) {
//     if (typeof(arr[i])==='string') {
//         arr [i] = `${arr[i]}- done`;
//     }
//     else if (typeof(arr[i])==='number') {
//         arr [i] = arr [i]*2;
//     }
//  }
//     console.log(arr);
//     return arr;

//Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
//Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
    // const data = [5, 10, 'Shopping', 20, 'Homework'];
    // const result = [];

    // for (let i=1; i<=data.length; i++) {
    //     result [i-1]=data[data.length -i]
    // }
    // console.log(result);
    // return result;

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//         for (let j = 0; j < lines - i; j++) {
//             result += " ";
//         }
//     for (let j = 0; j < i*2+1; j++) {
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);

// function sayHello(name) {
//     return `Привет, ${name}!`;
// }
// sayHello('Andy');



// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }
// returnNeighboringNumbers(6);



// function getMathResult(num, times) {
//         if (times <= 0 || typeof(times)!=='number') {
//             return num;
//         } 
// }

// let str = '';

// for (let i=1; i<= times; i++) {
//     if (i===times) {
//         str += `${num*i}`;
//     } else {
//         str += `${num*i}---`
//     }
// }

// return str;

// const logg = 'Hello Alehandro';
// console.log(logg.slice(6,15));

// const logg = 'three piglets';
// console.log(logg.slice(0,5));