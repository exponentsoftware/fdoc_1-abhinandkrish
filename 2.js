{/**2.a. Looping a triangle: Write a loop that makes seven calls to console.log
 to output the following triangle:
```js
#
##
###
####
#####
######
####### */}
const n = 7
const pyramid = (n) => { 
   let p ="";
   for (let i =1; i<=(n); i++ ){
      let l = "";
      for (let j = 1; j<=i; j++){
         l+="#"
      }
      p = p+ `${l}\n`
   }
   return p;
 }
console.log(`2.a)\n${pyramid(7)}`)


{/**2.b. Write a function which returns array of seven random numbers
 in a range of 0-9. All the numbers must be unique */}

const randomNumbers = (n, limit) => { 
   let arr =[]
   for (let i= arr.length; i<= n ; i++){
      let arrElement = Math.floor(Math.random()*limit);
      if (!arr.includes(arrElement)){
         arr.push(arrElement)
      } 
   }
   return arr;
}
console.log("2.b)",randomNumbers(7, 9))

{/**2c. Reversing an array: Arrays have a reverse method
 which changes the array by inverting the order in which its elements appear.
 For this exercise, write a function, reverseArray. The  reverseArray, takes an 
 array as argument and produces a new array that has the same elements in the inverse
 order. Without reverse method */}

const reverseArray = (arr) => { 
   let revArr = [];
   for (let i= 0; i<arr.length; i++){
      revArr.unshift(arr[i])
   };
   return revArr;
}
console.log("2.c)",reverseArray(["A", "B", "C"]));

{/**2.d. Write a function which check if items of an array are unique? */}
const checkUniqueness = (arr) => { 
   let unique = true; 
   for (let i =0; i < arr.length; i++){
      for (let j = i+1; j<arr.length; j++){
         if (arr[i] === arr[j]){
            unique = false;
         };
      };
   }
   return unique;
}
const arrOne = [1, 4, 6, 2, 3];
console.log("2.d)",checkUniqueness(arrOne));

