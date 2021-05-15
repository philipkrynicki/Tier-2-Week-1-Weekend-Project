console.log('JS load');

$(document).ready(function() {
    console.log('JQ Load');

    $('#submitButton').on("click", submitEmployee)
});



function submitEmployee () {
    // employee object literal
    let employeeObject = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        employeeId: $('#employeeIdinput').val(),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: $('#annualSalaryInput').val(),
    }
    console.log(employeeObject);
}

// need to append these object properties into the table
//  append rows to DOM


employees.push(employeeObject);
console.log(employee);

$('#formOutput').append(
    
)