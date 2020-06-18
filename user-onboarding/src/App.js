import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form'
import User from './components/User'

import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'


const initialFormValues = {
  ////////// TEXT INPUTS //////////
  first_name: '',
  last_name: '',
  email: '',
  password: '',

  ////////// CHECKBOX INPUTS ////////
  terms:false,

}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms:false,
}

const initialUsers = []
const initialDisabled = true

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  
  const url = 'https://reqres.in/api/users'
  
  const getUsers = () => {
    axios.get(url)
    .then(res =>{
      //debugger
      console.log(res)
      setUsers(res.data.data)
    })
    .catch(err =>{
      debugger
      console.log('getUsers error', err)
    })
  }

  const postNewUser = newUser =>{
    axios.post(url, newUser)
    .then(res =>{
      setUsers([...users, res.data.data])
    })
    .catch(err =>{
      debugger
      console.log('postNewUser error', err)
    })
    .finally(() =>{
      setFormValues(initialFormValues)
    })
  }

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
    .reach(formSchema, name)
    .validate(value)
    .then(valid =>{
      setFormErrors({
        ...formErrors,
        [name]: ""
      });
    })

    setFormValues({
      ...formValues,
      [name]:value,
    })
  }

  const onCheckboxChange = evt => {
    const { name, checked } =evt.target

    setFormValues({
      ...formValues, 
      [name]:checked,
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      first_name:formValues.first_name.trim(),
      last_name:formValues.last_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])

  return (
    <div className="App">
      <header><h1>User Onboarding App</h1></header>

      <Form 
      onInputChange={onInputChange} 
      values = {formValues} 
      onCheckboxChange={onCheckboxChange} 
      onSubmit={onSubmit} 
      disabled={disabled}
      />

      {
        users.map(user =>{
          return (
            <User key={user.id} user={user} />
          )
        })
      }
    </div>
  );
}

export default App;
