import React, { useEffect, useState, useCallback } from "react";
import Employee from "../employee/Employee";

const Employees = () => {
  const [allEmployees, setAllEmployees] = useState([]);

  const fetchEmployeesHandler = useCallback(async () => {
    try {
      const response = await fetch("/api/employees");
      if (!response.ok) {
        throw new Error(response.status)
      }
      const data = await response.json();

      setAllEmployees(data.employees);
    } catch (error) {
      console.log(error.message)
    }
  }, []);

  useEffect(() => {
    fetchEmployeesHandler();
  }, [fetchEmployeesHandler])

  const employeesList = allEmployees.map((employee) => {
    return <Employee 
      key={employee.id} 
      id={employee.id}
      avatar={employee.avatar} 
      firstName={employee.firstName} 
      lastName={employee.lastName}
      addressStreet={employee.address.streetAddress}
      addressCity={employee.address.city}
      addressState={employee.address.state}
      addressZip={employee.address.zipCode}
      bio={employee.bio}
      phone={employee.phone}
      email={employee.email}
    />
  })

  console.log('these are all the employees', allEmployees)

  return (
    <>
      <h2>All employees</h2>
      {employeesList}
    </>
  )
}

export default Employees;