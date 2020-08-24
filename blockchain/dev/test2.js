//Constructor function or struction function
function User(firstName, lastName, age, gender){
	this.firstName=firstName;
	this.lastName=lastName;
	this.age=age;
	this.gender=gender;

}

//Creating a new user
var user1= new User('john','smith',26,'male');
var user200= new User('Jill','Robinson',25,'female');
User.prototype.emailDomain='@facebook.com';

//Prototype object
User.prototype.getEmailAddress = function() {
	return this.firstName +	 this.lastName + this.emailDomain;
	//WIll return johnsmith@facebook.com
};