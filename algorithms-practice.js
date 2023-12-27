const container = document.querySelector(".container");

const generatePtag = (innerContent) => {
  const pippie = document.createElement("p");
  pippie.innerHTML = innerContent;
  container.appendChild(pippie);
};

//********************************************************************************* //
//* Sum all the numbers in a range with 2 numbers given in or out of sequence
//* Long way
//********************************************************************************* //

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

//********************************************************************************* //
//* Sum all the numbers in a range with 2 numbers given in or out of sequence
//* Short way
//********************************************************************************* //

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
