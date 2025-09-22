const usrInput = process.argv.slice(2);

let array = usrInput[0].split(" ");
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const pigArray = [];

for (let i = 0; i < array.length; i++) {
  if (vowels.includes(array[i][0])) {
    pigArray.push(array[i] + "way");
  } else if (vowels.includes(array[i][1])) {
    pigArray.push(array[i].slice(1) + array[i][0].toLowerCase() + "ay");
  } else {
    pigArray.push(
      array[i].slice(2) + array[i].slice(0, 2).toLowerCase() + "ay"
    );
  }
}

console.log("English: ", usrInput[0]);
console.log("Pig Latin: ", pigArray.join(" "));
