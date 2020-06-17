import React from 'react'

export default function Form(props){
    
    const { onInputChange, values} = props

    return(
      <div className='form container'>
          <form className='form-group inputs'>
            <div>
                <h4>General Info</h4>

                {/* ////////// TEXT INPUTS ////////// */}
                <label>Name&nbsp;
                    <input
                        name= 'name' 
                        value={values.name}
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
                        onChange={onInputChange}
                        type='checkbox'
                    />
                </label>
            </div>
          </form>
      </div>
    )
}