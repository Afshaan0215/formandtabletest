import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Users() {
    const [data1, setData1] = useState([])

    const navigate = useNavigate();
    const del = (i) => {
        const temp = [...data1];
        temp.splice(i, 1);
        let result = [...temp];
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
            <h1 className='text-center'>Details</h1>
            <table className='table table-bordered mt-5'>
                <thead className='p-3'>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data1 && data1?.map((a, i) => {
                        return <tr key={i} >
                            <td>{a?.firstname}</td>
                            <td>{a?.lastname}</td>
                            <td>{a?.email}</td>
                            <td>{a?.number}</td>
                            <td>{a?.gender}</td>
                            <td><button onClick={() => { navigate("/edit", { state: { a, i } }) }} className='btn btn-warning text-light'>Edit</button></td>
                            <td><button onClick={() => { del(i) }} className='btn btn-danger'>Delete</button></td>
                        </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users