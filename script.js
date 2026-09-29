// LOGICAL OPERATORS

// 1. && operator
let weather1 = (10 > 5) && (20 > 15);
console.log(weather1);


// 2. && operator
let weather2 = (10 > 15 && 20 > 10)
console.log(weather2);


// 3. || operator
let weather3 = (10 > 20 || 15 > 10)
console.log(weather3);


// 4. || operator
let weather4 = (5 > 10 || 20 < 15)
console.log(weather4);

// 5. ! operator
let operator1 = !(10 > 5);
console.log(operator1);


// 6. ! operator
let operator2 = !(10 < 5)
console.log(operator2);


// 7. && and || together
let weather7 = (10 > 5 && 20 > 15);
let weather8 = (5 > 10 || 20 < 15)
console.log(weather7);
console.log(weather8)


// 8. &&, || and ! together
let weather = (10 > 5 && 20 > 15) || !(5 > 10);
console.log(weather);



// TERNARY OPERATOR

// 9. Age eligibility
let age = 20;
let eligibility = (age >= 18) ? "Eligible" : "Not Eligible";
console.log(eligibility)


// 10. Marks
let marks = 40;
let result = (10 >= 35 )? "Pass" : "Fail";
console.log(result)


// 11. Number greater than 10
let number = 15;
let number1=(11 > 10) ? "Greater than 10" : "Not greater than 10";
console.log(number1)

// 12. Even or Odd
let number2 = 8;
let oddnumber = (12 % 2 === 0 )? "Even" : "Odd";
console.log(oddnumber)


// 13. Salary
let salary = 40000;
let salary1 = (salary > 30000 )? "Good Salary" : "Low Salary";
console.log(salary1)


// CONCATENATION & TEMPLATE STRINGS

// 14. First name, last name and city
let firstName = "Krish";
let lastName = "Prince";
let city = "Rasipuram";

console.log(firstName + " " + lastName + " " + city);


// 15. Name and age
let name = "Krish";
let age1 = 26;

console.log("My name is " + name + " and I am " + age1+ " years old.")


// 16. Product, price and brand
let product = "RC car";
let price = 2500;
let brand = "Torzan";

console.log("Product: " + product + ", Price: ₹" + price + ", Brand: " + brand);


// 17. Template string
let name1 = "Krish";
let qualification = "BA";
let company = "Stackly";

console.log(`My name is ${name1}. I completed ${qualification} and I work at ${company}.`);


// 18. Template string
let name2 = "Krish";
let age2 = 26;
let city2 = "Rasipuram";

console.log(`My name is ${name2}, I am ${age2} years old, and I live in ${city2}.`);


// TYPE CASTING - IMPLICIT

// 19. String + Number
let result1 = "10" + 5;
console.log(result1);
console.log(typeof result1);


// 20. Number + Number
let result2= 15 + 5;
console.log(result2);
console.log(typeof result2);


// 21. Number + true
let result3 = 20 + true;
console.log(result3);
console.log(typeof result3);


// 22. Number + null
let result4 = 25 + null;
console.log(result4);
console.log(typeof result4);


// 23. String + true
let result5 = "Hello " + true;
console.log(result5);
console.log(typeof result5);


// 24. String + Array
let result6 = "Hello " + [1, 2, 3];
console.log(result6);
console.log(typeof result6);


// 25. Number + Object
let result7 = 30 + {};
console.log(result7);
console.log(typeof result7);


// 26. Three different expressions
let result8a = "10" + 5;
let result8b = 20 + true;
let result8c = 30 + null;

console.log(result8a, typeof result8a);
console.log(result8b, typeof result8b);
console.log(result8c, typeof result8c);



// TYPE CASTING - EXPLICIT

// 27. String to Number
let hundred = Number("100");
console.log(hundred);

// 28. String to Number + typeof
let twentyfive = Number("25");
console.log(twentyfive);
console.log(typeof twentyfive);


// 29. true to Number
let value = true;
let value1= (Number(value));
console.log(value1);

// 30. false to Number
let value2 = false;
let value3= (Number(value2));
console.log(value3);


// 31. Empty string to Number
let value4 = "";
let value5= (Number(value4));
console.log(value5)


// 32. null to Number
let value6 = null;
let value7= (Number(value6));
console.log(value7)


// 33. undefined to Number
let uvalue = undefined;
let uvalue1 = (Number(undefined));
console.log(uvalue1);


// 34. "Hello" to Boolean
let boolean1 = "hello"
let boolean2 = Boolean(boolean1)
console.log(boolean2)


// 35. Empty string to Boolean
let boolean3 = "";
let boolean4 = Boolean("")
console.log(boolean4);


// 36. 0, 1 and -1 to Boolean
let zero = 0;
let one = 1;
let negative = -1;
console.log(Boolean(zero));
console.log(Boolean(one));
console.log(Boolean(negative));


// 37. Array to Boolean
console.log(Boolean([]));


// 38. Object to Boolean
console.log(Boolean({}));



// CONDITIONAL STATEMENTS

// 39. if statement
let age39 = 20;

if (age39 >= 18) {
    console.log("Eligible");
}


// 40. if...else
let age40 = 16;

if (age40 >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}


// 41. Pass or Fail
let marks41 = 45;

if (marks41 >= 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// 42. Time condition
let time42 = 15;

if (time42 >= 1 && time42 <= 6) {
    console.log("Early Morning");
} else if (time42 >= 7 && time42 <= 12) {
    console.log("Morning");
} else if (time42 >= 13 && time42 <= 17) {
    console.log("Afternoon");
} else if (time42 >= 18 && time42 <= 19) {
    console.log("Evening");
} else if (time42 >= 20 && time42 <= 24) {
    console.log("Night");
} else {
    console.log("Invalid Time");
}


// 43. Temperature
let temperature43 = 30;

if (temperature43 > 35) {
    console.log("Hot");
} else if (temperature43 >= 20 && temperature43 <= 35) {
    console.log("Normal");
} else {
    console.log("Cold");
}


// 44. Nested if
let age44 = 20;
let height44 = 175;
let weight44 = 65;

if (age44 >= 18) {

    if (height44 >= 170) {

        if (weight44 >= 60) {
            console.log("Eligible");
        }

    }

}



// SWITCH STATEMENT

// 45. Traffic Light
let trafficLight45 = "red";

switch (trafficLight45) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Get Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Light");
}


// 46. Days
let day46 = "Monday";

switch (day46) {
    case "Monday":
        console.log("Monday");
        break;

    case "Tuesday":
        console.log("Tuesday");
        break;

    case "Wednesday":
        console.log("Wednesday");
        break;

    case "Thursday":
        console.log("Thursday");
        break;

    case "Friday":
        console.log("Friday");
        break;

    case "Saturday":
        console.log("Saturday");
        break;

    case "Sunday":
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}


// 47. Menu choice
let choice47 = 2;

switch (choice47) {
    case 1:
        console.log("Start");
        break;

    case 2:
        console.log("Settings");
        break;

    case 3:
        console.log("Exit");
        break;

    default:
        console.log("Invalid Choice");
}



// LOOPS


// 48. for loop - 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 49. while loop - 10 to 1
let i49 = 10;

while (i49 >= 1) {
    console.log(i49);
    i49--;
}


// 50. for...of and for...in

// Array
let fruits50 = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits50) {
    console.log(fruit);
}


// Object
let person50 = {
    name: "Krish",
    role: "Developer",
    experience: "1 Year"
};

for (let key in person50) {
    console.log(key + ": " + person50[key]);
}