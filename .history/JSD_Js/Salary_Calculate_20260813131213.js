let salary = 15000;
let office_days = 26;
let working_days = 10;
let bonus = salary * 5/100;

let per_day_salary  = salary/office_days;
let working_day_salary = per_day_salary * working_days; 
let total_salary = working_day_salary + bonus;

document.write("Salary : "+ salary+ "</br>");
document.write("total number of Days : "+ office_days + "</br>");
document.write("Employee Worked days"+ + "</br>");