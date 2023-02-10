/*                  Question-01. 
Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser:*/

let a = prompt("Enter a number");
document.write("The value of a is: " + a + "<br>" + "<br>");

let incrementBefore = ++a;
document.write("The value of ++a is: " + incrementBefore + "<br>"); 
document.write("Now the value of a is: " + incrementBefore + "<br>" + "<br>");

let incrementAfter = a++;
document.write("The value of a++ is: " + incrementAfter + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>");

let decrementBefore = --a;
document.write("The value of --a is: " + decrementBefore + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>");

let decrementAfter = a--;
document.write("The value of a-- is: " + decrementAfter + "<br>");
document.write("Now the value of a is: " + a + "<br>" + "<br>"); 


/*                  Question-02. 
What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;*/

var x = 2, y = 1;
document.write("Value of x is: " + x + "<br>");
document.write("Value of y is: " + y + "<br>");

var result = --x - --y + ++y + y--;
document.write("Result is: " + result + "<br>" + "<br>");


/*                  Question-03. 
Write a program that takes input a name from user & 
greet the user.*/

let userGreet = prompt("Enter your name");
document.write("Welcome to my Website " + userGreet + "<br>" + "<br>");


/*                  Question-04. 
Write a program to take input a number from user & 
display it’s multiplication table on your browser. If user 
does not enter a new number, multiplication table of 5 
should be displayed by default.*/

const num = prompt("Enter a number");
for (let i = 1; i <= 10; i++) {
    let result = num * i;
    document.write(`${num} * ${i} = ${result}` + "<br>");
}


/*                  Question-05. 
Take
a) Take three subjects name from user and store them in 3 
different variables.
b) Total marks for each subject is 100, store it in another 
variable.
c) Take obtained marks for first subject from user and 
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user 
and store them in variables.
e) Now calculate total marks and percentage and show the 
result in browser like this.(Hint: user table) */

let marks_For_Each_Subject = 100;
let computer = 85;
document.write("English: " + computer + "<br>");

let maths = 91;
document.write("Maths: " + maths + "<br>");

let physics = 89;
document.write("Physics: " + physics + "<br>");

let totalMarks = 300;
document.write("Total Marks: " + totalMarks + "<br>");

let total_obtained_marks = computer + maths + physics;
document.write("Total obtained marks: " + total_obtained_marks + "<br>");

let percentage = (total_obtained_marks / totalMarks) * 100;
document.write("Percentage is: " + percentage + "%");
