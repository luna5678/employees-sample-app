import Modal from '../UI/Modal';
import classes from './DeleteEmployee.module.css'

const DeleteEmployee = (props) => {


  return (
    <Modal onClose={props.onCloseModal}>
      Are you sure you want to delete {props.employeeFirstName} {props.employeeLastName}?
      
      <div className={classes.buttons}>
        <button onClick={props.onCloseModal} className={classes['cancel-button']}>
          Cancel
        </button>

        <button className={classes['delete-button']}>
          Delete
        </button>
      </div>
      
    </Modal>
  )
}

export default DeleteEmployee;