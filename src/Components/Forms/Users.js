import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

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

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = data1?.slice(indexOfFirstRecord, indexOfLastRecord);
    console.log('currentRecords', currentRecords);
    const nPages = Math.ceil(data1.length / recordsPerPage);

    return (
        <div>
            <h1 className='text-center mt-3'>Details</h1>
            <table className='table table-bordered mt-5 table-responsive table-striped text-center'>
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
                    {currentRecords.map((a, i) =>{
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
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default Users