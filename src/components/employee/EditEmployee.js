import { useRef } from 'react';
import Modal from '../UI/Modal';
import classes from './EditEmployee.module.css'

const EditEmployee = (props) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressStreetRef = useRef();
  const addressCityRef = useRef();
  const addressStateRef = useRef();
  const addressZipRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCloseModal();

    const newValue = {
      id: props.id,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      address: {
        streetAddress: addressStreetRef.current.value,
        city: addressCityRef.current.value,
        state: addressStateRef.current.value,
        zipCode: addressZipRef.current.value
      }
    }

    props.onEditEmployee(newValue);
  }

  return (
    <Modal onClose={props.onCloseModal} className={classes['edit-modal']}>
      <h3 className={classes['edit-modal__heading']}>
        Edit Employee Information for {props.firstName} {props.lastName}:
      </h3>

      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Employee ID</label>
          <input type='text' defaultValue={props.id} disabled />
        </div>
        <div className={classes.control}>
          <label htmlFor='first-name'>First Name</label>
          <input id='first-name' ref={firstNameRef} type='text' defaultValue={props.firstName} />
        </div>
        <div className={classes.control}>
          <label htmlFor='last-name'>Last Name</label>
          <input id='last-name' ref={lastNameRef} type='text' defaultValue={props.lastName} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input id='email' ref={emailRef} type='text' defaultValue={props.email} />
        </div>
        <div className={classes.control}>
          <label htmlFor='phone'>Phone</label>
          <input id='phone' ref={phoneRef} type='text' defaultValue={props.phone} />
        </div>
        <p className={classes['address-heading']}>Address:</p>
        <div className={classes.control}>
          <label htmlFor='street'>Street</label>
          <input id='street' ref={addressStreetRef} type='text' defaultValue={props.addressStreet} />
        </div>
        <div className={classes.control}>
          <label htmlFor='city'>City</label>
          <input id='city' ref={addressCityRef} type='text' defaultValue={props.addressCity} />
        </div>
        <div className={classes.control}>
          <label htmlFor='state'>State</label>
          <input id='state' ref={addressStateRef} type='text' defaultValue={props.addressState} />
        </div>
        <div className={classes.control}>
          <label htmlFor='zip'>Zip Code</label>
          <input id='zip' ref={addressZipRef} type='text' defaultValue={props.addressZip} />
        </div>

        <div className={classes['buttons-container']}>
          <button type="submit" className={classes.submit}>Update</button>
          <button type="reset" onClick={props.onCloseModal} className={classes.cancel}>Cancel</button>
        </div>
      </form>
    </Modal>
  )
}

export default EditEmployee;