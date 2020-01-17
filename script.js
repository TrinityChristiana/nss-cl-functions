console.log("Hello");
/* 
let dogName = "Ada Grace";
let ownerName = "Kristen";

console.log(`${dogName} is owned by ${ownerName}`);

dogname = "Raleigh";
ownerName = "Margaret";

console.log(`${dogName} is owned by ${ownerName}`); */

// Pure functions do not affect any other part of the applications
let dogOwners = (dogName, ownerName) => {
    console.log(`${dogName} is owned by ${ownerName}`);
};

dogOwners("Ada Grace", "Kristen");
dogOwners("Raleigh", "Margaret");
dogOwners("Francis", "Jane");

// Impure functions produce a different output with different inputs, or affects another part of the function
let randomNumbers = (num) => {
    const newNumber = Math.random() * num;
    console.log(newNumber);
};

console.log("Impure Function");
randomNumbers(5);
randomNumbers(5);

const addGreen = (domElement) => {
    const element = document.querySelector(domElement);
    element.classList.add("green");
}

addGreen("#impure");