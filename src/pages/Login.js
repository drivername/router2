import React from 'react'
import { Form, Formik, replace, useFormik } from 'formik'
import TextInput from '../Forms/TextInput'
import PasswordInput from '../Forms/PasswordInput'
export default function Login() {
  return (
    <div>
        <Formik
        initialValues={{email:'',password:''}}
        onSubmit={(values,action)=>{

        }}
        >
            <Form>
                <TextInput
                label='Your email'
                name='email'
                type='text'
                />
                <PasswordInput
                label='Your password'
                name='password'
                type='password'
                />
                <button type='submit'>submit</button>

              
            </Form>


        </Formik>
    </div>
  )
}
