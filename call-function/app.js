function Bicycle( model, gear, tyrePressure ){
    this.model = model;
    this.gear = gear;
    this.tyrePressure = tyrePressure;
    this.inflateTyre = function(){
        this.tyrePressure += 3;
    }
}

var bicycle1 = new Bicycle('Atlas', 6, 22);

console.log(bicycle1);
// bicycle1.inflateTyre();
// console.log(bicycle1); //Tyre Inflated

function Mechanic(name){
    this.name = name;
}

var mike = new Mechanic('Mike');

mike.inflateTyre = bicycle1.inflateTyre;

mike.inflateTyre.call(bicycle1);
console.log(mike);
console.log(bicycle1);





