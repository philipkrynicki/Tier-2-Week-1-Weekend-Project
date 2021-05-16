console.log('JS load');

$(document).ready(function() {
    console.log('JQ Load');
// Adding values to the table of salaries
    $('#submitButton').on("click", submitEmployee)
// Adding a total monthly salary listener
    $('#submitButton').on("click", monthlySalary)
// Delete button to remove the employee from the DOM.  Will add this function later
    // $('#deleteNow').on('click', 'deleteButton', deleteNow )       
});

//  create an array of the employees
let employees = []

function submitEmployee () {
    // employee object literal
    let employeeObject = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        employeeId: $('#employeeIdInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: $('#annualSalaryInput').val(),
    } 
    // inputs to be cleared after submit button is clicked    
        employees.push(employeeObject);
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#employeeIdInput').val('');
        $('#jobTitleInput').val('');
        $('#annualSalaryInput').val('');
}

console.log(employees);

// Just need to append values to the DOM  --  work on this tonight
// Remember what you're appending and where you'll target it.  Use the .append function

function monthlySalary ( salary ) {
// Must declare a variable to show the Total Monthly Salary of the company    
    let totalPerMonth = 0;
// Loop through the three employees 
    for (let i=0; i<employees.length; i++) {
// Divide the Annual Salary by 12 to to calculate Total Monthly Salary
    monthlySalary += employees[i].annualSalary/12;        
    }
}

console.log(monthlySalary);

//  Creating a function to delete the employees after they are submitted through the Submit button
//  function deleteNow () {
//     $('#employeeObject')
//     .empty()
//     .append;
// } 
