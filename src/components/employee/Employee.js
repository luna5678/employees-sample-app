import classes from './Employee.module.css';

const Employee = (props) => {

  return (
    <div className={classes.employee}>
      <div className={classes.employee__heading}>
        <img src={props.avatar} alt={`${props.firstName} ${props.lastName}'s Avatar`} />
        <h3>{props.firstName} {props.lastName}</h3>
      </div>
    </div>
  )
}

export default Employee;