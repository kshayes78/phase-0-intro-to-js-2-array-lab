// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return (cats.push(name)); 
}
//destructivelyAppendCat(name);

function destructivelyPrependCat(name) {
    return (cats.unshift(name))
}
//cats;

function destructivelyRemoveLastCat(name) {
    return (cats.pop(name))
}
//cats;

function destructivelyRemoveFirstCat(name) {
    return (cats.shift(name))
}
//cats;

//function appendCat(name) {
  //  return (cats.splice(2, 0,(name))
//}
//cats;

//const appendCat = [
    //...cats.slice(2, 0), 
     //...cats.slice(2),];
    // cats;
     //appendCat;

//function appendCat(name) {
    //return (cats.slice(2, 0));
    
     // };
    
     // appendCat; 

     function appendCat(name) {
       const newArray = cats.slice();
        newArray.push(name)
        return newArray
      }
        
      appendCat(name); 
      //cats; 
       

      function prependCat(name) {
        const newArray = cats.slice();
       newArray.unshift(name)
         return newArray
       }
         
       prependCat(name); 
       //cats; 

       function removeLastCat() {
       //const newArray = cats.pop();
       //newArray.shift(name)
       const newArray = cats.slice(0, 2);
         return newArray
       }
       //removeLastCat();
      
       function removeFirstCat() {
        //const newArray = cats.pop();
        //newArray.shift(name)
        const newArray = cats.slice(1);
          return newArray
        }
      
      
      
