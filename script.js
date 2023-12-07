// Challenge 1.1:
// Step 1: Create an object for storing your profile information. The object name can be "studentProfile". below are the keys which are to be added to the object, please add your values for the same:
let studentProfile={
studentName:"aryan",
studentAge:"18",
cohortName:"x",
location:"chandigarh",
hobbies:["badminton"]
}

// Step 2: Add more then one hobby in the student object.
//Hint: Use Arrays

// Your code goes here
studentProfile.hobbies.push('debating');
console.log(studentProfile)

// Challenge 1.2: Access the studentName value of the object "studentProfile" using dot "." notation and print the same in console.
console.log(studentProfile.studentName)
//Challenge 1.3: Access the cohortName property of the object using Bracket notation ([]).
console.log(studentProfile["cohortName"])

//Challenge 2.1:Create an object using the constructor function for storing the book information. The object name can be "Book". Include the following values .
function book(title,author){
  this.title=title;
  this.author=0;
}
var issue=new book("48 Laws of Power","Robert Greene");
//title
//author

//Challenge 2.2: Access the title property of the object "Book" and print the same in console.
console.log(issue["title"])
