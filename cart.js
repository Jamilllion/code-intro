///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce( (temp, x) => { this is callback fuction passed into reduce()
    return temp + x.price;
     }, 0);
    
    console.log(sum)

// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

function calcFinalPrice(cartTotal, couponValue, tax) {
    // calculate the tax on the cartTotal
    const taxAmount = cartTotal * tax;
  
    // add the tax to the cartTotal
    const totalWithTax = cartTotal + taxAmount;
  
    // subtract the value of the coupon
    const finalTotal = totalWithTax - couponValue;
  
    // return the final number
    return finalTotal;
  }





//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
User Id: To be able to differenciate between customers
Item list: To store the different types of items the customers want to purchase
Delivery address: To collect the information of the address of where things should be delivered
Promocode: To be able to apply any available promo codes
Free offer items: To store information of items that are given for free
Payment method: To store payment methods like card or a digital wallet like applepay.

User Id: Needs to be a String type since user id is a combination of characters.
Item list: Needs to be a object of list of String. Each string will signify the product id of the things being purchased.
Delivery address: Needs to be an Object to be able to have a section for apt number, city, state, country.
Promocode: String type to store all the different promocodes
Free offer items: Each offer needs to be an object of list of String but it is not added to the total
Payment details: It can be an enumerator or enum to provide the mode of payment

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE