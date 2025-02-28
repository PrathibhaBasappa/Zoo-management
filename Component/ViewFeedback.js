import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ViewFeedback() {

    const [list, setList] = useState([]);

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
            <div className="col-sm-10 mt-5 lbl offset-1">
                <div className="card">
                    <div className=" text-center bg-danger text-white">
                        <h4 className="text-center mt-2"> View Feedback</h4>
                    </div>
                </div>
                <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                    <thead>
                        <tr>

                            <th>User Name </th>
                            <th>Feedback </th>

                        </tr>
                    </thead>
                    <tbody>
                        {list.map((lst, index) => (
                            <tr key={index}>

                                <td>{lst.user?.name}</td>
                                <td>{lst.feedback}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
