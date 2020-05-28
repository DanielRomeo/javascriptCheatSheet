'use strict';

var destructuring = function(){
	var setValues = {
		PI: 3.14,
		SUCCESS: 200,
		REJECT: 400
	}
	const {PI, SUCCESS, REJECT} = setValues;
	const {PI: c, SUCCESS: a, REJECT: b} = setValues;
}

const SpreadAndRest = () =>{
	// spread operator:
	// const array = [5,4,7];
	// const array2 = [];

	// array.map( (num) =>{
	// 	array2.push(num);
	// })

	// rest operator:
	function add(...rest){

		let arr = [...rest];
		const sum = arr.reduce( (total, num) => total += num);
		// console.log(sum);
	};

	add(5, 4);

}



function classes(){


	class Kat{

		constructor(name, age){
			this.name = name;
			this.age = age;
		}

		getAge = () =>{
			console.log(this.age); 
		}

		static getSummary = () =>{
			console.log(this.name)
		}

		}

		let pussyCat = new Kat('sam', 5);
		pussyCat.getAge();
		console.log();

		Kat.getSummary();
}


//async await, and promises: _ fetch() api
const fetchApi = function(){
	console.log("hey");
}();


const setsAndIIFE = () =>{

	// sets:

	const exampleSet = new Set([1,5,5,4,5,4, 2]);
	exampleSet.delete(21);
	JSON.stringify(exampleSet); 
	//console.log(exampleSet);


	//IIFE functions:
	(function(){
		console.log("hello mate");
	})();

	var fav;
	(fav = function(num = 3){
		//console.log(num);

		//console.log(fav(2));

	})();

}

// higer order functions:

// sorting:
var myarray = [4,5,3,1, 87, 11, 10, 54];


var data = myarray.sort( (a, b) => (a > b ? 1 : -1) );
var squares = myarray.map( val => val*val );
var squaresSum = squares.reduce((val, sum) => sum+=val ,0);
var evenSquares = squares.filter( val => (val % 2 == false) );

// console.log(`sorted data is ${data}`);
// console.log(`squares are ${squares}`);
// console.log(`the total sum of the squares is ${squaresSum}`);
// console.log(`the even Squares are: ${evenSquares}`);

/*===============================================================================================================*/
// data structures:

'use strict';

var obj = {
	0 : "daniel",
	1 : "romeo"
}

// implemeting a stack in javascript:

var stack = function(){

	this.count = 0;
	this.storage = {};

	this.push = function(value){
		this.storage[this.count] = value;
		this.count++;
	}

	this.pop = function(){
		if(this.count === 0){
			return "Your stack is empty!";
		}else{

			this.count--;
			let result = this.storage[this.count];
			delete this.storage[this.count];
			return result;
		}
	}	

	this.size = function(){
		return this.count;
	}

	this.peek = function(){
		let peekValue = this.storage[this.count-1];
		if(peekValue == undefined){
			return "Your stack is empty!";
		}else{
			return peekValue;
		}
	}
}

var mystack = new stack();

mystack.push("Samule and the rangers");
mystack.push("John cena");

// console.log(mystack.pop());

// console.log(mystack.peek());

// console.log(mystack.size());

// console.log(mystack);



/* Implementing a SET in Javascript: */
// a set is a data structure that has no duplicate items:


var Sett = function(){

	this.collection = [1, 8];

	// function that adds items to the set:
	this.push = (val) =>{
		if(this.exists(val) == false){
			this.collection.push(val);
			return "The data has been added!";
		}else{
			return "This value alredy exists in the set!";
		}
	}

	// function that return all values in the set:
	this.values = () =>{
		return this.collection;
	}


	// function that checks if an item exists in the set:
	this.exists = (val) =>{
		if(this.collection.indexOf(val) != -1){
			// return this.collection.indexOf(val);
			return true;
		}else{
			return false;
		}
	}

	// function that removes items from a set:
	this.remove = (val) =>{
			//console.log(this.collection[1]+ ' s');

		if(this.exists(val)){

			let index = this.collection.indexOf(val);
			this.collection.splice(index, 1);
			return true;
		}else{
			return "Your value does not exist in the set";
		}
	}

	// function to return the size of the collection:
	this.size = () =>{
		return this.collection.length;
	}

	// write a function that adds up 2 sets. But obviouslty leaves out duplicate tings:
	this.union = (otherSet) =>{
		let unionSet = [...this.collection];
		// loop through other set , move items to collections: dont add it if the item already exists ...
		for(let i = 0; i < otherSet.length; i++){
			if(this.exists(otherSet[i]) ){
				// do nothing:
			}else{ // ifit doesnt exists:
				unionSet.push(otherSet[i]);
			}
		}
		return unionSet;
	}

	// is subset: function that checks other sets and returns true if the new sets is a subset of this set: 
	this.isSubset = (otherSet) =>{

		for(let i = 0; i < otherSet.length; i++){
			if(this.exists(otherSet[i])){
				continue;
			}else{
				return false;
			}
		}

		return true;
	}

}


/* A Queue data structure: */

function Queue(){
	var collection = [];

	this.print = () =>{
		console.log(collection);
	}

	this.enque = (val) =>{
		return collection.push(val);
	}

	this.deque = () =>{
		return collection.shift();
	}

	this.front = () =>{
		return collection[0];
	}

	this.size = () =>{
		return collection.length;
	}

	this.isEmpty = () =>{
		return (collection.length === 0);
	}
}

var q1 = new Queue();
// q1.enque(7);
// q1.print();




/* Prioritry Queue */

function PriorityQueue(){
	var collection = []; // this is an array of arrays: and holds e.g. ["wash dishes", 1]

	this.print = () =>{
		console.log(collection);
	}

	this.enque = (val) =>{

		if(this.isEmpty() == true){
			return collection.push(val);			
		}else{
			console.log("begun");
			var valPriority = val[1];	
			var added = false;
			for(let i = 0; i < collection.length; i++){

				if(valPriority < collection[i][1]){
					collection.splice(i, 0, val);
					added = true;
					break;
					// console.log(`pushed the value of ${val}`);			
				}
			}

			if(!added){
				collection.push(val);
			}
		}
	}

	this.deque = () =>{
		return collection.shift();
	}

	this.front = () =>{
		return collection[0];
	}

	this.size = () =>{
		return collection.length;
	}

	this.isEmpty = () =>{
		return (collection.length === 0);
	}
}


var p1 = new PriorityQueue();


p1.enque(["clean dishes", 5]);
p1.enque(["clean clothes", 9]);
p1.enque(["clean clothes", 1]);
p1.enque(["clean clothes", 3]);
// p1.print();

// console.log(p1.front());

p1.print();

//_-----------------------------------------------\
// asyncronous proimises:
let isMomHappy = true;

const willGet = new Promise( function(resolve, reject){
	if(isMomHappy){
		var phone ={
			brand: 'samsung',
			color: 'black'
		}
		resolve(phone);
	}else{
		var reason = new Error("mom is not happy!");
		reject(reason);
	}
});

// console.log(willGet);


// calling willGet returns a promise:
var askMom = function(){
	console.log("before asking");
	willGet
	.then(showoff)
	.then(fulfilled => console.log(fulfilled))
	.catch(error => console.log(error.message))
	console.log("after asking");
}

askMom();

var showoff = function(phone : any){
	// return Promise(function(resolve, reject){
	// 	var message = "hey i have a new "+phone.brand+" phone";
	// 	resolve(message);
	// })

	var message = "hey i have a new "+phone.brand+" phone";
	return Promise.resolve(message);

}
