import classes from './Employee.module.css';

const Employee = (props) => {

  return (
    <div className={classes.employee}>
      <div className={classes.employee__heading}>
        <img src={props.avatar} alt={`${props.firstName} ${props.lastName}'s Avatar`} />
        <h3>{props.firstName} {props.lastName}</h3>
      </div>

      <div className={classes.employee__details}>
        <p>
          <span className={classes.labels}>Employee ID: </span>
          {props.id}
        </p>
        <p>
          <span className={classes.labels}>Email: </span>
          {props.email}
        </p>
        <p>
          <span className={classes.labels}>Phone: </span>
          {props.phone}
        </p>
        <p>
          <span className={classes.labels}>Address: </span>
          {props.addressStreet}, {props.addressCity}, {props.addressState} {props.addressZip}
        </p>
        <p>
          <span className={classes.labels}>Bio: </span>
          {props.bio}
        </p>
      </div>
    </div>
  )
}

export default Employee;