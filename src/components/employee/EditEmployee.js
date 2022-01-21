import { useRef } from 'react';
import Modal from '../UI/Modal';
import Input from '../UI/Input';
import classes from './EditEmployee.module.css';

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
        <Input 
          label='Employee ID'
          input={{
            id: 'id',
            type: 'text',
            disabled: true,
            defaultValue: `${props.id}`,
          }}
        />
        <Input 
          ref={firstNameRef}
          label='First Name'
          input={{
            id: 'first-name',
            type: 'text',
            defaultValue: `${props.firstName}`
          }}
        />
        <Input 
          ref={lastNameRef}
          label='Last Name'
          input={{
            id: 'last-name',
            type: 'text',
            defaultValue: `${props.lastName}`
          }}
        />
        <Input 
          ref={emailRef}
          label='Email'
          input={{
            id: 'email',
            type: 'email',
            defaultValue: `${props.email}`
          }}
        />
        <Input 
          ref={phoneRef}
          label='Phone'
          input={{
            id: 'phone',
            type: 'text',
            defaultValue: `${props.phone}`
          }}
        />

        <p className={classes['address-heading']}>Address:</p>
        <Input 
          ref={addressStreetRef}
          label='Street'
          input={{
            id: 'street',
            type: 'text',
            defaultValue: `${props.addressStreet}`
          }}
        />
        <Input 
          ref={addressCityRef}
          label='City'
          input={{
            id: 'city',
            type: 'text',
            defaultValue: `${props.addressCity}`
          }}
        />
        <Input 
          ref={addressStateRef}
          label='State'
          input={{
            id: 'state',
            type: 'text',
            defaultValue: `${props.addressState}`
          }}
        />
        <Input 
          ref={addressZipRef}
          label='Zip Code'
          input={{
            id: 'zip',
            type: 'text',
            defaultValue: `${props.addressZip}`
          }}
        />

        <div className={classes['buttons-container']}>
          <button type="submit" className={classes.submit}>Update</button>
          <button type="reset" onClick={props.onCloseModal} className={classes.cancel}>Cancel</button>
        </div>
      </form>
    </Modal>
  )
}

export default EditEmployee;