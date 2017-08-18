const testString = 'abcbcababcdbc'

const lcs = (string) => {
    let max = 0, current_string = "", i, char, pos;

    for (i = 0; i < testString.length; i += 1) {
        char = testString.charAt(i);
        pos = current_string.indexOf(char);
        if (pos !== -1) {
            // cut "dv" to "v" when you see another "d"
            current_string = current_string.substr(pos + 1);
        }
        current_string += char;
        max = Math.max(max, current_string.length);
    }
    return max;
}

console.log(lcs(testString))

//
// function findLongestSubString(testString){
//   let chars = testString.split("");
//   let currentCharacter;
//   let string = "";
//   let longestString = "";
//   let hash = {};
//   for(let i=0; i < chars.length; i++){
//     currentCharacter = chars[i];
//   if(!hash[chars[i]])
//   {
//     string += currentCharacter;
//     hash[chars[i]] = {index:i};
//   }
//   else {
//     if(longestString.length <= str.length)
//     {
//       longestString = string;
//     }
//   let prevDupeIndex = hash[currentCharacter].index;
//   let stringFromPrevDupe = input.substring(prevDupeIndex + 1, i);
//   string = stringFromPrevDupe + currentCharacter;
//   hash = {};
//   for(var j=prevDupeIndex + 1; j <=i; j++){
//     hash[input.charAt(j)] = {index:j};
//   }
// }
//   }
// return longestString.length > string.length ? longestString : str;
// }
// console.log(findLongestSubString);
