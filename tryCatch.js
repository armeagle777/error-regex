/*
    Convert the code using try...catch.
      function reverseString(s) {
        typeof s !== "string"
        ? console.log("s.split is not a function")
        : (s = s.split("").reverse().join(""));
        console.log(s);
      }
 */


function reverseString(s){
  try{
    console.log( s.split( '' ).reverse().join( '' ) );
  }catch(err){
    console.log(err.message)
  }
}



//Testing revereseString function with some arguments
reverseString('1234')
reverseString(1234)
reverseString([1234, 234])


