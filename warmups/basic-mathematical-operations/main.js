//console.log("Hello darkness my old friend");

function basicOp(operator, num1, num2){
  var operator = operator;
  var num1 = num1;
  var num2 = num2;

  if(operator==="+"){
    var result = num1+num2;

  }else if (operator==="-"){
    var result = num1-num2;

  }else if (operator==="*"){
    var result = num1*num2;

  }else if (operator==="/"){
    var result = num1/num2;
  }else if (operator === "%"){
    var result = num1 % num2;
  }
  return result
}

// console.log("Add", basicOp("+",2,5));
// console.log("Subtract", basicOp("-",2,5));
// console.log("Multiply", basicOp("*",2,5));
// console.log("Divide", basicOp("/",2,5));
// console.log("Modulo", basicOp("%",21,5));


//math ops v2

function basicOpV2 (op, num1, num2){
  if(op==="+"){
    return num1 + num2
  }else if (op === "-"){
    return num1 - num2
  }else if (op === "/"){
    return num1 / num2
  }else if (op === "*"){
    return num1 * num2
  }else if (op === "%"){
    return num1 % num2
  }
}

console.log("Add",basicOpV2("+",10,12));
console.log("Subtract",basicOpV2("-",10,12));
console.log("Divide",basicOpV2("/",10,12));
console.log("Multiply",basicOpV2("*",10,12));
console.log("Modulo",basicOpV2("%",10,12));
