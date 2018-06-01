// function Person(fName, lName){
//     this.fName = fName;
//     this.lName = lName;
// }

// Person.prototype.fullName = function(){
//     console.log(this.fName +  this.lName);
// }

// const p = Person('madhab', 'sharma');

// console.log(p);
// // p.fullName(); 


function Person(name,age) {
    this.name = name;
    this.age = age;

    this.details1 = function () {
        console.log(this.name + this.age);
        
    }
}

Person.prototype.count = 0;

Person.prototype.details = function () {
    this.count += 1;
    console.log("111" + this.name + "  " + this.count);
    
}

const p = new Person('Madhav', 1);
const p2 = new Person('Shruti', 2);

p.details()
p2.details()



