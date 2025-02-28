import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ViewAdopteddetails() {

    const [list, setList] = useState([]);

    function GetAnnimals() {

        axios.get(`http://localhost:8080/GetAdoptedanimalsbyuseremail/${iemail}`)
            .then((res) => {
                setList(res.data);
            });
    }

    useEffect(()=>{
        GetAnnimals();
    })

    const iemail=sessionStorage.getItem("UserId");

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

                                <th> User Name </th>
                                <th>Animal Name </th>
                                <th>Age</th>
                                <th>Description</th>
                                <th>Adopt Year & Amount</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.filter((item)=>item.status=="Approved")
                            .map((lst, index) => (
                                <tr key={index}>

                                    <td>{lst.users?.name}</td>
                                    <td>{lst.animallist?.name}</td>
                                    <td>{lst.animallist?.age}</td>
                                    <td>{lst.description}</td>
                                    <td>{lst.adoptcharges?.year} Year - {lst.adoptcharges?.amount}</td>
                                    <td>{lst.startdate}</td>
                                    <td>{lst.endtdate}</td>
                                    <td>
                                        <img src={lst.animallist?.image} width={100}/>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

            </div>
        </div>
    )
}
