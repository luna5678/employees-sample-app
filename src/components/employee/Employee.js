import { useEffect, useState } from 'react';
import classes from './Employee.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Employee = (props) => {
  const [expand, setExpand] = useState(false);

  const expandHandler = () => {
    setExpand((prevState) => !prevState);
  }

  const {expandEmployee} = props;

  useEffect(() => {
    if (expandEmployee === true) {
      setExpand(true)
    }
    if (expandEmployee === false) {
      setExpand(false)
    }
  }, [expandEmployee])

  return (
    <section className={classes.employee}>
      <div className={classes.employee__heading}>
        <div className={classes.employee__heading__text}>
          <img src={props.avatar} alt={`${props.firstName} ${props.lastName}'s Avatar`} />
          <h3>{props.firstName} {props.lastName}</h3>
        </div>
        
        <span className={classes['employee__expand-arrow']} onClick={expandHandler}>
          {expand ? <FaChevronUp/> : <FaChevronDown />}
        </span>
      </div>

      {expand &&
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
      </div>}
    </section>
  )
}

export default Employee;