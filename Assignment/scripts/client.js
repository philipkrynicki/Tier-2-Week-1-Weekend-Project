console.log('JS load');

$(document).ready(function() {
    console.log('JQ Load');
// Adding values to the table of salaries
    $('#submitButton').on("click", submitEmployee)
// Adding a total monthly salary listener
    $('#submitButton').on("click", monthlySalary)
// Delete button to remove the employee from the DOM.  Will add this function later
    $('#employeeTable').on('click', '.delete-button', deleteNow )
    
    
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
        $('#employeeOutput').append(`     
            <tr class="person">
                <td class="personFirst">${employeeObject.firstName}</td>
                <td class="personLast">${employeeObject.lastName}</td>
                <td class="personId">${employeeObject.employeeId}</td>
                <td class="personTitle">${employeeObject.jobTitle}</td>
                <td class="personSalary">${employeeObject.annualSalary}</td>
                <td><button class="delete-button">Delete</button></td>
            

            </tr>
        
        
        `);
        $('#firstNameInput').val('');
        $('#lastNameInput').val('');
        $('#employeeIdInput').val('');
        $('#jobTitleInput').val('');
        $('#annualSalaryInput').val('');
        monthlySalary ()
}

console.log(employees);

// Just need to append values to the DOM  --  work on this tonight
// Remember what you're appending and where you'll target it.  Use the .append function

function monthlySalary () {
// Must declare a variable to show the Total Monthly Salary of the company    
    let total = 0;
// Loop through the three employees 
    for (let i=0; i<employees.length; i++) {
// Divide the Annual Salary by 12 to to calculate Total Monthly Salary
    total += employees[i].annualSalary;        
    }

    let monthlySalary = total / 12
    $("#monthlySalary").empty()
    $('#monthlySalary').text(`${monthlySalary}`)

    const maxMonthly = 20000
}

console.log(monthlySalary);

//  Creating a function to delete the employees after they are submitted through the Submit button
function deleteNow () {
    console.log('time to delete this info');
    console.log($(this));
    $(this).closest('.person').remove();
}
