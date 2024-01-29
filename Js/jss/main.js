//Циклы while и for
//Первая

//for (var i = 1; i <= 100; i++) {
//	console.log(i);
//}

//Вторая

//for (var i = 11; i <= 33; i++) {
//	console.log(i);
//}

//Третья

//for (var i = 0; i <= 100; i += 2) {
//	console.log(i);
//}

//Четвёртая

//var sum = 0;

//for (var i = 1; i <= 100; i++) {
//    sum += i;
//}

//console.log('Сумма чисел от 1 до 100: ' + sum);

//Работа с for для массивов

//One

//var array1 = [1, 2, 3, 4, 5];

//for (var i = 0; i < array1.length; i++) {
//    console.log(array1[i]);
//}

//Two

//var array2 = [1, 2, 3, 4, 5];
//var result = 0;

//for (var i = 0; i < array2.length; i++) {
//    result += array2[i];
//}

//console.log('Сумма элементов массива: ' + result);

//Работа с for-in

//var obj = {
//	'Коля': '200',
//	'Вася': '300',
//	'Петя': '400'
//};

//for (var key in obj) {
//	console.log(key + ' - зарплата ' + obj[key] + ' долларов.');
//}

//Задачи

// Первая задача
//var array1 = [2, 5, 9, 15, 0, 4];
//for (var i = 0; i < array1.length; i++) {
//    if (array1[i] > 3 && array1[i] < 10) {
//        console.log(array1[i]);
//    }
//}

// Вторая задача
//var array2 = [-2, 5, -9, 15, 0, 4];
//var sumPositive = 0;
//for (var i = 0; i < array2.length; i++) {
//    if (array2[i] > 0) {
//        sumPositive += array2[i];
//    }
//}
//console.log('Сумма положительных элементов: ' + sumPositive);

// Третья задача
//var array3 = [1, 2, 5, 9, 4, 13, 4, 10];
//for (var i = 0; i < array3.length; i++) {
//    if (array3[i] === 4) {
//        console.log('Есть!');
//        break;
//    }
//}

// Четвертая задача
//var array4 = [10, 20, 30, 50, 235, 3000];
//for (var i = 0; i < array4.length; i++) {
//    var firstDigit = parseInt(array4[i].toString()[0]);
//    if (firstDigit === 1 || firstDigit === 2 || firstDigit === 5) {
//        console.log(array4[i]);
//    }
//}

// Пятая задача
//var str5 = '-';
//for (var i = 1; i <= 9; i++) {
//    str5 += i + '-';
//}
//console.log(str5);

// Шестая задача
//var daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//for (var i = 0; i < daysOfWeek.length; i++) {
//    if (i >= 5) {
//        console.log(daysOfWeek[i].bold());
//    } else {
//        console.log(daysOfWeek[i]);
//    }
//}

// Седьмая задача
//var daysOfWeek2 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//var day = 'Среда'; // Замените на текущий день
//for (var i = 0; i < daysOfWeek2.length; i++) {
//    if (daysOfWeek2[i] === day) {
//        console.log(daysOfWeek2[i].italics());
//    } else {
//        console.log(daysOfWeek2[i]);
//    }
//}

// Восьмая задача
//var n = 1000;
//var num = 0;
//while (n >= 50) {
//    n /= 2;
//    num++;
//}
//console.log('Получится число: ' + n);
//console.log('Количество итераций: ' + num);
