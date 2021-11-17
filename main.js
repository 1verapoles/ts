function someFn(str) {	
	return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

function sayHello(name) {
	if (name === "Mark") {
		return `Hi, ${name}!`;
	}
	return `Hello, ${name}!`;
}


function filterStrings(arr, length) {	
	return arr.filter(el => el.length <= length);
}

// console.log(sayHello("Oleg"));
// console.log(sayHello("Victor"));
// console.log(sayHello("Mark"));

// console.log(filterStrings(["I love JS", "some very long string", "hell"], 9));
// console.log(filterStrings(['a', 'ab', 'abc'], 2));

// console.log(someFn('пиТеР'));
// console.log(someFn('javaScript'));
