// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  //need to prompt user for first name, last name, and salary
  // TODO: Get user input to create and return an array of employee objects
  const employees = []; //this means we will add to it
  let addAnotherEmployee = true; //use let not const, b/c want to change value

  while (addAnotherEmployee) {
    const firstName = prompt("Please enter first name");
    const lastName = prompt("Please enter last name");
    let salary = prompt("Please enter salary"); //use let here instead of const so that can change to 0 if salary isNaN

    if (isNaN(salary)) {
      //if salary isNaN will show as 0
      salary = 0;
    }

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    // .push() method will add one or more elements to the end of an array
    employees.push(employee);

    addAnotherEmployee = confirm("Would you like to add another employee?");
  }

  return employees;
};

// Display the average salary
// to find average: add up all salaries and divide by lenth of array .length
const displayAverageSalary = function (employeesArray) {
  let sum = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    sum += parseInt(employeesArray[i].salary);
  }
  let average = sum / employeesArray.length;
  console.log(`The average salary is ${average.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(
    `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
