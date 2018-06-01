function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    console.log(this);
    
}

Person.prototype.greeting = function() {
    return `Hi ${this.firstName} ${this.lastName}`;
}

// const p1 = new Person('Madhav', 'Sharma');


// console.log(p1.greeting());
// console.log(p1);

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;

const cust = new Customer('Puneet', 'Tyagi', '123123123', 'Gold');

console.log(cust);

Customer.prototype.greeting = function () {
    return `Hi ${this.firstName} ${this.lastName}.
    Welcome to our company`;
    
}

console.log(cust.greeting());
