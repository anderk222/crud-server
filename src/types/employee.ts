type Employee = {
    id? : number
    name? : string,
    email : string
}

type EmployeeUpdate = {
    id : number
    name? : string,
    email : string
}

export { Employee, EmployeeUpdate };