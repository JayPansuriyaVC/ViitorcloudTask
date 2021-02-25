# ViitorcloudTask
Repo for all tasks and update


🔥JAVASCRIPT🔥

--------------------------------------------------------------------------------------
JavaScript was initially created to “make web pages alive”.

Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.

---------------------------------------------------------------------------------------

JavaScript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the JavaScript engine.
How do engines work?
Engines are complicated. But the basics are easy.

The engine (embedded if it’s a browser) reads (“parses”) the script.
Then it converts (“compiles”) the script to the machine language.
And then the machine code runs, pretty fast.

--------------------------------------------------------------

✅Multi-line input in consol

Usually, when we put a line of code into the console, and then press Enter, it executes.

To insert multiple lines, press Shift+Enter. This way one can enter long fragments of JavaScript code.

-------------------------------------------------------------------
As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files.

The benefit of a separate file is that the browser will download it and store it in its cache.

Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.

That reduces traffic and makes pages faster.


------------------------------------------------------------------------------
✅NaN

NaN represents a computational error.

Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.

The script will never stop with a fatal error (“die”). At worst, we’ll get NaN as the result.

The value NaN is unique in that it does not equal anything



--------------------------------------------------------------------------------------

✅null

is just a special value which represents “nothing”, “empty” or “value unknown”.

---------------------------------------------------------------------------------------

✅undefined
 
The meaning of undefined is “value is not assigned”.

-------------------------------------------------------------------------------------
✅isNaN

isNaN(value) converts its argument to a number and then tests it for being NaN.

alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true


✅isFinite

isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:

alert( isFinite("15") ); // true

------------------------------------------------------------------------------------------
✅ “precision losses”

0.1 + 0.2 is not exactly 0.3

A number is stored in memory in its binary form, a sequence of bits – ones and zeroes. But fractions like 0.1, 0.2 that look simple in the decimal numeric system are actually unending fractions in their binary form.

In other words, what is 0.1? It is one divided by ten 1/10, one-tenth. In decimal numeral system such numbers are easily representable. Compare it to one-third: 1/3. It becomes an endless fraction 0.33333(3).


------------------------------------------------------------------------------------------

 0️⃣an empty or a space-only string is treated as 0 in all numeric functions.
 
-----------------------------------------------------------------------------------------

✅Object.is  (also called SameValue)

 Object.is that compares values like ===
 
 two edge cases:
 1.NaN: Object.is(NaN, NaN) === true
 2.Object.is(0, -0) === false

------------------------------------------------------------------------------------------------------

✅parseInt and parseFloat

Numeric conversion using a plus + or Number() is strict. 


They “read” a number from a string until they can’t. In case of an error, the gathered number is returned. 

parseInt('100px'); // 100
parseFloat('12.5em'); // 12.5

parseInt('a123'); // NaN

parseInt('0xff', 16); // 255

----------------------------------------------------------------------------------------------

✅Comparisons


let a = 0;
alert( Boolean(a) ); // false

👉let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!


👉A strict equality operator === checks the equality without type conversion.

👉alert( null == undefined ); // true

---------------------------------------------------------------------------------------------

✅ if else and ? :

let result = condition ? value1 : value2;

---------------------------------------------------------------------------------------------

✅ || 

 If any of its arguments are true, it returns true, otherwise it returns false.
 
 
 ✅ &&
 The AND && operator does the following:
Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
 
✅ !
The operator accepts a single argument and does the following:
Converts the operand to boolean type: true/false.
Returns the inverse value.

✅Nullish coalescing operator '??'
?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

-------------------------------------------------------------------------------------------------

✅while

✅do while

✅for

✅break

✅continue

✅Labels for break/continue

------------------------------------------------------------------------------------------------

✅switch

A switch statement can replace multiple if checks.
It gives a more descriptive way to compare a value with multiple variants.

use === for comparision

--------------------------------------------------------------------------

✅functions

Quite often we need to perform a similar action in many places of the script.

They allow the code to be called many times without repetition.

👉function name(parameters) {
  ...body...
}

👉Local variables
A variable declared inside a function is only visible inside that function.

👉Outer variables
A function can access an outer variable as well,.

👉Global variables
Variables declared outside of any function, such as the outer userName in the code above, are called global.

👉Parameters
We can pass arbitrary data to functions using parameters (also called function arguments) .
  👉Default values
   If a parameter is not provided, then its value becomes undefined
   
👉Return  
A function can return a value back into the calling code as the result.

👉 A function with an empty return or without it returns undefined
If a function does not return a value, it is the same as if it returns undefined

-------------------------------------------------------------------------------------------------------------

✅

another syntax for creating a function that is called a Function Expression.

let sayHi = function() {
  alert( "Hello" );
};

✅callback fun
function ask(question, yes, no){}
The arguments showOk and showCancel of ask are called callback functions or just callbacks.

✅Function Declaration
The Function Declaration sayHi is created when JavaScript is preparing to start the script and is visible everywhere in it.

✅Function Expressions
Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.

✅arrow functions(same work as function expressions)
let func = (arg1, arg2, ..., argN) => expression

----------------------------------------------------------------------------------------------------------------------------------------

✅'use strict'

To fully enable all features of modern JavaScript, we should start scripts with "use strict".

------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------------

✅string


Single and double quotes are essentially the same.
Backticks, however, allow us to embed any expression into the string, by wrapping it in ${…}.

👉str.length
is a numeric property, not a function

👉Accesing Char
str[pos]
str.charAt(pos)

if no character is found, [] returns undefined, and charAt returns an empty string.

👉for..of
for (let char of "Hello"){
alert(char)
}

👉Strings are immutable
Strings can’t be changed in JavaScript. It is impossible to change a character.
we have to create a whole new string and assign it to str instead of the old one.

👉Changing case of string
Methods toLowerCase() and toUpperCase() change the case.

👉Searching for a substring

👉str.indexOf(substr, pos)
   return -1 if substring not found.
      👉str.lastIndexOf(substr, position)
        it return substring pos from last.
        
👉bitwise NOT ~ operator
   for 32-bit integers ~n equals -(n+1).
   ~n is zero only if n == -1 .
        
👉includes, startsWith, endsWith
      str.includes(substr, pos)
      str.startsWith(substr)
      str.endssWith(substr)
      
 👉Getting a substring
       method	                          selects…	                          negatives
slice(start, end)	           from start to end (not including end)	    allows negatives
substring(start, end)	       between start and end	                    negative values mean 0
substr(start, length)	       from start get length characters	         allows negative start
  
👉Comparing strings

All strings are encoded using UTF-16. That is: each character has a corresponding numeric code.The characters are compared by their numeric code. 

        👉String.fromCodePoint(code)
            Special methods that allow to get the character for the code and back.
        👉String.fromCodePoint(code)
            Creates a character by its numeric code.
  
 👉str1.localeCompare('str2') )
       setup additional rules like case sensitivity or should "a" and "á" be treated as the same etc.

------------------------------------------------------------------------------------------------------------------------------
✅task prob solv

👉arr.sort() 
👉arr.sort( (a, b) => a - b );

here sort method use quick sort or trim sort internally.
here it only compare string value which cause problem like => '2' > '12' //true
so we compare them like  (a, b) => a - b which compare a,b in numerical way and give for swapping.

👉you can make compare function on your own when you have to compare from object values like

function compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }
  
  👉when we use array and make another array from it it make refference of it like : let arr1 = arr;
  so modifing arr1 cause modifing both the arrays.
  
  so for making copy of same array we can use like :
  
  let newArray = oldArray.slice();
  
  this make new array not just take refference of it.
  
  we have to do deep copy of array of objects:
  
  var newArray = JSON.parse(JSON.stringify(oldArray));

---------------------------------------------------------------------------------------------------------------------------------

✅Arrays

👉ordered collection

let arr = new Array();
let arr = [];

push appends an element to the end.
unshift Add the element to the beginning of the array.
pop Extracts the last element of the array and returns it.
shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

👉The call fruits.push(...) is equal to fruits[fruits.length] = ....

if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.


👉splice 
The arr.splice method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
arr.splice(start[, deleteCount, elem1, ..., elemN])

👉slice 
arr.slice([start], [end])

👉concat
arr.concat(arg1, arg2...)

👉forEach
arr.forEach(function(item, index, array) {
  // ... do something with item
});

👉searching
arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
arr.lastIndexOf(item, from) – same, but looks for from right to left.
arr.includes(item, from) – looks for item starting from index from, returns true if found.

👉find and findIndex
let result = arr.find(function(item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

👉filter
filter returns an array of all matching elements.
let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});

👉map
let result = arr.map(function(item, index, array) {
  // returns the new value instead of item
});

👉reverse
arr.reverse();


👉split and join
let a = arr.split(' ');
let a = arr.join(' ');

👉reduce
They are used to calculate a single value based on the array.
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);

---------------------------------------------------------------------------------------------

✅Object

👉A property is a “key: value” pair.

let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

Object.keys(obj) – returns an array of keys.
Object.values(obj) – returns an array of values.
Object.entries(obj) – returns an array of [key, value] pairs.


👉access element of object with key
obj1.name // jay
obj1[name] //jay


👉Computed properties
We can use square brackets in an object literal, when creating an object. 
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {
  [fruit]: 5, 
};
alert( bag.apple ); // 5 if fruit="apple"


👉There are no limitations on property names. They can be any strings 
or symbols (a special type for identifiers(for ,let,etc...), to be covered later).


👉One of the fundamental differences of objects versus primitives is that
objects are stored and copied “by reference”, whereas primitive 
values: strings, numbers, booleans, etc – are always copied “as a whole value”.v

👉clone Object
let clone = {}; // the new empty object
// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

👉Merging
Object.assign(dest, [src1, src2, src3...])

cloning an object, e.g. using the spread operator clone = {...user}



---------------------------------------------------------------------------------------------

✅Hoisting
Hoisting is a JavaScript mechanism where variables and function declarations 
are moved to the top of their scope before code execution. Inevitably, this means
that no matter where functions and variables are declared, they are moved to the top 
of their scope regardless of whether their scope is global or local.


---------------------------------------------------------------------------------------------

✅DOM

👉Document Object Model (DOM), every HTML tag is an object

innerHTML – HTML contents of the node. 
<html> = document.documentElement
 <body> = document.body
  <head> = document.head
   document.body.childNodes
   elem.childNodes[0] === elem.firstChild
   elem.childNodes[elem.childNodes.length - 1] === elem.lastChild
   

 document.body.parentNode === document.documentElement 
 
 👉Searching: getElement*, querySelector*

  👉document.getElementById(id)
  elem is a reference to DOM-element with id="elem". =>> let elem = document.getElementById('elem'); 
   elem.style.background = 'red';
 
  👉querySelectorAll
  elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector.
  
 👉querySelector
 elem.querySelector(css) returns the first element for the given CSS selector. 

👉matches
elem.matches(css) does not look for anything, it merely checks if elem matches the given CSS-selector. It returns true or false

👉closest
elem.closest(css) looks for the nearest ancestor that matches the CSS-selector. The elem itself is also included in the search.

"getElementsBy*" return a live collection. Such collections always reflect the current state of the document and “auto-update” when it changes.
querySelectorAll returns a static collection. It’s like a fixed array of elements.  "getElementsBy*" return a live collection. Such collections always reflect the current state of the document and “auto-update” when it changes.


---------------------------------------------------------------------------------------------

👉JavaScript is a single-threaded programming language, which means it has a single Call Stack. Therefore it can do one thing at a time.

The Call Stack is a data structure which records basically where in the program we are. 

Running code on a single thread can be quite easy since you don’t have to deal with complicated scenarios that are arising in multi-threaded environments — for example, deadlocks.


👉The V8 Engine also uses several threads internally:
The main thread does what you would expect: fetch your code, compile it and then execute it
There’s also a separate thread for compiling, so that the main thread can keep executing while the former is optimizing the code
A Profiler thread that will tell the runtime on which methods we spend a lot of time so that Crankshaft can optimize them
A few threads to handle Garbage Collector sweeps

----------------------------------------------------------------------------------------------------
✅Give current position of arrow

<script>
let scheduled = null;
window.addEventListener("mousemove", event => {
if (!scheduled) {
setTimeout(() => {
document.body.textContent =
`Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
scheduled = null;
}, 250);
}
scheduled = event;
});
</script>


---------------------------------------------------------------------------------------------------




