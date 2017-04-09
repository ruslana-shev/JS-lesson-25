//Дополнительное задание
//1
// function getGeneratorRandomString(n){
//  	var str = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
//  	var	length = str.length;
//  	var	newStr = '';

//  	while (newStr.length < n){
//  		newStr += str[Math.round(Math.random() * length)];
//  	}
//  	return newStr;
// }
// console.log(`Новая случайная строка:`, getGeneratorRandomString(15));

//2

// var users = [
// 	{
// 		name: 'Denis',
// 		age: 28,
// 		male: 'man'
// 	},
// 	{
// 		name: 'Ira',
// 		age: 50,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Ivan',
// 		age: 32,
// 		male: 'man'
// 	},
// 	{
// 		name: 'Maksim',
// 		age: 46,
// 		male: 'man'
// 	},
// 	{
// 		name: 'Olga',
// 		age: 28,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Oksana',
// 		age: 53,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Dmitry',
// 		age: 28,
// 		male: 'man'
// 	},
// 	{
// 		name: 'Ludmila',
// 		age: 19,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Larisa',
// 		age: 28,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Natalia',
// 		age: 49,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Valera',
// 		age: 63,
// 		male: 'man'
// 	},
// 	{
// 		name: 'Andrey',
// 		age: 33,
// 		male: 'man'
// 	},
// 	{
// 		name: 'Svetlana',
// 		age: 26,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Raisa',
// 		age: 47,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Oksana',
// 		age: 21,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Elena',
// 		age: 38,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Pavel',
// 		age: 32,
// 		male: 'man'
// 	},
// 	{
// 		name: 'Evgeny',
// 		age: 33,
// 		male: 'man'
// 	},
// 	{
// 		name: 'Stas',
// 		age: 28,
// 		male: 'man'
// 	},
// 	{
// 		name: 'Katya',
// 		age: 27,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Valentina',
// 		age: 24,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Olga',
// 		age: 17,
// 		male: 'wooman'
// 	},
// 	{
// 		name: 'Nikolay',
// 		age: 57,
// 		male: 'man'
// 	},
// 	{
// 		name: 'Vitaliy',
// 		age: 28,
// 		male: 'man'
// 	},
// 	{
// 		name: 'Konstantin',
// 		age: 30,
// 		male: 'man'
// 	}
// ];
// function getAddObjName(users) {
// 	var newObj = {};
// 	var newKey;

// 	for (var i = 0; i < users.length; i++) {
// 		newKey = users[i].name.toLowerCase() + '_' + (i+1);
// 		newObj[newKey] = users[i];
// 	}
// 	return newObj;
// }
// console.log(getAddObjName(users));