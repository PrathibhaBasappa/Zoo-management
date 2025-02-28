import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ApproveAdoptAnimal() {
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");

    function GetAdoptedanimalsbyuseremail() {
        const uemail = sessionStorage.getItem("UserId");
        axios.get(`http://localhost:8080/GetAdoptedanimalsbyuseremail/${uemail}`)
            .then((res) => {
                setList(res.data);
            });
    }

    const flterdata = list.filter((item) => item?.animallist?.name?.toLowerCase().includes(search.toLowerCase()));


    function ApproveAdoptAnimal(id) {
        debugger;
        axios.put(`http://localhost:8080/ApproveAdoptanimal/${id}`)
            .then((res) => {
                alert(res.data);
                GetAdoptedanimalsbyuseremail();
            })
            .catch((err) => {
                alert(err.response.data);
            })
    }

    useEffect(() => {
        GetAdoptedanimalsbyuseremail();
    }, []);

    return (
        <div className='container mt-4'>
            <div className='card'>
                <div className='card-header text-center bg-success text-white'>
                    <h4>Approve Adopt Animals</h4>
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


            {flterdata.filter((lst) => lst.status == "Pending")
                .map((item, index) => (
                    <div key={index} className='card mt-4 col-sm-10 offset-1'>
                        <div className='card-header' style={{ backgroundColor: 'rgb(215, 241, 240)' }}>
                            <h4 className='text-center card-title text-secondary'>{item.animallist?.name}</h4>
                        </div>
                        <div className='row no-gutters'>

                            <div className='col-md-4 d-flex align-items-center'>
                                <CardImg
                                    src={item.animallist?.image}
                                    className='img-fluid p-3'
                                    alt={item.animallist?.name}
                                    style={{ maxHeight: '250px', objectFit: 'cover', width: '100%' }}
                                />
                            </div>
                            <div className='col-md-8'>
                                <div className='card-body'>

                                    <h5 className='card-title'>User Name : {item.users?.name}</h5>
                                    <h5 className='card-title'>User Email :  {item.users?.email}</h5>
                                    <h5 className='card-title'>User Phone No. : {item.users?.phone}</h5>
                                    <h5 className='card-title'>User Address : {item.users?.address}</h5>
                                    <h5 className='card-title'>Description : {item.description}</h5>
                                    <h5 className='card-title'>Adopt Year & Amount : {item.adoptcharges?.year} + "Year" - {item.adoptcharges?.amount}</h5>

                                    <h5 className='card-title'>Date : {item.date}</h5>
                                    <h5>Approve : <Link className='btn btn-success' onClick={() => ApproveAdoptAnimal(item.adopid)}>Approve</Link></h5>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
}
