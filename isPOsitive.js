/*
Complete the isPositive function below. It has one integer parameter a . If the value of a is positive, it must
return the string YES. Otherwise, it must throw an Error according to the following rules:
- If a is 0, throw an Error with message = Zero Error.
- If a is negative, throw an Error with message = Negative Error.
 */

function isPOsitive(a){
  if(a < 0){
    throw new Error('Negative Error')
  }else if( a === 0){
    throw  new Error('Zero Error')
  }else{
    return 'Yes'
  }
}

//Testing with some numbers
console.log( isPOsitive( 123 ) );
console.log( isPOsitive( 0 ) );
console.log( isPOsitive( -123 ) );
