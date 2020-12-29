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