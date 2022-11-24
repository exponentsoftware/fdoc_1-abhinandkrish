{/*1.a. Write a function which count the number of occurrence 
of words in a paragraph or a sentence.The function `countWords`
 takes a paragraph and two words as parameters. It compare  which
  word is most frequently occurred in the paragraph. */}

const countWords =  (paragraph, w1, w2) =>{
   const paraArray =paragraph.split(" ")
   const word1Array = paraArray.filter(word => word ===w1)
   const word2Array = paraArray.filter(word => word ===w2)
   if(word1Array.length > word2Array.length) {
      return `${w1} appears more than ${w2}`
   } else {
      return `${w2} appears more than ${w1}`
   };
}

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.'
console.log("1.a)",countWords(paragraph,'love', 'you'));

{/**1.b. Write a function called ***cleanText***. 
The function takes raw text as a parameter and returns the clean text. */}
const cleanText = (sentence) => { 
   var cleanString = sentence.replace(/[&$%@!#:;]/g, "");
   return cleanString;
 }

 const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;


console.log(`1.b)`,cleanText(sentence));

{/**1.c. After cleaning the text in the sentence from question number 
b you will get the following text. Count the number of words in this text. 
Don't include words with only one letter.
 */}
const countBigWords = (sentence) => { 
   let  paraArray =sentence.split(" ")
   paraArray = paraArray.filter(word => word.length > 1)
   return paraArray.length
 }
 console.log("1.c)",countBigWords(cleanText(sentence)));

 {/**1.d. How many words were used to construct this sentence.
 Now, don't exclude one letter words. */}

 const varietyOfWords = (sentence) => { 
   sentence =  (sentence.replace(/[?.,]/g, "")).toLowerCase()
   let  paraArray =sentence.split(" ")
   let wordCount = {}
   for (let word of paraArray) {
      wordCount[word] = wordCount[word] + 1 || 1;
      }
      // paraArray = paraArray.filter(word => word !== );
      return Object.keys(wordCount).length;   
  }
 console.log("1.d)",varietyOfWords(cleanText(sentence)))
