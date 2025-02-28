import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ApproveUsers() {

    const [list, setList] = useState([]);

    function Getusers() {

        axios.get('http://localhost:8080/Getusers')
            .then((res) => {
                setList(res.data);
            });
    }

    function ApproveUsers(id) {
        debugger;
        axios.put(`http://localhost:8080/ApproveUsers/${id}`)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                alert(err.response.data);
            })
    }

    useEffect(() => {
        Getusers()
    })

    const iemail = sessionStorage.getItem("UserId");

    return (
        <div>
            <div className='container'>
                <div className="col-sm-12 mt-5">
                    <div className="card">
                        <div className="text-center bg-danger text-white">
                            <h4 className="text-center mt-2"> Approve Users </h4>
                        </div>
                    </div>
                    <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list
                                .map((lst, index) => (
                                    <tr key={index}>

                                        <td>{lst.name}</td>
                                        <td>{lst.email}</td>
                                        <td>{lst.phone}</td>
                                        <td>{lst.address}</td>
                                        <td>
                                            {
                                                lst.status == "Pending" ?
                                                    <button className='btn btn-success' onClick={() => ApproveUsers(lst.uid)}>Approve</button>
                                                    : "Approved"
                                            }
                                        </td>
                                                </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
