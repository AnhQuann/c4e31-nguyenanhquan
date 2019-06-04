// 1. Create context
// 2. Create window.onload (main)
// 3. Create feature (function)
// 4. Call function in window.onload (async/await)

const context = {
  employees: null,
}

window.onload = async () => {
  await getEmployees();
  renderEmployees();
  viewEmployees();
  createEmployee();
}

const getEmployees = async () => {
  const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');
  const employees = await res.json();
  context.employees = employees;
}

const renderEmployees = () => {
  const ulEmployees = document.getElementById('employees_list');
  context.employees.forEach((employee, index) => {    
    const liEmployees = `
      <li id=employees_${index}>${employee.employee_name}</li>
    `;
    ulEmployees.innerHTML += liEmployees;
  })
}

const viewEmployees = () => {
  for (let index = 0; index < context.employees.length; index++) {
    let li = document.getElementById(`employees_${index}`);
    let employee_salary = document.getElementById("employee_salary")
    li.addEventListener('mouseover',() => {
      employee_salary.innerHTML = '';
      let eachEmployees= context.employees[index];
      employee_salary.innerHTML +=
      `employee_salary:${eachEmployees.employee_salary}`
    })
  }
}

const createEmployee = () => {
  let btnCreate = document.getElementById('btn_create');
  btnCreate.addEventListener('click', () => {
    const postRequest = fetch(
      'http://dummy.restapiexample.com/api/v1/create',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*",
        },
        body: JSON.stringify({
          "name": "Hieu",
          "age": "20",
          "salary": 500000,
        })
    });
  })
}


