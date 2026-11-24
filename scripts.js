function sayHello() {
    alert("Hello! Welcome to JavaScript.");
}
console.log("Hello World");
console.log(100);
console.log("I am learning JavaScript");
console.log(10 + 20);

//VARIABLES
//1. let
//Used when a value may change.
let name = "Rosemary";
name = "Mary"
console.log(name);

//2. const
//Used when you do not intend to reassign a variable.
const country = "Kenya";
console.log(country);

//3. var
// older way of declaring variables.
var age = 20;
console.log(age);

// If, else and else if
//These statements allow JavaScript to make decisions.
let marks = 75;

if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Below grade C");
}


let username = "Rosemary";
let password = "12345";

if (username === "Rosemary" && password === "12345") {
    console.log("Login successful");
} else {
    console.log("Invalid username or password");
}


//Switch statements
//A switch statement is useful when you have several possible choices.
let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Unknown day");
}

//loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

let number = 1;
do {
    console.log(number);
    number++;
} while (number <= 5);

//Functions
//A function is a block of code that performs a specific task.
function greetUser(name) {
    console.log("Welcome " + name);
}

greetUser("Rosemary");
greetUser("Mary");
greetUser("John");
//functions with return

function addNumbers(a, b) {
    return a + b;
}
let result = addNumbers(10, 20);

console.log(result);

//Arrow functions
const multiply = (a, b) => a * b;

console.log(multiply(5, 4));

//Important array methods
//1. push() – Add an item at the end
let fruits = ["Mango", "Orange"];

fruits.push("Banana");

console.log(fruits);

//2. pop() – Remove the last item
fruits.pop();

console.log(fruits);

//3. shift() - Remove the first item
fruits.shift();
console.log(fruits);

//4.Unshift() - Add an item at the beginning
fruits.unshift("Apple");
console.log(fruits);

//5. indexOf() - Find the index of an item
let index = fruits.indexOf("Orange");
console.log(index);

//6. slice() - Extract a portion of an array
let slicedFruits = fruits.slice(0, 2);
console.log(slicedFruits);

//7. splice() - Remove or replace items in an array
fruits.splice(1, 1, "Grapes");
console.log(fruits);

//8. forEach() - Iterate over an array
fruits.forEach(function (fruit) {
    console.log(fruit);
});

//9. map() - Create a new array by transforming each item
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function (num) {
    return num * num;
});
console.log(squaredNumbers);

//10. filter() - Create a new array with items that pass a test
let evenNumbers = numbers.filter(function (num) {
    return num % 2 === 0;
});
console.log(evenNumbers);

//11. reduce() - Reduce an array to a single value
let sum = numbers.reduce(function (total, num) {
    return total + num;
}, 0);
console.log(sum);

//Objects
//An object is a collection of key-value pairs.
let student = {
    name: "Rosemary",
    age: 22,
    course: "JavaScript",
    country: "Kenya"
};

console.log(student);

//Accessing object properties
console.log(student.name);
console.log(student["age"]);

//Adding new properties to an object
student.grade = "A";
console.log(student);

//Removing properties from an object
delete student.course;
console.log(student);

//Iterating over object properties
for (let key in student) {
    console.log(key + ": " + student[key]);
}

//Classes
//A class is a blueprint for creating objects.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

//Creating an instance of a class
let person1 = new Person("Rosemary", 22);
console.log(person1);

//Inheritance
class Student extends Person {
    constructor(name, age, course) {
        super(name, age);
        this.course = course;
    }
}
let student1 = new Student("Mary", 20, "JavaScript");
console.log(student1);

//Asynchronous JavaScript
//1. setTimeout() - Execute a function after a specified delay
setTimeout(function () {
    console.log("This message is displayed after 2 seconds");
}, 2000);

//2. setInterval() - Execute a function repeatedly at specified intervals
let count = 0;
let intervalId = setInterval(function () {
    count++;
    console.log("Count: " + count);
    if (count === 5) {
        clearInterval(intervalId);
    }
}, 1000);

//3. Promises - Handle asynchronous operations
let promise = new Promise(function (resolve, reject) {
    let success = true;
    if (success) {
        resolve("Promise resolved successfully");
    } else {
        reject("Promise rejected");
    }
});

promise.then(function (message) {
    console.log(message);
}).catch(function (error) {
    console.log(error);
});

//4. async/await - Simplify working with promises
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error fetching data: " + error);
    }
}
fetchData();

//DOM Manipulation
//1. Selecting elements
let heading = document.querySelector("h1");
console.log(heading);

//2. Changing content
heading.textContent = "Welcome to JavaScript";

//3. Changing styles
heading.style.color = "blue";
heading.style.fontSize = "2em";

//4. Adding event listeners
heading.addEventListener("click", function () {
    alert("You clicked the heading!");
});

//5. Creating new elements
let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph);

//6. Removing elements
newParagraph.remove();

//7. Modifying attributes
let link = document.querySelector("a");
link.setAttribute("href", "https://www.example.com");

//8. Traversing the DOM
let parentDiv = document.querySelector(".parent");
let childDivs = parentDiv.children;
for (let i = 0; i < childDivs.length; i++) {
    console.log(childDivs[i]);
}

//9. Cloning elements
let clonedHeading = heading.cloneNode(true);
document.body.appendChild(clonedHeading);

//10. Inserting elements before or after
let anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "This paragraph is inserted before the heading.";
heading.parentNode.insertBefore(anotherParagraph, heading);

//11. Replacing elements
let replacementParagraph = document.createElement("p");
replacementParagraph.textContent = "This paragraph replaces the previous one.";
heading.parentNode.replaceChild(replacementParagraph, anotherParagraph);

//12. Toggling classes
heading.classList.toggle("highlight");

//13. Checking for classes
if (heading.classList.contains("highlight")) {
    console.log("Heading has the highlight class.");
} else {
    console.log("Heading does not have the highlight class.");
}

//14. Adding multiple classes
heading.classList.add("class1", "class2");

//15. Removing multiple classes
heading.classList.remove("class1", "class2");

//16. Getting the value of an input field
let inputField = document.querySelector("input");

//17. Setting the value of an input field
inputField.value = "Default value";

//18. Listening for input events
inputField.addEventListener("input", function () {
    console.log("Input value: " + inputField.value);
});

//19. Form submission
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    console.log("Form submitted with value: " + inputField.value);
});
//20. Validating form input
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (inputField.value.trim() === "") {
        alert("Input field cannot be empty.");
    } else {
        console.log("Form submitted with value: " + inputField.value);
    }
});

//21. Fetching data from an API and displaying it in the DOM
async function displayData() {

    try {

        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        let data = await response.json();

        let container = document.querySelector("#data-container");

        data.forEach(post => {

            let postElement = document.createElement("div");

            let title = document.createElement("h3");
            title.textContent = post.title;

            let paragraph = document.createElement("p");
            paragraph.textContent = post.body;

            postElement.appendChild(title);
            postElement.appendChild(paragraph);

            container.appendChild(postElement);

        });

    } catch (error) {

        console.error("Error:", error);

    }

}

displayData();
//22. Event delegation
document.querySelector("#data-container").addEventListener("click", function (event) {
    if (event.target.tagName === "H3") {
        alert("You clicked on the title: " + event.target.textContent);
    }
});

let marks = [45, 67, 80, 90, 55];

// Find the first number greater than 70
let found = marks.find(mark => mark > 70);

console.log(found);

// Check if some numbers are above 80
let someMarks = marks.some(mark => mark > 80);

console.log(someMarks);

// Check if every number is above 40
let allMarks = marks.every(mark => mark > 40);

console.log(allMarks);