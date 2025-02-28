import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

export default function Feedback() {
 
    const [list, setList] = useState([]);
    const [feedback, setFeedback] = useState("");

    function AddFeedback(e) {
        e.preventDefault();

        const email=sessionStorage.getItem("UserId")
        const data = { feedback }

        axios
            .post(`http://localhost:8080/PostFeedback/${email}`, data)
            .then((res) => {
               
                alert(res.data);
                Getfeedbacks()
                clearAll()
            })
            .catch((error) => {

                alert("Failed");
            });
    }

    function clearAll() {
        setFeedback("");

    }

    function Getfeedbacks() {
        axios.get('http://localhost:8080/Getfeedbacks')
            .then((res) => {
                setList(res.data);
            });
    }

    useEffect(() => {
        Getfeedbacks();
    }, []);

    return (
        <div>
            <div className='container'>
                <div className="col-sm-10 mt-5 offset-1">
                    <div className='card'>
                        <div className="">
                            <h3 className='text-center mt-2'>Post Feedback </h3>
                        </div>
                        <hr />

                        <form onSubmit={AddFeedback}>
                            <div className="card-body">
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Feedback</label>

                                    <input
                                        type="text"
                                        className="form-control"
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                      
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
                            <h4 className="text-center mt-2"> View Feedback</h4>
                        </div>
                    </div>
                    <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                        <thead>
                            <tr>

                                <th>Feedback </th>

                            </tr>
                        </thead>
                        <tbody>
                            {list.map((lst, index) => (
                                <tr key={index}>

                                    <td>{lst.feedback}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
