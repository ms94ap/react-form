import React, { Component } from 'react'
import InputField from './InputField'

export default class DataTable extends Component {
  render(){
    const { values } = this.props

    return(
      <>
        <InputField 
          label='First and Last Name:'
          value={values.fullName}
          readOnly
        />
        <InputField
          label='Date of Birth:'
          value={values.dob}
          readOnly
        />
        <InputField
          label='Phone Number:'
          value={values.phone}
          readOnly
        />
        <InputField 
          label='Address:'
          value={values.address}
          readOnly
        />
        <InputField 
          label='Secondary Address:'
          value={values.secondaryAddress ? values.secondaryAddress : ""}
          readOnly
        />
      </>
    )
  }
}