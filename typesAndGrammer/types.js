// JavaScript defines seven built-in types:

// null
// undefined
// boolean
// number
// string
// object
// symbol – added in ES6!

typeof undefined     === "undefined";
typeof true          === "boolean";  
typeof 42            === "number";   
typeof "42"          === "string";   
typeof { life: 42 }  === "object";   

// added in ES6!
typeof Symbol()      === "symbol";   


var o = { };

var a = {
	b: 42,
	c: o,
	d: function(){}
};

// create a circular reference inside `a`
o.e = a;

// would throw an error on the circular reference
// JSON.stringify( a );

// define a custom JSON value serialization
a.toJSON = function() {
	// only include the `b` property for serialization
	return { b: this.b };
};

JSON.stringify( a ); // "{"b":42}"