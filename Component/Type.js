import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

export default function Type() {

    const [list, setList] = useState([]);
    const [clist, setCList] = useState([]);
    const [category, setCategory] = useState("");
    const [type, setType] = useState("");

    function AddType(e) {
        e.preventDefault();

        const data = { type }

        axios
            .post(`http://localhost:8080/AddType/${category}`, data)
            .then((res) => {
                console.log(res.data)
                alert("Added Successfully");
                GetTypes()
                clearAll()
            })
            .catch((error) => {

                alert(error.response.data);
            });
    }

    function clearAll() {
        setCategory("");
        setType("")
    }

    function GetCategory() {
        axios.get('http://localhost:8080/GetCategory')
            .then((res) => {
                setCList(res.data);
            });
    }
    
    function GetTypes() {
        axios.get('http://localhost:8080/GetType')
            .then((res) => {
                setList(res.data);
            });
    }

    useEffect(() => {
        GetCategory();
        GetTypes()
    }, []);

    return (
        <div>
            <div className='container'>
                <div className="col-sm-10 mt-5 offset-1">
                    <div className='card'>
                        <div className="">
                            <h3 className='text-center mt-2'>Add Type  </h3>
                        </div>
                        <hr />

                        <form onSubmit={AddType}>
                            <div className="card-body">
                                <div className="form-group">
                                    <label className="form-label">Select Category</label>

                                    <select
                                        className="form-select mb-3 text-center "
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        required
                                    >
                                        <option selected value="" hidden>
                                            ----Select----
                                        </option>
                                        {clist.map((user, index) => {
                                            return (
                                                <option key={index} value={user.catid}>
                                                    {user.category}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Type Name</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}

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
                            <h4 className="text-center mt-2"> Added Type</h4>
                        </div>
                    </div>
                    <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                        <thead>
                            <tr>

                                <th>Category </th>
                                <th>Type </th>

                            </tr>
                        </thead>
                        <tbody>
                            {list.map((lst, index) => (
                                <tr key={index}>

                                    <td>{lst.category?.category}</td>
                                    <td>{lst.type}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
