import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ViewAdoptedAnimals() {

    const [list, setList] = useState([]);

    function GetAdoptedanimals() {
        axios.get('http://localhost:8080/GetAdoptedanimals')
            .then((res) => {
                setList(res.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the adopted animals!", error);
            });
    }

    useEffect(() => {
        GetAdoptedanimals();
    }, []); // Added dependency array to avoid repeated calls

    const uemail = sessionStorage.getItem("UserId");

    return (
        <div>
            <div className='container'>
                <div className='card mt-4'>
                    <div className='card-header text-center bg-success text-white'>
                        <h4>View Adopted Animals</h4>
                    </div>
                </div>

                <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Animal Name</th>
                            <th>Description</th>
                            <th>Year And Amount</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {list.filter((item) => item.users?.email === uemail)
                            .map((lst, index) => (
                                <tr key={index}>
                                    <td>{lst.users?.name}</td>
                                    <td>{lst.animallist?.name}</td>
                                    <td>{lst.description}</td>
                                    <td>{lst.adoptcharges?.year} Year - {lst.adoptcharges?.amount}</td>
                                    <td>{lst.startdate}</td>
                                    <td>{lst.endtdate}</td>
                                    <td>{lst.status}</td>
                                   
                                </tr>
                            ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}
