import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ViewAnimals() {

    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");

    function GetAnnimals() {

        axios.get('http://localhost:8080/GetAnimals')
            .then((res) => {
                setList(res.data);
            });
    }

    const flterdata = list.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));


    useEffect(() => {
        GetAnnimals();
    })

    const iemail = sessionStorage.getItem("UserId");

    return (
        <div>
            <div className='container'>
                <div className='card mt-4'>
                    <div className='card-header text-center bg-success text-white'>
                        <h4>View Animals</h4>
                    </div>
                </div>
                <div className='card mt-3'>
                    <div className='card-header' style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
                        <h4 className='card-title text-center'>Search Animal</h4>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className="form-group mt-3">
                                <label className="form-label">Search Here</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                        </form>
                    </div>
                </div>


                <div className='card mt-5'>
                    <h4 className='text-center text-danger mt-3'>View Animals</h4>
                    <div className='card-body'>
                        <table className="table table-striped table-hover text-center mt-2 shadow bg-white">
                            <thead>
                                <tr>

                                    <th> Type </th>
                                    <th>Animal Name </th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Date</th>
                                    <th>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {flterdata.filter((item) => item.incharge?.email == iemail)
                                    .map((lst, index) => (
                                        <tr key={index}>

                                            <td>{lst.type?.type}</td>
                                            <td>{lst.name}</td>
                                            <td>{lst.age}</td>
                                            <td>{lst.gender}</td>
                                            <td>{lst.date}</td>
                                            <td>
                                                <img src={lst.image} width={100} />
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}
