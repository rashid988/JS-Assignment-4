////////Validate Email Address

//regular expression method
var input = prompt("Enter email address : \n a. This string must contain @ \n b. This string must contain chars \n c. @ must have at least 1 char in front \n d. This string must contain . (dot) after @ and atleast 1 char");
var regex = /^([a-z0-9\.-]+)@([a-z0-9 -]+).([a-z]{2, 8})(.[a-z]{2, 8})?$/; //? makes the last bracket optional
//            ^------------^ ^-----------^ ^-----------^^------------^

if (regex == input) {
    alert("Valid Email Address");
}
else {
    alert("InValid");
}
