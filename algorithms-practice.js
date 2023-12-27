const container = document.querySelector(".container");

const generatePtag = (innerContent) => {
  const pippie = document.createElement("p");
  pippie.innerHTML = innerContent;
  container.appendChild(pippie);
};
//********************************************************************************** //
//*                                   NUMBER 1                                     * //
//*   Sum all the numbers in a range with 2 numbers given in or out of sequence    * //                                    * //
//********************************************************************************** //

//* Long way

const sumLongWay = (arr1) => {
  arr1.sort((a, b) => a - b);
  let min = arr1[0];
  let max = arr1[1];
  let total1 = 0;
  for (let i = min; i <= max; i++) {
    total1 += i;
  }
  return total1;
};

generatePtag(
  `Sum the numbers between 8 and 17 the long way &#8594; ${sumLongWay([17, 8])}`
);

//* Short way

const sumShortWay = (arr2) => {
  let total2 = 0;
  for (let i = Math.min(...arr2); i <= Math.max(...arr2); i++) {
    total2 += i;
  }
  return total2;
};

generatePtag(
  `Sum the numbers between 3 and 21 the short way &#8594; ${sumShortWay([
    3, 21,
  ])}`
);

//********************************************************************************* //
//*                                      NUMBER 2                                 * //
//*                  Return the symmetric differences between 2 arrays            * //
//********************************************************************************* //

//* Long way

const symDiff = (array1, array2) => {
  const COMBINEDVALUES = new Set([...array1, ...array2]);
  const DIFFARRAY = [];
  for (element of COMBINEDVALUES) {
    array1.includes(element) && !array2.includes(element)
      ? DIFFARRAY.push(element)
      : array2.includes(element) && !array1.includes(element)
      ? DIFFARRAY.push(element)
      : null;
  }
  return DIFFARRAY;
};

const firstArray = [11, 2, 15, 20, 7, 33, 9, 8, 29];
const secondArray = [7, 10, 8, 13, 20, 29, 2, 16];

generatePtag(
  `Return the symmetric differences between 2 arrays - Long way &#8594; 
    ${symDiff(firstArray, secondArray)}`
);

//* Short way

const arr1 = [7, 28, 44, 10, 5, 8, 33, 19, 3];
const arr2 = [28, 3, 5, 18, 12, 19, 7, 11, 10, 15, 8];

const diff1 = arr1.filter((item) => !arr2.includes(item));
const diff2 = arr2.filter((item) => !arr1.includes(item));
const result = [...diff1, ...diff2];
result.sort((a, b) => a - b);

generatePtag(
  `Return the symmetric differences between 2 arrays - Short way &#8594; ${result}`
);

//********************************************************************************* //
//*                                      NUMBER 3                                 * //
//*                                 Capitalize a single word                      * //
//********************************************************************************* //

let word = "interesting";
word = `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

generatePtag(`The word capitalize is now &#8594; ${word}`);

//********************************************************************************* //
//*                                      NUMBER 4                                 * //
//*                        Capitalize each word in a sentence                     * //
//********************************************************************************* //

const sentence = "we know that eating healthy works out well";

const words = sentence.split(" ");

for (let i = 0; i < words.length; i++) {
  words[i] = `${words[i][0].toUpperCase()}${words[i].slice(1)}`;
}

const newSentence1 = words.join(" ");

generatePtag(
  `The sentence with each word capitalize is now &#8594; ${newSentence1}`
);
