import moment from "moment";  

export default function validate (values) {
  
  let errors = {}
    
  if(!values.fullName ) {
    errors.fullName = "First name and last name is required"
  } else if (values.fullName && values.fullName.length <= 5 ) {
    errors.fullName = "It must be more than 5 characters"
  }
  if (!values.address) {
    errors.address = "Address is required"
  }
  if (!values.phone) {
    errors.phone = "Phone is required"
  } else if (values.phone.length !== 10 ) {
    errors.phone = "Phone number must be 10 digits"
  }
  
  const inputDate = document.getElementById('date-input')
  const eighteen = (moment().subtract(18, "years"))
  const getInputDate = (moment(inputDate.value))

  if (!values.dob) {
    errors.dob = "Date of birth is required"
  } else if(!eighteen.isAfter(getInputDate)) {
    errors.dob = "Must be older than 18"
  }
  return errors
}