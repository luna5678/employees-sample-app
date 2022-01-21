import { useRef } from 'react';
import Modal from '../UI/Modal';
import classes from './EditEmployee.module.css'

const EditEmployee = (props) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const newValue = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value
    }

    console.log(newValue)
  }

  return (
    <Modal onClose={props.onCloseModal} className={classes['edit-modal']}>
      <h3 className={classes['edit-modal__heading']}>
        Edit Employee Information for {props.firstName} {props.lastName}:
      </h3>

      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='first-name'>First Name</label>
          <input id='first-name' ref={firstNameRef} type='text' defaultValue={props.firstName} />
        </div>
        <div className={classes.control}>
          <label htmlFor='last-name'>Last Name</label>
          <input id='last-name' ref={lastNameRef} type='text' defaultValue={props.lastName} />
        </div>

        <button type="submit">Submit</button>
      </form>
    </Modal>
  )
}

export default EditEmployee;