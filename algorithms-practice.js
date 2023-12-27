const container = document.querySelector(".container");

const generatePtag = (innerContent) => {
  const pippie = document.createElement("p");
  pippie.innerHTML = innerContent;
  container.appendChild(pippie);
};

//********************************************************************************* //
//* NUMBER 1
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

generatePtag(`Sum the numbers between 8 and 17 the long way &#8594;
${sumLongWay([17, 8])}`);
