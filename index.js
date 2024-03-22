// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;

}

/* setBestCustomer(): Write a function that
 when called, declares a variable called bestCustomer in 
 global scope and assigns it to be 'not bob'. (Poor Bob.) Also, poor us, d
 eclaring a global variable from inside a function is one of those things we would never 
want to do normally, but is good for us to explore right now. */

var bestCustomer;
function setBestCustomer() {
    bestCustomer = bestCustomer = 'not bob';
    return bestCustomer;
    };

function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob';
} 

const leastFavoriteCustomer = "";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "KEllY"
}