import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as yup from 'yup';

function Edit() {
    const data = useLocation();
    const navigate = useNavigate();
    const [array, setArray] = useState([])
    var index = data.state.i;
    console.log('index', index);

    const initialValues = {
        firstname: data.state.a.firstname,
        lastname: data.state.a.lastname,
        email: data.state.a.email,
        number: data.state.a.number,
        qualification: data.state.a.qualification,
        address: data.state.a.address,
        age: data.state.a.age,
        gender: data.state.a.gender,
        checkbox: data.state.a.checkbox,
    }
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
        console.log("form", values)
        let temp = [...array]
        temp[data?.state?.i] = values;
        console.log("i", temp)
        let result = [...temp];
        setArray(result)
        localStorage.setItem("array", JSON.stringify(result));
        navigate("/users")
    }

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("array"));
        if (items) {
            setArray(items)
        }
    }, [])

    return (
        <div className='mt-4'>
            <div className="col-md-12">
                <div>
                    <div className="card-body">
                        <h1 className="card-title text-center">Edit</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, { resetForm }) => {
                                onsubmit(values)
                                resetForm();
                                let result = [...data, values];
                                localStorage.setItem("array", JSON.stringify(result));
                            }}
                        >
                            <Form className="p-md-3">
                                <div className='row m-md-1'>
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
                                <div className='row m-md-1'>
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
                                <div className='row m-md-1'>
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
                                        <Field type='text' className='form-control bg-light text-dark' name='age' />
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
                                        <span className='text-success mx-2'>I have read and agree to the Terms </span>
                                        <div>
                                            <ErrorMessage name='checkbox' />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3 ms-3'>
                                    <div className="col-md-12 col-sm-12">
                                        <button className='btn btn-primary' type="submit">Update</button>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                        <table className='table table-bordered'>
                            <thead className='p-3'>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {array.map((a, i) => {
                                    return <tr key={i} >
                                        <td>{a?.firstname}</td>
                                        <td>{a?.lastname}</td>
                                        <td>{a?.email}</td>
                                        <td>{a?.number}</td>
                                        <td>{a?.gender}</td>
                                    </tr>
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;