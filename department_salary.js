// Task 1: Create a Department Structure

const company = {
    departments: [
        {
            departmentName: 'HR',
            employees: [
                {
                    name: 'Jess',
                    salary: 78000,
                    subordinates: [],
                }    
                {
                    name: 'Jacob',
                    salary: 65000,
                    subordinates: [],
                }
                {
                    name: 'Sean',
                    salary: 80000,
                    subordinates: [],
                }
                {
                    name: 'Shirley',
                    salary: 73000,
                    subordinates: [],
                }
            ]
        }
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Kirk',
                    salary: 72000,
                    subordinates: [],
                }    
                {
                    name: 'Carly',
                    salary: 74000,
                    subordinates: [],
                }
                {
                    name: 'Doja',
                    salary: 75000,
                    subordinates: [],
                }
                {
                    name: 'Nickey',
                    salary: 70000,     
                    subordinates: [],
                }
            ]
        }
        {
            departmentName: 'IT',
            employees: [
                {
                    name: 'Jackson',
                    salary: 89000,
                    subordinates: [],
                }    
                {
                    name: 'Beyonce',
                    salary: 100000,
                    subordinates: [],
                }
                {
                    name: 'Kehlani',
                    salary: 92000,
                    subordinates: [],
                }
                {
                    name: 'Chappell',
                    salary: 106000,
                    subordinates: [],  //none of the employees have subordinates but they'd go here if they did
                }
            ]
        }
    ]
}
//an object named company that stores the departments in the company

// Task 2: Create a Recursive Function to Calculate Total Salary for a Department

function calculateDepartmentSalary(department) {

    function calculateEmployeeSalary(employee) {
        let totalSalary = employee.salary ;

        for (let subordinate of employee.subordinates) {
            totalSalary =+ calculateEmployeeSalary(subordinate) ;
        }
        return totalSalary ;
    }
    let totalDepartmentSalary = 0 ;  //initialized the total salary for the department
        
        for(let employee of department.employees) {
            totalDepartmentSalary =+ calculateEmployeeSalary(employee) ; 
        }
        return totalDepartmentSalary ; 
}

 // Task 3: Create a Function to Calculate the Total Salary for All Departments

 function calculateCompanySalary(company) {
    let totalCompanySalary = 0 ;

    for(let department of company.departments) {         // loop through the company departments
        totalCompanySalary += calaculateDepartmentSalary(department) ;
    }
    return totalCompanySalary ; 
 }