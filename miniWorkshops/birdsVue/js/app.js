var b1 = {
  name: "Western Meadowlark",
  gender: "Male",
  species: "Meadowlark",
  img: ""
};
var b2 = {
  name: "Pygmy Owl",
  gender: "Female",
  species: "Owl",
  img: ""
};
console.log(b1);
console.log(b2);

function Bird (name, species, gender, img, color, predator){
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;
  this.predator = predator ? true : false;
  this.color = color;
}

var b3 = new Bird("brown hheaded cowbird", "cowbird", "male", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/brown_headed_cowbird_4.jpg","brown");
var b4 = new Bird("crested auklet","auklet","male","http://www.birdphotography.com/species/photos/crau-1.jpg","black");
var b5 = new Bird("mexican chickadee","chickadee","female","http://www.birdphotography.com/species/photos/mech-1.jpg","gray","Wolf");
var b6 = new Bird("pelagic cormorant","cormorant","male","http://www.birdphotography.com/species/photos/peco-5.jpg","green");
var b7 = new Bird("american crow","crow","female","http://www.birdphotography.com/species/photos/amcr-6.jpg","black");
var b8 = new Bird("inca dove","dove","male","http://www.birdphotography.com/species/photos/indo-1.jpg","light gray");
var b9 = new Bird("mourning dove","dove","female","http://www.birdphotography.com/species/photos/modo-8.jpg","light gray");
var b10 = new Bird("falcated duck","duck","male","http://www.birdphotography.com/species/photos/fadu-2.jpg","light gray");

console.log(b3, b4, b5, b6, b7, b8, b9, b10);

var title = "Birds ExchangeOgram";

var birds =  new Array();
birds.push(b3, b4, b5, b6, b7, b8, b9, b10);
console.log(birds);


var app = new Vue({
  el: "#app",
  data: {
    title: title,
    birds: birds,
    name: undefined,
    species: undefined,
    gender: undefined,
    img: undefined
  },
  methods: {
    addBird: function (){
      var newBird = new Bird(this.name, this.species, this.gender, this.img);
      this.birds.push(newBird);
      console.log(this.birds);
      this.name="";
      this.species="";
      this.gender="";
      this.img="";
    }
  }
});


// function Predator (name, img,prey,colorOfPrey){
//   this.name = name;
//   this.img = img;
//   this.colorOfPrey= colorOfPrey;
//   this.prey = (Bird.color === Predator.colorOfPrey) ? true: false
// }

// var p1 = new Predator("Wolf","http://knownpeople.net/wp-content/uploads/g/grey-wolf-photos.jpg","black");
// console.log(p1);
