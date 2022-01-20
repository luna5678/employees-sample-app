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
    return <Employee key={employee.id} firstName={employee.firstName} />
  })

  return (
    <>
      <h2>All employees</h2>
      {employeesList}
    </>
  )
}

export default Employees;