let salary = Number(prompt("Enter Monthly salary : "));
let office_days = Number(prompt("Number of da"));
let working_days = 10;
let bonus = salary * 5/100;

let per_day_salary  = salary/office_days;
let working_day_salary = per_day_salary * working_days; 
let total_salary = working_day_salary + bonus;

document.write("Salary = "+ salary+ "</br>");
document.write("total number of Days = "+ office_days + "</br>");
document.write("Worked days of Employee = "+ working_days+ "</br>");
document.write("Bonus = "+bonus + "</br>");
document.write("Total Salary = "+ total_salary+ "</br>");