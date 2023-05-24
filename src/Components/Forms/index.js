import React, { useEffect, useState } from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';
import './style.css'
import { useNavigate } from 'react-router-dom';

function Forms() {
  const [data1, setData1] = useState([])
  const navigate = useNavigate();

  const validationSchema = yup.object({
    firstname: yup?.string()?.matches(/^[a-zA-Z ]{2,40}$/, 'Please enter a valid name')?.required(),
    lastname: yup?.string()?.matches(/^[a-zA-Z ]{2,40}$/, 'Please enter a valid name')?.required(),
    email: yup?.string()?.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Please enter a valid email')?.required(),
    number: yup?.number()?.typeError("That doesn't look like a phone number")?.positive("A phone number can't start with a minus")?.integer("A phone number can't include a decimal point")?.min(1000000000, 'Please enter 10 digits')?.max(9999999999, 'Please enter 10 digits')?.required('A phone number is required'),
    qualification: yup?.string()?.required(),
    address: yup?.string()?.required(),
    age: yup?.number()?.required(),
    gender: yup?.string()?.required(),
    checkbox: yup?.string()?.required(),
  })

  const onsubmit = (values) => {
    console.log('data', values)
    let result = [...data1, values];
    setData1(result)
    localStorage.setItem("array", JSON.stringify(result));
  }

  useEffect(() => {
    const storedArray = localStorage.getItem("array");
    if (storedArray) {
      setData1(JSON.parse(storedArray));
    }
  }, [])

  return (
    <div>
      <h1 className='text-center mt-3'>Registration Form</h1>
      <Formik
        initialValues={{ firstname: "", lastname: "", email: "", number: "", qualification: "", address: "", age: "", gender: "", checkbox: "", }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values)
          const arr = data1;
          console.log('test', arr);
          resetForm();
          onsubmit(values)
          navigate("/users")
        }}>
        <Form className="p-3">
          <div className='row m-1'>
            <div className='col-md-6 col-sm-12 text-danger mt-3'>
              <label className='text-dark'>First Name</label>
              <Field type='text' className='form-control bg-light text-dark' name='firstname' placeholder='Enter first name...' />
              <ErrorMessage name='firstname' />
            </div>
            <div className='col-md-6 col-sm-12 text-danger mt-3'>
              <label className='text-dark'>Last Name</label>
              <Field type='text' className='form-control bg-light text-dark' name='lastname' placeholder='Enter last name...' />
              <ErrorMessage name='lastname' />
            </div>
          </div>
          <div className='row m-1'>
            <div className='col-md-6 col-sm-12 text-danger mt-3'>
              <label className='text-dark'>Email</label>
              <Field type='mail' className='form-control bg-light text-dark' name='email' placeholder='Enter EmailID...' />
              <ErrorMessage name='email' />
            </div>
            <div className='col-md-6 col-sm-12 text-danger mt-3'>
              <label className='text-dark'>Mobile Number</label>
              <Field type='text' className='form-control bg-light text-dark' name='number' placeholder='Enter number...' />
              <ErrorMessage name='number' />
            </div>
          </div>
          <div className='row m-1'>
            <div className='col-md-6 col-sm-12 text-danger mt-3'>
              <label className='text-dark'>Qualification</label>
              <Field as="select" name="qualification" className="form-control bg-light text-dark" >
                <option >--Select One--</option>
                <option value="SSC">SSC</option>
                <option value="Intermediate">Intermediate</option>
                <option value="BSc">BSc</option>
                <option value="BCom">BCom</option>
                <option value="BTech">BTech</option>
                <option value="MTech">MTech</option>
                <option value="MTech">MBA</option>
                <option value="MTech">MCA</option>
                <option value="MTech">MSc</option>
              </Field>
              <ErrorMessage name='qualification' />
            </div>
            <div className='col-md-6 col-sm-12 text-danger mt-3'>
              <label className='text-dark'>Address</label>
              <Field type='text' className='form-control bg-light text-dark' name='address' placeholder='Enter Address...' />
              <ErrorMessage name='address' />
            </div>
          </div>
          <div className='row m-1'>
            <div className='col-md-6 col-sm-12 text-danger mt-3'>
              <label className='text-dark'>Age</label>
              <Field type='text' className='form-control bg-light text-dark' name='age' placeholder="Enter your age..." />
              <ErrorMessage name='age' />
            </div>
            <div className='col-md-6 col-sm-12 text-danger mt-3'>
              <label className='text-dark'>Gender</label>
              <div className='mt-3'>
                <Field type="radio" name="gender" value="male" /> <span className='text-dark mx-2'>Male</span>
                <Field type="radio" name="gender" value="female" /> <span className='text-dark mx-2'>Female</span>  <br />
                <ErrorMessage name='gender' />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-sm-12">
            <div className="form-check text-danger">
              <Field type='checkbox' name='checkbox' />
              <span className='text-success mx-2'>I have read and agreed to the <span className='text-danger'>Terms</span> and <span className='text-danger'>Conditions</span>.</span>
              <div>
                <ErrorMessage name='checkbox' />
              </div>
            </div>
          </div>
          <div className='mt-3 ms-3'>
            <div className="col-md-12 col-sm-12">
              <button className='btn btn-primary' type="submit">Submit</button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Forms;