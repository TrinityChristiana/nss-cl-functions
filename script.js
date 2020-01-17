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

// Impure functions produce a different output with iffferent inputs, or affects another part of the function
let random = (num) => {
    Math.random() * 
}