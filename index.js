// Initializing the employee Object
const employee = {
    name: "Sam"
};
// Function to update an employee Object non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

// Function to update an employee Object destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Mutates the original Object
    return employee;
}

// Function to delete a key from an employee Object non-destructively
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Creates a shallow copy of the Object
    delete newEmployee[key]; // Removes the key from the new Object
    return newEmployee;
}

// Function to delete a key from an employee Object destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Mutates the original Object
    return employee;
}
module.exports = {
    employee,
    updateEmployeeWithKeyAndValue,
    destructivelyUpdateEmployeeWithKeyAndValue,
    deleteFromEmployeeByKey,
    destructivelyDeleteFromEmployeeByKey
};