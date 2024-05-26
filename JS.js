// document ==> write or access to the HTML file
// console ==> console of html page => exist when Inspect of the html page 
// window ==> window can control and access to the browser

// ** ==> الاسس(القوى التربيعية )
//  
onload = function(){
    document.querySelector('h1').style.color='red';
   
} 

// console.log('hello');
// window.alert('hello welcome');  // we dont use it in total

//  let f=10;
// document.write( f );
 
// let X=" Hello Ferial";
// document.write( X);

var name=' Ferial ';
let age=20;
let X =35;
  // non variable like final in java
// document.write("my name is "+name+" and my age "+ age );
let p= document.write(`my name is ${name} and my age is ${age} ${X}`)
 
document.write( typeof +'5' ); document.write(  Number('5') ); document.write( parseInt ('5') ); // converting 5 string to number
 // consol.log(Number.MAX_VALUE)
 // console.log(Number.isInteger); console.log(Number.isNAN('Mo'-5));
 let d=Math.PI;
document.write(d);