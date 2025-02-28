import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ViewAllAnimals() {
    const [type, setType] = useState([]);
    const [list, setList] = useState([]);
    const [tid, setTid] = useState('');

    function GetTypes() {
        axios.get('http://localhost:8080/GetType')
            .then((res) => {
                setList(res.data);
                if (res.data.length > 0) {
                    GetAnimalsbytype(res.data[0].tid); // Automatically select and display the first type
                }
            });
    }

    function GetAnimalsbytype(typeId) {
        setTid(typeId); // Update the selected type ID
        axios.get(`http://localhost:8080/GetAnimalsbytype/${typeId}`)
            .then((res) => {
                setType(res.data);
            });
    }

    useEffect(() => {
        GetTypes();
    }, []);

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand to='/' as={Link}>Zoo Management System</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/ViewAllAnimals" className="text-white">View Animals</Nav.Link>
                        <Nav.Link as={Link} to="/Registration" className="text-white">User Registration</Nav.Link>
                        <Nav.Link as={Link} to="/Login" className="text-white">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <div>
                <Navbar bg="danger" variant="dark" className='mt-3'>
                    {
                        list.map((item, index) => (
                            <Nav.Link
                                key={index}
                                onClick={() => GetAnimalsbytype(item.tid)}
                                className={`text-white ms-4 fs-5 ${tid === item.tid ? 'active' : ''}`}>
                                {item.type}
                            </Nav.Link>
                        ))
                    }
                </Navbar>
            </div>

            <div className='mt-3'>
                <div className="row py-2 mb-5 ms-4">

                    {type.length > 0 ? (


                        type.reduce((rows, animal, index) => {

                            if (index % 4 === 0) {
                                rows.push([]);
                            }
                            rows[rows.length - 1].push(

                                <div key={index} className="align-items-center col-sm-3">

                                    <div className="card shadow mb-5 animal-card">
                                        <img src={animal.image} alt="noimage" width={'auto'} height={'250'} className="animal-image" />
                                        <div className="text-center py-2 animal-info">
                                            <h5>{animal.name}</h5>
                                            <p>{animal.age} years old</p>

                                        </div>
                                    </div>
                                </div>
                            );
                            return rows;
                        }, []).map((row, rowIndex) => (
                            <div key={rowIndex} className="row">
                                {row}
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-muted">
                            <h4>No animals available for the selected type.</h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
