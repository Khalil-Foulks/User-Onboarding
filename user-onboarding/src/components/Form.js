import React from 'react'

export default function Form(props){
    
    const { onInputChange, values, onCheckboxChange, onSubmit, disabled, errors } = props

    return(
          <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <h4>General Info</h4>

                {/* ////////// TEXT INPUTS ////////// */}
                <div className='errors'>
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
                
                <label id='first_name'>First Name&nbsp;
                    <input
                        name= 'first_name' 
                        value={values.first_name}
                        onChange={onInputChange}
                        type='text'
                    />
                </label>
                
                <label id='last_name'>Last Name&nbsp;
                    <input
                        name= 'last_name' 
                        value={values.last_name}
                        onChange={onInputChange}
                        type='text'
                    />
                </label>
                
                <label id='email'>Email&nbsp;
                    <input
                        name='email'
                        value={values.email}
                        onChange={onInputChange}
                        type='text'
                    />
                </label>

                <label id='password'>Password&nbsp;
                    <input
                        name='password'
                        value={values.password}
                        onChange={onInputChange}
                        type='text'
                    />
                </label>
                
                {/* ////////// CHECKBOX INPUTS ////////// */}
                <label id='terms'>Terms&nbsp;
                    <input
                        name='terms'
                        checked={values.terms}
                        onChange={onCheckboxChange}
                        type='checkbox'
                    />
                </label>
            </div>
            <div className='form-group submit'>
                <button id='submit' disabled={disabled}>Submit</button>
            </div>
          </form>
    )
}