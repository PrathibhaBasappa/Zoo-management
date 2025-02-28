import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdopAnimals() {

    const [typelist, setTypelist] = useState([]);
    const [alist, setAlist] = useState([]);
    const [tid, setTid] = useState("");
    const [type, setType] = useState([]);
  
    const [description, setDescription] = useState("");
    const [acid, setAcid] = useState("");
    const [selectedAnimal, setSelectedAnimal] = useState(null); // State to store the selected animal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (item) => {
        setSelectedAnimal(item); // Set the selected animal
        setShow(true);
    };

    function GetTypes() {
        axios.get('http://localhost:8080/GetType')
            .then((res) => {
                setTypelist(res.data);
            });
    }

    function GetAnimalsbytype() {
        if (tid !== "") {
            axios.get(`http://localhost:8080/GetAnimalsbytype/${tid}`)
                .then((res) => {
                    setType(res.data);
                });
        }
    }

    function getadopteschargesbyanimalid() {
        if (selectedAnimal?.aid) {
            axios.get(`http://localhost:8080/getadopteschargesbyanimalid/${selectedAnimal.aid}`)
                .then((res) => {
                    setAlist(res.data);
                });
        }
    }

    function AdoptAnimals() {
        if (selectedAnimal) {
            debugger;

            const data = { description };
            const useremail = sessionStorage.getItem("UserId");
            axios
                .post(`http://localhost:8080/PostAdoptAnimals/${selectedAnimal.aid}/${useremail}/${acid}`, data)
                .then((res) => {
                    alert(res.data);
                    handleClose();
                    setDescription("");
                })
                .catch((error) => {
                    console.log(error);
                    alert('Failed');
                });
        }
    }

    useEffect(() => {
        GetTypes();
    }, []);

    useEffect(() => {
        GetAnimalsbytype();
    }, [tid]);  // Call GetAnimalsbytype whenever tid changes

    useEffect(() => {
        getadopteschargesbyanimalid();
    }, [selectedAnimal?.aid]);  // Use selectedAnimal.aid instead of type.aid

    return (
        <div>
            <div className='container'>
                <div className='col-sm-12'>
                    <div className='card mt-4'>
                        <div className='card-header text-center bg-success text-white'>
                            <h4>Adop Animals</h4>
                        </div>
                    </div>

                    <form>
                        <div className='card-body'>
                            <div className="form-outline mb-1">
                                <label className='form-label mt-3'>Select Type</label>
                                <select
                                    className="form-select mb-3 text-center"
                                    value={tid}
                                    onChange={(e) => setTid(e.target.value)}
                                    required
                                >
                                    <option value="" hidden>
                                        ----Select----
                                    </option>
                                    {typelist.map((item, index) => (
                                        <option key={index} value={item.tid}>
                                            {item.type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </form>

                    <div className='mt-3'>
                        {tid && type.length === 0 ? (
                            <div className="text-center py-4">
                                <h5>No animals available for this type.</h5>
                            </div>
                        ) : (
                            <div className="row py-2 mb-5">
                                {type.reduce((rows, item, index) => {
                                    if (index % 3 === 0) {
                                        rows.push([]);
                                    }
                                    rows[rows.length - 1].push(
                                        <div key={index} className="align-items-center col-sm-4">
                                            <div className="card shadow mb-5">
                                                <img src={item.image} alt="noimage" width={'auto'} height={'250'} />
                                                <div className="text-center py-2">
                                                    <h5>Animal Name: {item.name}</h5>
                                                    <h5>Age: {item.age}</h5>
                                                    <h5>Gender: {item.gender}</h5>
                                                    <Link className='btn btn-success' onClick={() => handleShow(item)}>
                                                        Adopt Animals
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                    return rows;
                                }, []).map((row, rowIndex) => (
                                    <div key={rowIndex} className="row">
                                        {row}
                                    </div>
                                ))}

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Adopt Animal</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>

                                        <div className="form-outline mb-1">
                                            <label className='form-label mt-3'>Select Animal Adopt Charges</label>
                                            <select
                                                className="form-select mb-3 text-center"
                                                value={acid}
                                                onChange={(e) => setAcid(e.target.value)}
                                                required
                                            >
                                                <option value="" hidden>
                                                    ----Select----
                                                </option>
                                                {alist.map((item, index) => (
                                                    <option key={index} value={item.chargesid}>
                                                        {item.year} Year - {item.amount}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-outline mb-1">
                                            <label className='form-label'>Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                required
                                            />
                                        </div>
                                       
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={AdoptAnimals}>
                                            Submit
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
