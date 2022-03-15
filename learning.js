//ES2015 or ES6

                                                    //CLASS-01 (VARIABLES)

//There are three way to declare variables such as var, let, const .
//Example of var :
var name = "Sara";
name = "Tom";                                       ////reassign
console.log(name);

//Example of let :
let age = 40;
age = 45;                                          ////reassign
console.log(age);

//Example of const :
const city = ["Dhaka", "Barisal", 40 ,50];         ////const can't reassign
console.log(city);

const town = ["Dhaka", "Barisal", 40 ,50];
town.push(70);                                     ////const can't reassign but it can modify
console.log(town);

const capital = ["Dhaka" ,"Barisal" ,40 ,50];
capital.pop();                                     ////const can't reassign but it can modify
console.log(capital);



                                                        
                                                    //CLASS-02 (DATA TYPES)

                                                    //CLASS-03 (TYPE CONVERSION)

                                                    //CLASS-04 (js math and love calculator App)

let value;
let num1 = 10;
let num2 = 5;

//Simple Math
value = num1 + num2;
value = num1 - num2;
value = num1 * num2;
value = num1 / num2;
value = num1 % num2;

//Math Object
value = Math.PI;
value = Math.round(7.3);
value = Math.ceil(7.3);
value = Math.floor(2.9);
value = Math.sqrt(16);
value = Math.pow(2, 3);
value = Math.abs(-5);
value = Math.min(2, 6, 9, 12, 16, 20);
value = Math.max(2, 6, 9, 12, 16, 20);

value = Math.random() * 100;
value = Math.floor(value) + 1;

//Output
console.log(value);



//// Love calculator
let firstName = prompt("What's your first name ?");
let partnerName = prompt("what's your partner name ?");

let number = Math.random() * 100;
number = Math.floor(number) + 1;

alert(firstName + " and " + partnerName + "'s love persentage is " + number + "%");



                                                        //Class-05 (String Methods)

let str1 = "the first tutorial of the chanel is about the JavaScript";
let str2 = " and we will learn more things too.";

//charAt()
console.log(str1.charAt(1));

//charCodeAt()
console.log(str1.charCodeAt(2));

//concat()
console.log(str1.concat(str2));

//endsWith()
console.log(str1.endsWith("JavaScript"));
console.log(str1.endsWith("javascript"));  // In output, it will show "false" because there are supposed to be capital j (J) and capital s(S) in JavaScript spelling . So now we can realize from there that JavaScript is the case sensitive .   

//fromCharCode()
console.log(String.fromCharCode(114));

//includes()
console.log(str1.includes("tutorial"));

//indexOf
console.log(str1.indexOf("first"));

//match()
console.log(str1.match(/the/g));

//repeat()
console.log(str2.repeat(3));

//replace()
console.log(str1.replace(/the/g, "this"));

//search()
console.log(str1.search("chanel"));

//slice()
console.log(str1.slice(6, 8));

//split() 
console.log(str1.split(" "));

//toUpperCase()
console.log(str1.toUpperCase());

//toLowerCase
console.log(str1.toLowerCase());


//project - 01

let Tweet = prompt("Why do you agree with us ? Just tell us brifely ...");

let SlicedTweet = Tweet.slice(0, 16);

alert(SlicedTweet + "\nyour full message length is " + Tweet.length + " words.");

console.log(SlicedTweet);


//project -02

let userName = prompt("What's your Name ?");
let userNametoUpperCase = userName.toUpperCase();
let userNametoLowerCase = userName.toLowerCase();

let sliceUpperCase = userNametoUpperCase.slice(0, 1);
let totalName = userName.length;
let sliceLowerCase = userNametoLowerCase.slice(1, totalName);

alert("Hello" + sliceUpperCase + sliceLowerCase + " !");



                                                    //Class-06 (Template Literals)

// (\n)
console.log("What's your father name ?\nWhat's your mother name ?");
console.log(`What's your school name ?
What class do you study in ?`)          //This is the alternative way to break down between lines which called by Template Literals

// Template Literals
const name = "Rippon";
const age = 28;
const job = "Content Creator";
const city = "Netrokona";
let html;

html = `   
         <ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
            <li>Likes: ${100+10}K</li>
         </ul>
`
document.body.innerHTML= html;



                                                    //Class-07 (Array and Array Method)

//There is two way to declare Array 
const number = [22, 34, 46, 58, 70];
const number2 = new Array(24, 36, 48, 60,);

const text = ["red", "yellow", "green", "black"];
const text2 = new Array("white", "blue", "orange");

let value;

value = number.length;
value = Array.isArray(number2);
value = number[2];
value = number[0];
value = number.concat(number2);

//Mutating Array                                                 //Mutating Array stands for which Array will be modify
number.push(100);  
number.unshift(11);
number.pop();
number.shift();
number.splice(0, 1);
number.reverse();

//Output
console.log(number2);
console.log(value);



                                                            //Class-08 (Object Literals)

const person = {
    
    firstName:  "Tanvir",
    lastName: "Rahman",
    age: 35,
    email: "tanvir@gmail.com",
    address: {
        city: "Manikgonj",
        zipCode: 1800
    }
}

let value;
value = person;

//Specific Value
value = person.firstName;
value = person.lastName;
value = person.age;
value = person.address.city;
value = person.address.zipCode;


//Output
console.log(value);


                                                    //Class-09 (If else Statements & Logical Operators)

//Basic If else Statement
let number = 12;

if (number == 12) {
    console.log("Yes !!!")
} else {
    console.log("No !!!")
}

//Basic If else Statement
let age = 18;

if (age >= 18) {
    console.log("Ok! You are a voter")
} else {
    console.log("No! You are not a voter. Just go back from where you have come ...")
}

//Basic if else Statement
let digit = 8;

if (digit < 10) {
    console.log("This number is under the number of 10")
} 
else if (digit > 10) {
    console.log("This number is avobe the number of 10")
} 
else {
    console.log("This number is equal to 10")
} 

//Logical Operators : and(&&) ,or(||)
let name = "Tanvir";
let old = 35;
let haveDegree = false;
let experienceYear = 15;

//and(&&)
if (haveDegree == true && experienceYear >= 5) {
    console.log(name + " you are capable to work here !")
} else {
    console.log("Sorry ! Try again later")
}

//or(||)
if (haveDegree == true || experienceYear > 10) {
    console.log(name + " you are capable to work here !")
} else {
    console.log("Sorry ! Try again later");
}



                                                    //Class-10 (Switch Statement)

//Switch Statement vs if else - (switch statement is a alternative of if else)

//Example of if else
let text;
let rollNumber = 4;

if (rollNumber == 1) {
    text = "Congratulations ! You occupied first position";
} else if (rollNumber == 2) {
    text = "Congratulations ! You occupied secound position but we hope you will do better";
} else if (rollNumber == 3) {
    text = "Congratulations ! you occupied third position ,it's not bad but we hope you will try to do better next time"
} else {
    text = "You have passed in the exam ,you are not active on study so you must should learn carefully. At last we hope you will be better as well"
}
console.log(text);


//Switch Statement Basic 
let result;
let position = 2;

switch (position) {
    case 1:
        result = "Congratulation ! You occupied first position";
    break;

    case 2:
        result = "Congratulation ! You occupied secound position";
    break;

    case 3:
        result = "Congratulation ! You occupied third position ,it's not bad but we hope you will try to do better next time";
    break;

    default:
        result = "You have passed in the exam ,you are not active on study so you must should learn carefully. At last we hope you will be better as well";
}
console.log(result);


//Grouping cases of Switch Statement
let color = "red";

switch (color) {
    case "red":
    case "green":
    case "blue":
        console.log("You are selected RGB colors.");
    break;

    case "cyan":
    case "magenta":
    case "yellow":
    case "black":
        console.log("You are selected CMYK colors.");
    break;
}



                                                            //Class-11 (Javascript Functions)

//Function Declaration
function addar(a, b) {
    console.log(a + b);
}
addar(10, 25);


//Local Variable
function greet() {
    let userName = "John"
    console.log(userName);
}
greet();


//Global Variable
let username = "Don"
function just() {
    console.log("Hello " + username);
}
just();

//Parameters and it's evolution
function test(a, b) {
    
    if(typeof a === "undefined") {
        a = "jhon";
    }
    if(typeof b === "undefined") {
        b = "Doe";
    }
    
    console.log("Hello " + a + b);
}
test();

function text(a = "Sakib", b = " Rony") {
    console.log("Hello " + a + b);
}
text();

//Returning a value
function square(x) {
    return(x + x);
}
let squareFour = square(9);
console.log(squareFour);



                                                    //Class-12 (General Loops)

//for Loop

//Example of For Loop
for(let i = 0; i < 10; i += 1) {
    console.log(i);
}
//Example of For Loop
for(let i = 9; i > 0; i -= 1) {
    if(i === 5) break;                  //break (For useing break, will break after 5)
    console.log(i);
}
//Example of For Loop
for(let i = 0; i < 10; i += 1) {
    if(i === 5) continue;               //continue (For useing continue just that value(5) will banish)
    console.log(i);
}
//Example of For Loop
let myArray = ["one", "two", "three", "four", "five", "six"];

for(let i = 0; i < myArray.length; i += 1) {
    console.log(myArray[i]);
}
for(let i = 0; i < myArray.length - 1; i += 1) {
    console.log(myArray[i]);
}


//while Loop
//Example of while Loop
let i = 0;
while (i < 10) {
    console.log(i);
    i += 1;
}
//Example of while Loop
let j = 0;
while(j < myArray.length) {
    console.log(myArray[j]);
    j += 1;
}  
//do ... while Loop
//Example of do..while Loop
let k = 0;
do {
    console.log(k);
    k += 1;
} while (k < 4)






// video playlist - (https://www.youtube.com/watch?v=w307avqohW8&list=PL4iFnndHlduhY_C69D8XSVqG7IOdbzmfb)
