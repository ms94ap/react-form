import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import validate from './Validations';
import DataTable from './DataTable';
import { Alert, Spinner } from 'react-bootstrap'

const SubmitForm = () => {
  const [values, setValues] = useState([]);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false)

  const handleChange = event => {
    const { name, value } = event.target
    setValues({
      ...values,
      [name] : value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }
  
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      setSubmitted(true)
      submit();
    }
  }, [errors, isSubmitting]);

  const submit = () => {
    
  }

  return (
    <div className="App">
      {
        !submitted ?
          <form
            onSubmit={handleSubmit}
            className="form-group p-3 mt-5 bg-white shadow-lg border border-dark rounded"
          >
            <InputField
              name="fullName"
              label='First and Last Name*:'
              type="text"
              value={values.fullName || ""}
              onChange={handleChange}
              // required
            />
            {errors.fullName &&
              <Alert variant={"danger"}>
                {errors.fullName}
              </Alert>
            }
            <InputField
              id="date-input"
              name= 'dob'
              label='Date of Birth*:'
              type="date"
              onChange={handleChange}
              dateFormat="YYYY"
              value={values.dob || ""}
              // required
            />
            {errors.dob && 
              <Alert variant={"danger"}>
                {errors.dob}
              </Alert>
            }
            <InputField
              name= 'phone'
              label='Phone Number*:'
              type="number"
              onChange={handleChange}
              value={values.phone || ""}
              // required
            />
            {errors.phone && 
              <Alert variant={"danger"}>
                {errors.phone}
              </Alert>
            }
            <InputField 
              name= 'address'
              label='Address*:'
              type="text"
              onChange={handleChange}
              value={values.address || ""}
              // required
            />
            {errors.address &&
              <Alert variant={"danger"}>
                {errors.address}
              </Alert>
            
            }
            <InputField 
              name= 'secondaryAddress'
              label='Secondary Address:'
              type="text"
              onChange={handleChange}
              value={values.secondaryAddress || ""}
            />
            {
              submit ? 
              <button type="submit" className="btn btn-primary btn-block mt-3 shadow">
                Submit
              </button>
              :
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            }
          </form>
        : <DataTable values={values}/>
      }      
    </div>
  );
}

export default SubmitForm