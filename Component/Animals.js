import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Animals() {

    const Genderlist = ["MALE", "FEMALE"];
    const [list, setList] = useState([]);
    const [typelist, setTypelist] = useState([]);
    const [inchargelist, setInchargelist] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const [tid, setTid] = useState("");
    const [Iid, setIid] = useState("");
    const [image, setImage] = useState("");
    const [aid, setAid] = useState(null);

    function AddOrUpdateAnimals(e) {
        e.preventDefault();

        const data = { name, age, date, gender, image, aid };

        if (aid) {
            axios
                .put('http://localhost:8080/UpdateAnimalsdetails', data)
                .then((res) => {
                    alert(res.data);
                    GetAnnimals();
                    clearAll();
                })
                .catch((error) => {
                    console.log(error);
                    alert("Failed");
                });
        } else {
            axios
                .post(`http://localhost:8080/AddAnimals/${Iid}/${tid}`, data)
                .then((res) => {
                    console.log(res.data);
                    alert(res.data);
                    GetAnnimals();
                    clearAll();
                })
                .catch((error) => {
                    console.log(error);
                    alert("Failed");
                });
        }
    }

    function clearAll() {
        setName("");
        setAge("");
        setDate("");
        setImage("");
        setGender("");
        setTid("");
        setIid("");
        setAid(null);
    }

    function GetAnnimals() {
        axios.get('http://localhost:8080/GetAnimals')
            .then((res) => {
                setList(res.data);
            });
    }

    function GetIncharge() {
        axios.get('http://localhost:8080/GetIncharge')
            .then((res) => {
                setInchargelist(res.data);
            });
    }

    function GetTypes() {
        axios.get('http://localhost:8080/GetType')
            .then((res) => {
                setTypelist(res.data);
            });
    }

    const Animal = (e) => {
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        };
    };

    function Assigndata(item) {
        setName(item.name);
        setAge(item.age);
        setDate(item.date);
        setImage(item.image);
        setGender(item.gender);
        setTid(item.type?.tid);
        setIid(item.incharge?.inchargeid);
        setAid(item.aid); // Set animal ID for update
    }

    useEffect(() => {
        GetAnnimals();
        GetIncharge();
        GetTypes();
    }, []);

    return (
        <div>
            <div className='container'>
                <div className="col-sm-12 mt-5">
                    <div className='card'>
                        <div className="">
                            <h3 className='text-center mt-2'>{aid ? 'Update Animal' : 'Add Animal'}</h3>
                        </div>
                        <hr />

                        <form onSubmit={AddOrUpdateAnimals}>
                            <div className="card-body">
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Select Incharge</label>
                                    <select
                                        className="form-select mb-3 text-center "
                                        value={Iid}
                                        onChange={(e) => setIid(e.target.value)}
                                        required
                                    >
                                        <option selected value="" hidden>
                                            ----Select----
                                        </option>
                                        {inchargelist.map((item, index) => (
                                            <option key={index} value={item.inchargeid}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-outline mb-1">
                                    <label className='form-label'>Select Type</label>
                                    <select
                                        className="form-select mb-3 text-center "
                                        value={tid}
                                        onChange={(e) => setTid(e.target.value)}
                                        required
                                    >
                                        <option selected value="" hidden>
                                            ----Select----
                                        </option>
                                        {typelist.map((item, index) => (
                                            <option key={index} value={item.tid}>
                                                {item.type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Animal Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Age</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-outline mb-1">
                                    <label className='form-label'>Select Gender</label>
                                    <select
                                        className="form-select mb-3 text-center "
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        required
                                    >
                                        <option selected value="" hidden>
                                            ----Select----
                                        </option>
                                        {Genderlist.map((item, index) => (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="form-outline">
                                    <label className='form-label'>Choose Animal Image</label>
                                    <input type="file" className="form-control" onChange={Animal} />
                                </div>

                                <div className="mt-2 d-flex justify-content-end">
                                    <Button className="btn btn-primary" type="submit">
                                        {aid ? 'Update' : 'Submit'}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-sm-12 mt-5 ">
                    <div className="card">
                        <div className="text-center bg-danger text-white">
                            <h4 className="text-center mt-2"> Added Animals </h4>
                        </div>
                    </div>
                    <table className="table table-striped table-hover text-center mt-4 shadow bg-white">
                        <thead>
                            <tr>
                                <th>Animal Image</th>
                                <th>Incharge Name</th>
                                <th>Type</th>
                                <th>Animal Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Date</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((lst, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={lst.image} width={'100px'} height={'100px'}/>
                                    </td>
                                    <td>{lst.incharge?.name}</td>
                                    <td>{lst.type?.type}</td>
                                    <td>{lst.name}</td>
                                    <td>{lst.age}</td>
                                    <td>{lst.gender}</td>
                                    <td>{lst.date}</td>
                                    <td>
                                        <Link className='btn btn-secondary' onClick={() => Assigndata(lst)}>Update</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
