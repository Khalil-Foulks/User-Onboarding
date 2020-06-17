import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'

import formSchema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'


const initialFormValues = {
  ////////// TEXT INPUTS //////////
  name: '',
  email: '',
  password: '',

  ////////// CHECKBOX INPUTS ////////
  terms:false,

}

const initialUsers = []

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const onInputChange = evt => {

  }



  return (
    <div className="App">
      <Form onInputChange={onInputChange} values = {formValues} />
    </div>
  );
}

export default App;
