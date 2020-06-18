import React from 'react'

export default function Form(props){
    
    const { onInputChange, values, onCheckboxChange, onSubmit, disabled } = props

    return(
          <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <h4>General Info</h4>

                {/* ////////// TEXT INPUTS ////////// */}
                <label>First Name&nbsp;
                    <input
                        name= 'first_name' 
                        value={values.first_name}
                        onChange={onInputChange}
                        type='text'
                    />
                </label>
                
                <label>Last Name&nbsp;
                    <input
                        name= 'last_name' 
                        value={values.last_name}
                        onChange={onInputChange}
                        type='text'
                    />
                </label>
                
                <label>Email&nbsp;
                    <input
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                        type='text'
                    />
                </label>

                <label>Password&nbsp;
                    <input
                        name='password'
                        value={values.password}
                        onChange={onInputChange}
                        type='text'
                    />
                </label>
                
                {/* ////////// CHECKBOX INPUTS ////////// */}
                <label>Terms&nbsp;
                    <input
                        name='terms'
                        checked={values.terms}
                        onChange={onCheckboxChange}
                        type='checkbox'
                    />
                </label>
            </div>
            <div className='form-group submit'>
                <button disabled={disabled}>Submit</button>
            </div>
          </form>
    )
}