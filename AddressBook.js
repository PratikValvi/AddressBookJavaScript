class Person {
    id;
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    mobileNumber;
    email;

    constructor (id,firstName,lastName,address,city,state,zip,mobileNumber,email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    get id() { return this.id }

    set newId(id) {
        if (validateId(id)) {
            this.id = id;
        } else {
            throw "ID is not valid";
        }
    }

    get firstName() { return this.firstName }

    set newFirstName(firstName) {
        if (validateFirstName(firstName)) {
            this.firstName = firstName;
        } else {
            throw "First Name is not valid";
        }
    }

    get lastName() { return this.lastName }

    set newLastName(lastName) {
        if (validateLastName(lastName)) {
            this.lastName = lastName;
        } else {
            throw "Last Name is not valid";
        }
    }

    get address() { return this.address }

    set newAddress(address) {
        if (validateAddress(address)) {
            this.address = address;
        } else {
            throw "Address is not valid";
        }
    }

    get city() { return this.city }

    set newCity(city) {
        if (validateCity(city)) {
            this.city = city;
        } else {
            throw "City name is not valid";
        }
    }

    get state() { return this.state }

    set newState(state) {
        if (validateState(state)) {
            this.state = state;
        } else {
            throw "State name is not valid";
        }
    }

    get zip() { return this.zip }

    set newZip(zip) {
        if (validateZip(zip)) {
            this.zip = zip;
        } else {
            throw "Zip Code is not valid";
        }
    }

    get mobileNumber() { return this.mobileNumber }

    set newMobileNumber(mobileNumber) {
        if (validateMobileNumber(mobileNumber)) {
            this.mobileNumber = mobileNumber;
        } else {
            throw "Mobile Number is not valid";
        }
    }

    get email() { return this.email }

    set newEmail(email) {
        if (validateEmail(email)) {
            this.email = email;
        } else {
            throw "Email is not valid";
        }
    }    

    toString() {
        return "\nID            : " + this.id + 
        "\nFirst Name    : " + this.firstName +
        "\nLast Name     : " + this.lastName +
        "\nAddress       : " + this.address +
        "\nCity          : " + this.city +
        "\nState         : " + this.state +
        "\nZip           : " + this.zip +
        "\nMobile Number : " + this.mobileNumber +
        "\nEmail         : " + this.email;
    }
}

function validateId(id) {
    let idPattern = RegExp("^[1-9]{1,}$");
    if (idPattern.test(id)) {
        return true;
    } else {
        throw "ID is not valid";
    }
}

function validateFirstName(firstName) {
    let firstNamePattern = RegExp("^[A-Z]{1,}[a-z]{2,}$");
    if (firstNamePattern.test(firstName)) {
        return true;
    } else {
        throw "First Name is not valid";
    }
}

function validateLastName(lastName) {
    let lastNamePattern = RegExp("^[A-Z]{1,}[a-z]{2,}$");
    if (lastNamePattern.test(lastName)) {
        return true;
    } else {
        throw "Last Name is not valid";
    }
}

function validateAddress(address) {
    let addressPattern = RegExp("[A-Za-z]{4,}$");
    if (addressPattern.test(address)) {
        return true;
    } else {
        throw "Address is not valid";
    }
}

function validateCity(city) {
    let cityPattern = RegExp("^[A-Z]{1,}[a-z]{3,}$");
    if (cityPattern.test(city)) {
        return true;
    } else {
        throw "City name is not valid";
    }
}

function validateState(state) {
    let statePattern = RegExp("^[A-Z]{1,}[a-z]{3,}$");
    if (statePattern.test(state)) {
        return true;
    } else {
        throw "State name is not valid";
    }
}

function validateZip(zip) {
    let zipPattern = RegExp("^[0-9]{6}$");
    if (zipPattern.test(zip)) {
        return true;
    } else {
        throw "Zip Code is not valid";
    }
}

function validateMobileNumber(mobileNumber) {
    let mobileNumberPattern = RegExp("((91){1})[ ]([98765]{1})([0-9]{9})$");
    if (mobileNumberPattern.test(mobileNumber)) {
        return true;
    } else {
        throw "Mobile Number is not valid";
    }
}

function validateEmail(email) {
    let emailPattern = RegExp("^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$");
    if (emailPattern.test(email)) {
        return true;
    } else {
        throw "Email is not valid";
    }
}

console.log("<<<<<Welcome to AddressBook Application>>>>>");

//UC1 - Ability to Add Contact in Address Book
let pratik = new Person(1,"Pratik","Valvi","Sadar Bazar","Satara","Maharashtra",415001,"91 9595260222","pratik.valvi@gmail.com");
console.log(pratik.toString());

//UC2 - Ability to ensure valid Contact is Added in Address Book
var id = 2;
var firstName = "Pranav";
var lastName = "Valvi";
var address = "Sadar Bazar";
var city = "Satara";
var state = "Maharashtra";
var zip = 415001;
var mobileNumber = "91 8862007111";
var email = "pranav.valvi@gmail.com";
try {
    if (validateId(id)&&validateFirstName(firstName)&&validateLastName(lastName)&&validateAddress(address)&&validateCity(city)&&validateState(state)&&validateZip(zip)&&validateMobileNumber(mobileNumber)&&validateEmail(email)) {
        var pranav = new Person(id,firstName,lastName,address,city,state,zip,mobileNumber,email);
        console.log(pranav.toString());
    }
} catch (error) {
    console.log(error);
}

//UC3 - Ability to create Address Book Array & Add Contacts to Array
var addressBook = new Array();
addressBook.push(pratik);
addressBook.push(pranav);
console.log("\n**********Display Contacts**********");
console.log(addressBook);

//UC4 - Ability to Search & Modify existing Contact
const prompt = require('prompt-sync')({sigint: true});
console.log("\n**********Update Contact**********");
var input = prompt("Enter First Name to Search Contact: ");
var status = false;
addressBook.forEach(person => {
    if (person.firstName == input) {
        console.log("\nContact found!");
        status = true;
        console.log("1. Update ID" +
                    "\n2. Update First Name" +
                    "\n3. Update Last Name" +
                    "\n4. Update Address" +
                    "\n5. Update City" +
                    "\n6. Update State" +
                    "\n7. Update Zip" +
                    "\n8. Update Monile Number" +
                    "\n9. Update Email" +
                    "\nPress any key to Exit")
        var option = prompt("Enter number to select option: ");
        switch (option) {
            case "1":
                input = prompt("Enter New ID: ");
                try {
                    person.newId = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "2":
                input = prompt("Enter New First Name: ");
                try {
                    person.newFirstName = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "3":
                input = prompt("Enter New Last Name: ");
                try {
                    person.newLastName = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "4":
                input = prompt("Enter New Address: ");
                try {
                    person.newAddress = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "5":
                input = prompt("Enter New City: ");
                try {
                    person.newCity = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "6":
                input = prompt("Enter New State: ");
                try {
                    person.newState = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "7":
                input = prompt("Enter New Zip: ");
                try {
                    person.newZip = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "8":
                input = prompt("Enter New Mobile Number: ");
                try {
                    person.newMobileNumber = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "9":
                input = prompt("Enter New Email: ");
                try {
                    person.newEmail = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
        
            default:
                console.log("Nothing modified !!");
                break;
        }
    }
});

if (!status) {
    console.log("Contact not found !!!");
}

//UC5 - Ability to Search & Delete existing Contact
console.log("\n**********Remove Contact**********");
var input = prompt("Enter First Name to Search Contact: ");
var status = false;
addressBook.forEach(person => {
    if (person.firstName == input) {
        console.log("\nContact found!");
        status = true;
        var option = prompt("Press 'Y' to remove Contact & any key to exit ");
        if ((option == "Y") ||(option == "y")) {
            var index = addressBook.indexOf(person);
            if (index > -1) {
                addressBook.splice(index,1);
                console.log("Contact Removed Successfully !!")
                console.log("\n*********Display Contacts**********");
                console.log(addressBook);
            }
        }
    }
});

if (!status) {
    console.log("Contact not found !!!");
}