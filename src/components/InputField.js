import React from 'react';

const InputField=({label, name, id, value, type, onChange, required, readOnly })=>{
	return(
		<div>
			{label && (
        <label>{label}</label>
      )}
			<input
        id={id}
        className="form-control p-1 shadow-sm mb-1"
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        required={required}
        readOnly={readOnly}
      />
		</div>
		
	)

}
export default InputField