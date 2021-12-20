/*

Note, You can do it in one file.
Create a RegExp myRegExp to test if a string is a valid pin or not. A valid pin has:
Exactly 4 or 6 characters.
Only numerical characters (0-9).
No whitespace.
 */


const myRegExp = /^\d{4}(?:\d{2})?$/


// Testing

console.log( `For given argument 1234  -> ${myRegExp.test( "1234" )}` );
console.log( `For given argument 45135  -> ${myRegExp.test( "45135" )}` );
console.log(`For given argument 89abc1  -> ${myRegExp.test( "89abc1" )}` );
console.log( `For given argument 900876  -> ${ myRegExp.test( "900876" ) }` );
console.log( `For given argument " 4983"  -> ${ myRegExp.test( " 4983" ) }` );
