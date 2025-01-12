import React, { useEffect, useState, useCallback } from 'react';
import Employee from '../employee/Employee';
import LoadingScreen from '../UI/LoadingScreen';
import { HiChevronDoubleDown, HiChevronDoubleUp } from 'react-icons/hi';
import classes from './Employees.module.css'

const Employees = () => {
  const [allEmployees, setAllEmployees] = useState([]);
  const [expandAll, setExpandAll] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  // GET all employees
  const fetchEmployeesHandler = useCallback(async () => {
    setError(false);

    try {
      const response = await fetch('/api/employees');
      console.log('GET RESPONSE', response)
      if (!response.ok) {
        throw new Error(response.status)
      }
      const data = await response.json();
      setAllEmployees(data.employees);
    } catch (error) {
      setError(true)
      console.log(error.message)
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchEmployeesHandler();
  }, [fetchEmployeesHandler]);

  // Expand all employee details
  const expandAllHandler = () => {
    setExpandAll((prevState) => !prevState)
  };

  // DELETE an employee
  const deleteEmployeeHandler = async (id) => {
    setError(false);
    setIsLoading(true);

    try {
      const response = await fetch(`/api/employees/${id}`, {
        method: 'DELETE',
        header: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error(response.status)
      }

      fetchEmployeesHandler();
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
  };

  // UPDATE an employee
  const patchEmployeeHandler = async (employeeData) => {
    setError(false);
    setIsLoading(true);

    try{
      const response = await fetch(`/api/employees/${employeeData.id}`, {
        method: 'PATCH',
        'Content-Type': 'application/json',
        body: JSON.stringify(employeeData)
      })
      if (!response.ok) {
        throw new Error(response.status)
      }

      fetchEmployeesHandler();
    } catch (error) {
      setError(true);
      console.log(error.message)
    }
  }

  const expandContent = expandAll 
    ? <p>Collapse All <HiChevronDoubleUp /></p> 
    : <p>Expand All <HiChevronDoubleDown/></p>;

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
      onEditEmployee={patchEmployeeHandler}
      onDeleteEmployee={deleteEmployeeHandler}
    />
  })

  return (
    <>
      <div className={classes.employees__heading}>
        <h2>Current Employees</h2>
        <span className={classes['employees__expand-all']} onClick={expandAllHandler}>
          {expandContent}
        </span>
      </div>
      {error && <p className={classes.error}>Oops! There was an issue. Please try again.</p>}
      {isLoading && !error && <LoadingScreen />}
      {employeesList}
    </>
  )
}

export default Employees;