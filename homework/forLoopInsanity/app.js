// RULES:
// loops must be encapsulated in a function
// Array can not be hard coded (pass the array to the function)
// When challenge is passed, comment or delete just the function call (dont clutter your console)

// challenge One
// loop through the names array, and print names that being with the letter 'A'
// bonus: Allow your function to accept the Letter, as a parameter



          // var names = ["Aaron", "Anthony", "Al", "Bob", "Carl", "Cindy", "Derek", "Don", "Frank", "Percil", "Taryn"];
          // var letter ="";
          // function nameSearch (){
          //   for (var i = 0; i<names.length;i++){
          //     if (names[i].startsWith(letter))
          //     console.log("This name stats with ",letter, ": ",names[i]);
          //   }
          // }
          //
          // letter = "B";
          // nameSearch(names);


// challenge Two
// loop through the numbers array, and print numbers greater than 10
// bonus: Allow your function to accept the comparison Number, as a parameter



              // var numbers = [1, 3, 5, 6, 7, 14, 17, 18, 19 ,25, 26, 36, 39, 45, 53, 67, 73, 84, 99]
              // var greaterNum = 10;
              //
              // function greaterThan (){
              //   for (var j=0; j<numbers.length; j++){
              //     if (numbers[j]>=greaterNum)
              //     console.log("This number is greater/equal to ",greaterNum,": ",numbers[j])
              //   }
              // }
              //
              // greaterNum = 50;
              // greaterThan(numbers);



// challenge Three
// loop through the numbers array, and print numbers greater than 10, but less than 50

        // var numbers = [1, 3, 5, 6, 7, 14, 17, 18, 19 ,25, 26, 36, 39, 45, 53, 67, 73, 84, 99]
        // var greaterNum = 10;
        // var lesserNum = 50;
        //
        // function greaterThan (){
        //   for (var j=0; j<numbers.length; j++){
        //     if (numbers[j]>=greaterNum  && numbers[j]<= lesserNum)
        //
        // //add some sort of else if thingy here to accomplish this - - - -
        //
        //
        //     console.log("This number is greater/equal to ",greaterNum,", but less/equal to: ",lesserNum,": ",numbers[j])
        //   }
        // }
        // lesserNum=50;
        // greaterNum = 10;
        // greaterThan(numbers);






// bonus: Only print the odd numbers that meet these conditions

              // var numbers = [1, 3, 5, 6, 7, 14, 17, 18, 19 ,25, 26, 36, 39, 45, 53, 67, 73, 84, 99]
              // var greaterNum = 10;
              // var lesserNum = 50;
              //
              // function greaterThan (){
              //   for (var j=0; j<numbers.length; j++){
              //     if (numbers[j]>=greaterNum  && numbers[j]<= lesserNum && numbers[j]%2 !==0)
              //
              // //add some sort of else if thingy here to accomplish this - - - -
              //
              //
              //     console.log("This number is greater/equal to ",greaterNum,", but less/equal to: ",lesserNum,", and is Odd: ",numbers[j])
              //   }
              // }
              // lesserNum=50;
              // greaterNum = 10;
              // greaterThan(numbers);





/// i%2 !==0 gives odd numbers back!!!!! i%2 == 0 gives EVEN



// challenge Four
// loop through the array of random items, and print ONLY Numbers
// bonus: Tell the function to return numbers, or strings, as a parameter


        // var randomItems = [1, "Hello", 5, "GoodBye", 7, 14, "Aloha", 18, 19 ,"Adios", 26, 36, "Ciao"];
        //
        // function findNums (){
        //   for (v=0; v<randomItems.length; v++){
        //     if (!isNaN(randomItems[v])){
        //       console.log("Should be a number: ",randomItems[v])
        //     }
        //   }
        // }
        // findNums(randomItems);
        //
        // var randomItems = [1, "Hello", 5, "GoodBye", 7, 14, "Aloha", 18, 19 ,"Adios", 26, 36, "Ciao"];
        //
        // function findNums (){
        //   for (v=0; v<randomItems.length; v++){
        //     if (isNaN(randomItems[v])){
        //       console.log("Should be a String: ",randomItems[v])
        //     }
        //   }
        // }
        // findNums(randomItems);


// challenge Five
// loop through the array of customer objects, and print ONLY their names
              //
              // var customers = [
              // 	{name: "Aaron", email: "aaron@gmail.com", tier: "gold", paid: true},
              //   {name: "Anthony", email: "anthony@gmail.com", tier: "silver", paid: true},
              // 	{name: "Al", email: "al@gmail.com", tier: "bronze", paid: false},
              // 	{name: "Bob", email: "bob@gmail.com", tier: "gold", paid: true},
              // 	{name: "Carl", email: "carl@gmail.com", tier: "bronze", paid: true},
              // 	{name: "Cindy", email: "cindy@gmail.com", tier: "gold", paid: true}
              // ];
              //
              // function findNames (customerName){
              //   for (var i=0; i<customers.length;i++){
              //     console.log("Should be a name: ",customerName[i].name)
              //   }
              // }
              // findNames(customers);

// bonus: Print only customer names that begin with the letter 'A'


              // var customers = [
              // 	{name: "Aaron", email: "aaron@gmail.com", tier: "gold", paid: true},
              //   {name: "Anthony", email: "anthony@gmail.com", tier: "silver", paid: true},
              // 	{name: "Al", email: "al@gmail.com", tier: "bronze", paid: false},
              // 	{name: "Bob", email: "bob@gmail.com", tier: "gold", paid: true},
              // 	{name: "Carl", email: "carl@gmail.com", tier: "bronze", paid: true},
              // 	{name: "Cindy", email: "cindy@gmail.com", tier: "gold", paid: true}
              // ];
              // var letter = "";
              //
              // function findNames (customerName){
              //   for (var i=0; i<customers.length;i++){
              //     if((customerName[i].name).startsWith(letter)){
              //       console.log("Should be a name that starts with ",letter,": ",customerName[i].name)
              //     }
              //   }
              // }
              // letter = "A";
              // findNames(customers);


// challenge Six
// loop through the array of customers, and print ONLY customers that are 'gold' and 'paid'
var customers = [
	{name: "Aaron", email: "aaron@gmail.com", tier: "gold", paid: false},
  // I changed Aaron to paid: fales to see if it worked, and it did!
  {name: "Anthony", email: "anthony@gmail.com", tier: "silver", paid: true},
	{name: "Al", email: "al@gmail.com", tier: "bronze", paid: false},
	{name: "Bob", email: "bob@gmail.com", tier: "gold", paid: true},
	{name: "Carl", email: "carl@gmail.com", tier: "bronze", paid: true},
	{name: "Cindy", email: "cindy@gmail.com", tier: "gold", paid: true}
];


function findNames (customer){
  for (var i=0; i<customers.length;i++){
    if(customer[i].tier === "gold" && customer[i].paid === true ){
      console.log("The following customers have Paid & are Gold: ",customer[i].name)
    }
  }
}

findNames(customers);

// bonus: Return a completely new array that meets these conditions.
