var baseballPlayers = [
{ name: "Barry Bonds", HR: 763, team: "San Francisco Giants", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Barry_Bonds_2006-05-08.jpg/440px-Barry_Bonds_2006-05-08.jpg" },
{ name: "Hank Aaron", HR: 755, team: "Atlanta Braves", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Hank_Aaron_-_Baseball_HOF_Induction_2013.jpg/500px-Hank_Aaron_-_Baseball_HOF_Induction_2013.jpg" },
{ name: "Babe Ruth", HR: 714, team: "New York Yankees", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Babe_Ruth2.jpg/512px-Babe_Ruth2.jpg" },
{ name: "Alex Rodriguez", HR: 696, team: "New York Yankees" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Alex_Rodriguez_2008-04-19.jpg/550px-Alex_Rodriguez_2008-04-19.jpg" },
{ name: "Carlton Fisk", HR: 376, team: "Boston Red Sox" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Carlton_Fisk_-_Baseball_HOF_Induction_2013.jpg/440px-Carlton_Fisk_-_Baseball_HOF_Induction_2013.jpg" },
{ name: "Rocky Colavito", HR: 376, team: "Cleveland Indians" , img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Rocky_Colavito_1959.png" },
{ name: "Gil Hodges" , HR: 370, team: "Los Angeles Dodgers" , img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Gil_Hodges_1960.png" },
{ name: "Willie Mays" , HR: 660, team: "San Francisco Giants", img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Willie_Mays_cropped.jpg"},
{ name: "George Kenneth Griffey Jr.", HR: 630, team: "Seattle Mariners" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Ken_Griffey%2C_Jr._June_2009.jpg/500px-Ken_Griffey%2C_Jr._June_2009.jpg" },
{ name: "Jim Thome", HR: 612, team: "Cleveland Indians" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jim_Thome_2008.jpg/440px-Jim_Thome_2008.jpg"},
{ name: "Samuel Kelvin Peralta Sosa", HR: 609, team: "Chicago Cubs", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Sosa_swinging4.png/440px-Sosa_swinging4.png"},
{ name: "Albert Pujols", HR: 605, team: "Los Angeles Angels" , img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Albert_Pujols_on_April_14%2C_2012.jpg/500px-Albert_Pujols_on_April_14%2C_2012.jpg"},
{ name: "Frank Robinson", HR: 586, team: "Cleveland Indians", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Frank_Robinson.jpg/440px-Frank_Robinson.jpg"},
{ name: "Mark McGuire", HR: 583, team: "St. Louis Cardinals", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mark_McGwire_on_April_20%2C_2013.jpg/480px-Mark_McGwire_on_April_20%2C_2013.jpg"},
{ name: "Harmon Killebrew", HR: 573, team: "Minnesota Twins",img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Harmon_Killebrew_1962.png/440px-Harmon_Killebrew_1962.png"},
{ name: "Rafael Palmeiro", HR: 549, team: "Baltimore Orioles", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Rafael_Palmeiro_2003.jpg/440px-Rafael_Palmeiro_2003.jpg"},
{ name: "Reggie Jackson", HR: 563, team: "Oakland Athletics", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Reggie_Jackson_at_Dodger_Stadium_2010.jpg/440px-Reggie_Jackson_at_Dodger_Stadium_2010.jpg"},
{ name: "Manny Ramirez", HR: 555, team: "Cleveland Indians", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Manny_Ramirez.JPG/500px-Manny_Ramirez.JPG"},
{ name: "Mickey Mantle", HR: 536, team: "New York Yankees", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mickey_Mantle_1953.jpg/440px-Mickey_Mantle_1953.jpg"},
{ name: "Chipper Jones", HR: 468, team: "Atlanta Braves", img: "https://upload.wikimedia.org/wikipedia/commons/4/40/Chipper_jones_4-18-12.jpg"},
];
console.log("You found app.js");

var app = new Vue ({
  el: "#app",
  data: {
    title: "Baseball Vue App",
  players: baseballPlayers
  }
});
