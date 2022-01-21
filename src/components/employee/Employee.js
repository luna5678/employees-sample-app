import { useEffect, useState } from 'react';
import classes from './Employee.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import EditEmployee from './EditEmployee';
import DeleteEmployee from './DeleteEmployee';

const Employee = (props) => {
  const [expand, setExpand] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

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

  const showDeleteModalHandler = () => {
    setDeleteModal(true);
  }

  const closeDeleteModalHandler = () => {
    setDeleteModal(false);
  }

  const showEditModalHandler = () => {
    setEditModal(true);
  }

  const closeEditModalHandler = () => {
    setEditModal(false);
  }

  return (
    <section className={classes.employee}>
      <div className={classes.employee__heading} onClick={expandHandler}>
        <div className={classes.employee__heading__text}>
          <img src={props.avatar} alt={`${props.firstName} ${props.lastName}'s Avatar`} />
          <h3>{props.firstName} {props.lastName}</h3>
        </div>
        
        <span className={classes['employee__expand-arrow']}>
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
          <span className={classes.labels}>Bio: </span>
          {props.bio}
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
        
        <div className={classes['buttons-container']}>
          <button onClick={showEditModalHandler} className={classes.edit}>
            Edit
          </button>
          <button onClick={showDeleteModalHandler} className={classes.delete}>
            Delete
          </button>
        </div>
        
        {editModal && 
          <EditEmployee
            onCloseModal={closeEditModalHandler}
            firstName={props.firstName}
            lastName={props.lastName} 
            id={props.id}
          />
        }

        {deleteModal && 
          <DeleteEmployee 
            onCloseModal={closeDeleteModalHandler} 
            firstName={props.firstName} 
            lastName={props.lastName} 
            id={props.id}
            onDeleteEmployee={props.onDeleteEmployee}
          />
        }
      </div>}
    </section>
  )
}

export default Employee;