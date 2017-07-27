const Vehicle = {
  motor: undefined,
  wheels: undefined,
  type: undefined,
  gear: 0,
  start: false,
  aboutMe: function(){
    console.log("My car is a,", this.type, "with a:", this.motor, "engine and", this.wheels, "wheels.")
  },
  startCar: function(){
    this.start = !this.start;
    (this.start) ? console.log("Car started!") : console.log("Car turned off!");
  },
  shiftUp: function(){
    if(this.start && this.gear < 6){
      this.gear +=1;
      console.log("Current gear: ", this.gear);
    }
    else if(this.start && this.gear === 6 ){
      console.log("Hit max gear.  Cannot upshift!")
    }
    else {
      console.log("Car isn't started, cannont shift gears.")
    }
  },
  shiftDown: function(){
    if(this.start && this.gear > 0){
      this.gear -=1;
      console.log("Current gear:", this.gear);
    }
    else if (this.start && this.gear === 0){
      console.log("You are now in neutral")
    }
    else{
      console.log("Car is not started")
    }
  }
}

Vehicle.type = "Tesla Model S"
Vehicle.wheels = 4
Vehicle.motor="Electric"

Vehicle.aboutMe()
Vehicle.startCar()

for(let i=0; i<10; i++){
  Vehicle.shiftUp()
}
for(let i=0; i<10; i++){
  Vehicle.shiftDown()
}

Vehicle.startCar()
