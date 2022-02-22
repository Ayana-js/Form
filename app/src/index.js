import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as yup from 'yup'

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


const validationSchema = yup.object().shape({
  name: yup.string().typeError('Name should be a string').required('Mandatory!'),
  age: yup.number().typeError('Age should be number').required('Mandatory!'),
  password: yup.string().typeError()
})

