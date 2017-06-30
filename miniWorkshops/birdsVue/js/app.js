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

function Bird (name, species, gender, img){
  this.name = name;
  this.species = species;
  this.gender = gender;
  this.img = img;
}

var b3 = new Bird("brown headed cowbird", "cowbird", "male", "https://www.allaboutbirds.org/guide/PHOTO/LARGE/brown_headed_cowbird_4.jpg");

console.log(b3);
