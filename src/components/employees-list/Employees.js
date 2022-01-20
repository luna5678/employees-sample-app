import React, { useEffect, useState, useCallback } from "react";
import Employee from "../employee/Employee";
import { HiChevronDoubleDown, HiChevronDoubleUp } from 'react-icons/hi';
import classes from './Employees.module.css'

const Employees = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const [expandAll, setExpandAll] = useState(false);

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

  const expandAllHandler = () => {
    setExpandAll((prevState) => !prevState)
  };

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
      expandEmployee={expandAll}
    />
  })

  console.log('these are all the employees', allEmployees)

  const expandContent = expandAll ? <p>Collapse All <HiChevronDoubleUp /></p> : <p>Expand All <HiChevronDoubleDown/></p>;

  return (
    <>
      <div className={classes.employees__heading}>
        <h2>Current Employees</h2>
        <span className={classes['employees__expand-all']} onClick={expandAllHandler}>
          {expandContent}
        </span>
      </div>
      {employeesList}
    </>
  )
}

export default Employees;