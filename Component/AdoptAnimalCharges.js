import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

export default function AdoptAnimalCharges() {

    const adopyear=['1 year','2 year','3 year'];
    const [list, setList] = useState([]);
    const [clist, setCList] = useState([]);
    const [aid, setAid] = useState("");
    const [amount, setAmount] = useState("");
    const [year, setYear] = useState("");

    function AddAnimalscharges(e) {
        e.preventDefault();

        const data = { amount,year }

        axios
            .post(`http://localhost:8080/AddAnimalscharges/${aid}`, data)
            .then((res) => {
                console.log(res.data)
                alert("Added Successfully");
                getadoptescharges()
                clearAll()
            })
            .catch((error) => {

                alert(error.response.data);
            });
    }

    function clearAll() {
        setAid("");
        setAmount("")
        setYear("")
    }

    function GetAnimals() {
        axios.get('http://localhost:8080/GetAnimals')
            .then((res) => {
                setCList(res.data);
            });
    }
    
    function getadoptescharges() {
        axios.get('http://localhost:8080/getadoptescharges')
            .then((res) => {
                setList(res.data);
            });
    }

    useEffect(() => {
        GetAnimals();
        getadoptescharges()
    }, []);

    return (
        <div>
            <div className='container'>
                <div className="col-sm-10 mt-5 offset-1">
                    <div className='card'>
                        <div className="">
                            <h3 className='text-center mt-2'>Add Animal Charges  </h3>
                        </div>
                        <hr />

                        <form onSubmit={AddAnimalscharges}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="form-label">Select Animals</label>

                                    <select
                                        className="form-select mb-3 text-center "
                                        value={aid}
                                        onChange={(e) => setAid(e.target.value)}
                                        required
                                    >
                                        <option selected value="" hidden>
                                            ----Select----
                                        </option>
                                        {clist.map((item, index) => {
                                            return (
                                                <option key={index} value={item.aid}>
                                                    {item.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Select Adopt Year</label>

                                    <select
                                        className="form-select mb-3 text-center "
                                        value={year}
                                        onChange={(e) => setYear(e.target.value)}
                                        required
                                    >
                                        <option selected value="" hidden>
                                            ----Select----
                                        </option>
                                        {adopyear.map((item, index) => {
                                            return (
                                                <option key={index} value={item}>
                                                    {item}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Charges Amount </label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}

                                        required
                                    />

                                </div>


                                <div className="mt-2 d-flex justify-content-end">
                                    <Button className="btn btn-primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-sm-10 mt-5 lbl offset-1">
                    <div className="card">
                        <div className=" text-center bg-danger text-white">
                            <h4 className="text-center mt-2"> View Animal Charges</h4>
                        </div>
                    </div>
                    <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                        <thead>
                            <tr>

                                <th>Animal Name </th>
                                <th>Amount </th>
                                <th>Year </th>

                            </tr>
                        </thead>
                        <tbody>
                            {list.map((lst, index) => (
                                <tr key={index}>

                                    <td>{lst.acharges?.name}</td>
                                    <td>{lst.amount}</td>
                                    <td>{lst.year}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
