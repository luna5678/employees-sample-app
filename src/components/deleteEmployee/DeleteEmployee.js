import Modal from '../UI/Modal';
import classes from './DeleteEmployee.module.css'

const DeleteEmployee = (props) => {
  return (
    <Modal onClose={props.onCloseModal}>
      Are you sure you want to delete {props.firstName} {props.lastName}?
      
      <div className={classes.buttons}>
        <button 
          className={classes['delete-button']} 
          onClick={() => {props.onDeleteEmployee(props.id); props.onCloseModal()}}>
          Delete
        </button>

        <button onClick={props.onCloseModal} className={classes['cancel-button']}>
          Cancel
        </button>
      </div>
      
    </Modal>
  )
}

export default DeleteEmployee;