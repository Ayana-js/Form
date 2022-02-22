import './App.css';
import {Formik} from 'formik'
import * as yup from 'yup'

function App() {
  const validationSchema = yup.object().shape({
    name: yup.string().typeError('Name should be a string').required('Mandatory'),
    secondname: yup.string().typeError('Name should be a string').required('Mandatory'),
    password: yup.string().typeError('Name should be a string').required('Mandatory'),
    confirmPassWord: yup.string().oneOf([yup.ref('password')], 'Passwords are different').required('Mandatory'),
    email: yup.string().email('Enter a valid email').required('Mandatory'),
    confirmEmail:  yup.string().email('Enter a valid email').oneOf([yup.ref('email')], 'Emails are different').required('Mandatory')
  })
  
  return (
    <div className="App">        
      <Formik 
        initialValues = {{
          name: '',
          secondname: '',
          password: '',
          confirmPassWord: '',
          email: '',
          confirmEmail: ''
        }}
        validateOnBlur
        onSubmit={(values) => {console.log(values)}}
        validationSchema={validationSchema}
        >
        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
          <div>
            <p>
              <label htmlFor='name'>Name</label> <br/>
              <input
              className='input'
              name={'name'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              />
            </p>
            {touched.name && errors.name && <p className='error'> {errors.name} </p>}
            <p>
              <label htmlFor='secondname'>Second name</label> <br/>
              <input
              className='input'
              name={'secondname'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.secondname}
              />
            </p>
            {touched.secondname && errors.secondname && <p className='error'> {errors.secondname} </p>}
            <p>
              <label htmlFor='password'>Password</label> <br/>
              <input
              className='input'
              type={'password'}
              name={'password'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              />
            </p>
            {touched.password && errors.password && <p className='error'> {errors.password} </p>}
            <p>
              <label htmlFor='confirmPassWord'> Confirm password</label> <br/>
              <input
              className='input'
              type={'password'}
              name={'confirmPassWord'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassWord}
              />
            </p>
            {touched.confirmPassWord && errors.confirmPassWord && <p className='error'> {errors.confirmPassWord} </p>}
            <p>
              <label htmlFor='email'>Email</label> <br/>
              <input
              className='input'
              type={'email'}
              name={'email'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              />
            </p>
            {touched.email && errors.email && <p className='error'> {errors.email} </p>}
            <p>
              <label htmlFor='confirmEmail'> Confirm email</label> <br/>
              <input
              className='input'
              type={'confirmEmail'}
              name={'confirmEmail'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmEmail}
              />
            </p>
            {touched.confirmEmail && errors.confirmEmail && <p className='error'> {errors.confirmEmail} </p>}
            <button
            className='button'
            disabled={!isValid && !dirty}
            onClick={handleSubmit}
            type={'submit'}
            > Submit </button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default App;
