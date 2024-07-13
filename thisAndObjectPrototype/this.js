function identify() {
	return this.name.toUpperCase();
}

function speak() {
	let greeting = "Hello, I'm " + identify.call( this );
	console.log( greeting );
}

let me = {
	name: "Techie Emma"
};

let you = {
	name: "Reader"
};

identify.call( me );
identify.call( you ); 

speak.call( me ); 
speak.call( you ); 