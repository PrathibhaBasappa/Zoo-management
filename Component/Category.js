import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Category() {
 
    const [list, setList] = useState([]);
    const [category, setCategory] = useState("");

    function Addcategory(e) {
        e.preventDefault();

        const data = { category }

        axios
            .post("http://localhost:8080/Addcategory", data)
            .then((res) => {
                console.log(res.data)
                alert("Added Successfully");
                GetCategory()
                clearAll()
            })
            .catch((error) => {

                alert("Failed");
            });
    }

    function clearAll() {
        setCategory("");

    }

    function GetCategory() {
        axios.get('http://localhost:8080/GetCategory')
            .then((res) => {
                setList(res.data);
            });
    }

    useEffect(() => {
        GetCategory();
    }, []);

    return (
        <div>
            <div className='container'>
                <div className="col-sm-10 mt-5 offset-1">
                    <div className='card'>
                        <div className="">
                            <h3 className='text-center mt-2'>Add Category  </h3>
                        </div>
                        <hr />

                        <form onSubmit={Addcategory}>
                            <div className="card-body">
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Category Name</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                      
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
                            <h4 className="text-center mt-2"> Added Category</h4>
                        </div>
                    </div>
                    <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                        <thead>
                            <tr>

                                <th>Category Id</th>
                                <th>Category </th>

                            </tr>
                        </thead>
                        <tbody>
                            {list.map((lst, index) => (
                                <tr key={index}>

                                    <td>{lst.catid}</td>
                                    <td>{lst.category}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
