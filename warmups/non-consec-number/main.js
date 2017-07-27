let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 14]

// find the first non-consecutive number
// print out the two non consecutive num and their positions in the array

function nonConseNumber (){
  for (i = 1; i < numbers.length; i++){
    if (numbers[i] - numbers[i-1] != 1) {
      console.log(numbers[i-1] , numbers[i]);
      break;
    }
  }
}

nonConseNumber (numbers);
