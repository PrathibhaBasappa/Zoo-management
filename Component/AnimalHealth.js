import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function AnimalHealth() {
    const [list, setList] = useState([]);
    const [alist, setAList] = useState([]);
    const [aid, setAid] = useState('');

    const iemail = sessionStorage.getItem("UserId");

    useEffect(() => {
        if (iemail) {
            GetAnimalsbyiemail();
        }
    }, [iemail]); // This will run once on component mount

    useEffect(() => {
        if (iemail && aid) {
            GetAnimalsheathdetails();
        }
    }, [aid, iemail]); // This will run whenever aid or iemail changes

    function GetAnimalsbyiemail() {
        axios.get(`http://localhost:8080/GetAnimalsbyiemail/${iemail}`)
            .then((res) => {
                setAList(res.data);
            })
            .catch((error) => {
                console.error('Error fetching animals by email:', error);
            });
    }

    function GetAnimalsheathdetails() {
        axios.get(`http://localhost:8080/GetAnimalsheathdetailsbyemailandanimalid/${iemail}/${aid}`)
            .then((res) => {
                setList(res.data);
            })
            .catch((error) => {
                console.error('Error fetching animal health details:', error);
            });
    }

    return (
        <div>
            <div className='container'>
                <div className='card mt-4'>
                    <div className='card-header text-center bg-success text-white'>
                        <h4>View Animal Health Details</h4>
                    </div>
                </div>

                <div className='card mt-5'>
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

               {
                aid && (
                    <div className='card container mt-4'>

                    <div className=' text-center text-danger mt-3'>
                            <h4> Health Details</h4>
                        </div>
                        <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                            <thead>
                                <tr>
                                    <th>Doctor Name</th>
                                    <th>Animal Name</th>
                                    <th>Weight</th>
                                    <th>Heart Rate</th>
                                    <th>Temperature</th>
                                    <th>Treatment Plan</th>
                                    <th>Description</th>
                                    <th>Last Date Checkup</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.map((lst, index) => (
                                    <tr key={index}>
                                        <td>{lst.doctors?.name}</td>
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
                )
               }
            </div>
        </div>
    );
}
