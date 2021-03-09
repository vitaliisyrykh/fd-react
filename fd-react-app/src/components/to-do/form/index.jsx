import React,{ useState} from 'react';
import {Formik,Form, Field} from 'formik';

const FormTodo = props => {
  const {onSubmit} = props;
 const initialValues  = {
   todoBody :'',
 };



 
  return(
    <div>  
      
      <Formik  initialValues ={initialValues} onSubmit = {onSubmit}  >
        <Form>
          <Field name="todoBody" type="text" placeholder="enter text" />
          <Field name="submit" value="Add task" type="submit"/>
        </Form>
      </Formik>
    </div>  
  )
}
export default FormTodo;