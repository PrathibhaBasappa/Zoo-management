import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ViewHealthDetails() {

    const [list, setList] = useState([]);
    const [alist, setAList] = useState([]);
    const [aid, setAid] = useState('');
    const demail = sessionStorage.getItem("UserId");

    function GetAnnimals() {
        axios.get('http://localhost:8080/GetAnimals')
            .then((res) => {
                setAList(res.data);
            });
    }

    function GetAnimalsheathdetailsbydoctoremail() {
        if (aid) {  // Ensure aid is set before making the API call
            axios.get(`http://localhost:8080/GetAnimalsheathdetailsbydoctoremail/${demail}/${aid}`)
                .then((res) => {
                    setList(res.data);
                });
        }
    }

    useEffect(() => {
        GetAnnimals();
    }, []);

    useEffect(() => {
        GetAnimalsheathdetailsbydoctoremail();
    }, [aid]); // Trigger when aid changes

    return (
        <div>
            <div className='container'>
                <div className='card mt-4'>
                    <div className='card-header text-center bg-success text-white'>
                        <h4>View Animal Health Details</h4>
                    </div>
                </div>

                <div className='card mt-3'>
                    <div className='card-body'>
                        <div className="form-outline mb-1">
                            <label className='form-label'>Select Animal</label>
                            <select
                                className="form-select mb-3 text-center"
                                value={aid}
                                onChange={(e) => setAid(e.target.value)}
                                required
                            >
                                <option value="" hidden>----Select----</option>
                                {alist.map((item, index) => (
                                    <option key={index} value={item.aid}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Conditional rendering of the table */}
                {list.length > 0 && (
                    <div className='card mt-3'>
                        <h4 className='text-center mt-2 text-danger'>View Animal Health Details</h4>
                        <div className='card-body'>
                            <table className="table table-striped table-hover text-center mt-2 shadow bg-white">
                                <thead>
                                    <tr>
                                        <th>Animal Name </th>
                                        <th>Weight</th>
                                        <th>Heart Rate</th>
                                        <th>Temperature</th>
                                        <th>Treatment Plan</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {list.map((lst, index) => (
                                        <tr key={index}>
                                            <td>{lst.animal?.name}</td>
                                            <td>{lst.weight}</td>
                                            <td>{lst.heartrate}</td>
                                            <td>{lst.temperature}</td>
                                            <td>{lst.treatmentplan}</td>
                                            <td>{lst.description}</td>
                                            <td>{lst.checkupdate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
