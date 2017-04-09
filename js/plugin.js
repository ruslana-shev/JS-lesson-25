//Часть 1
//1
//const rectangel = {
//	width: 10,
//	height: 5,
//	getSquare: function () {
//		return this.width*this.height;
//	}
//}
//var res = rectangel.getSquare();
//console.log(`площадь прямоугольника:`, res);

//2
//function getPrice() {
//	return this.price;
//}
//function getDiscount(){
//	return parseFloat(this.discount);
//}
//function getPriceWithDiscount() {
//	return this.price*(100-parseFloat(this.discount))/100;
//}
//const price = {
//	price: 10,
//	discount: '15%',
//	getPrice: getPrice,
//	getDiscount: getDiscount,
//	getPriceWithDiscount: getPriceWithDiscount
//}
//console.log(`Цена:`, price.getPrice());
//console.log(`Скидка в %:`, price.getDiscount());
//console.log(`Цена с учетом скидки:`, price.getPriceWithDiscount());

//3
//const user = {
//	name: 'Abraham',
//	getName: getUserName
//}
//function getUserName(){
//	return this.name;
//}
//console.log(`user name:`, user.getName());

//4
//var obj = {
//	height: 10,
//	getIncHeight: getIncHeight
//} 
//function getIncHeight(){
//	return this.height++;
//}
//console.log(obj.height);
//console.log(obj.getIncHeight());
//console.log(obj.height);
//console.log(obj.getIncHeight());
//console.log(obj.height);
//console.log(obj.getIncHeight());

//5
// const numerator = {
// 	value: 1,
// 	double: double,
// 	plusOne: plusOne, 
// 	minusOne: minusOne 
// }
// function double(){
// 	this.value*=2;
// 	return this;
// }
// function plusOne(){
// 	this.value++;
// 	return this;
// }
// function minusOne(){
// 	this.value--;
// 	return this;
// }
// numerator.double().plusOne().plusOne().minusOne();
// console.log(`Результат:`, numerator.value);

//6
// const user = {
// 	name: 'Abraham'
// },
// otherUser = {
// 	name: 'John',
// 	getName: function (){
// 		return this.name;
// 	}
// }
// user.getName; //у объекта user нет метода getName
// user.getName = otherUser.getName; //одалживание метода у объекта otherUser
// user.getName(); //выводит name у объекта user
// otherUser.getName(); //выводит name у объекта otherUser

//Часть2
//1
// function getList() {
// 	return this.list;
// }
// let users = {
// 	lenght: 4,
// 	list: ['Abraham', 'James', 'John', 'Steven']
// }
// getList(); //underfined, ф-ция вызвана глобально, в контексте window, у нго нет list
// users.getList = getList; // одалживание метода
// users.getList(); // ["Abraham", "James", "John", "Steven"] вызывает функцию как метод у объекта users
// getList.call(users); // ["Abraham", "James", "John", "Steven"] вызывает напрямую функцию в контексте объекта users

//2, 3
// var obj1 = {
// 	price: 10,
// 	amountProduct: 3,
// 	getTotalPrice: getTotalPrice
// }
// function getTotalPrice(){
// 	return this.price * this.amountProduct
// }

// var obj2 = {
// 	amountProduct: 10,
// 	price: 5
// }
// obj2.getTotalPrice = obj1.getTotalPrice;
// var res = obj2.getTotalPrice();
// console.log(`Общая цена всех деталей:`, res);

//4
// let size = {
// 	width: 5,
// 	height: 10
// }
// getSquare = function(){
// 	return this.width*this.height;
// }
// var res = getSquare.call(size);
// console.log(res);

//5
// let numbers = [4, 12, 0, 10, -2, 4];
// var res = Math.min.apply(null, numbers);
// console.log(res);

//6
// const element = {
// 	height: '15px',
// 	marginTop: '5px',
// 	marginBootom: '5px',
// 	getFullHeight: function (){
// 		return parseFloat(this.height) + parseFloat(this.marginBootom) + parseFloat(this.marginTop);
// 	}
// };
// console.log(`Полная высота объекта element:`, element.getFullHeight());

// const block = {
// 	height: '5px',
// 	marginTop: '3px',
// 	marginBootom: '3px'
// }
// console.log(`Полная высота объекта block:`, element.getFullHeight.call(block));

//7
// let element = {
// 	height: 25,
// 	getHeight: function (){
// 		return this.height;
// 	}
// };
// let getElementHeight = element.getHeight.bind(element);
// console.log(getElementHeight());