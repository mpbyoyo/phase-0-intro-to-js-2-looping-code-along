// Code your solutions in this file
const writeCards = (arr) => {
  let i = 0;
  while (i < arr.length) {
    arr[i] = `Thank you, ${arr[i]}, for the wonderful surprise gift!`;
    i++;
  }
  return arr;
}

const countDown = () => {
  for (let i = 0; i<11; i++) {
    console.log(i)
  }
}