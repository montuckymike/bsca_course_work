function roll (){
  return {d1: Math.floor(Math.random()*6+1),
          d2: Math.floor(Math.random()*6+1)};
}

function checker (){
  var newRoll = roll();
  if ((newRoll.d1 + newRoll.d2) === 7 || (newRoll.d1 + newRoll.d2) === 11){
    console.log("You loose!", newRoll.d1, newRoll.d2,"I rolled: ",(newRoll.d1+newRoll.d2));
  }else {
    console.log ("I keep going", newRoll.d1, newRoll.d2,"I rolled: ",(newRoll.d1+newRoll.d2))
  }
}
checker();
