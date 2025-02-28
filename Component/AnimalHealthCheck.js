import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

export default function AnimalHealthCheck() {

    const [list, setList] = useState([]);
    const [checkupdate, setCheckupdate] = useState("");
    const [animalid, setAnimalid] = useState("");
    const [weight, setWeight] = useState("");
    const [temperature, setTemperature] = useState("");
    const [heartrate, setHeartrate] = useState("");
    const [treatmentplan, setTreatmentplan] = useState("");
    const [description, setDescription] = useState("");


    function AddAnimalHealthDetails(e) {

        e.preventDefault();

        const data = { checkupdate, weight, temperature, heartrate, treatmentplan, description }

        axios
            .post(`http://localhost:8080/Addanimalhealthdetails/${animalid}/${demail}`, data)
            .then((res) => {
                console.log(res.data)
                alert(res.data);
                clearAll()

            })
            .catch((error) => {
                console.log(error);
                alert("Failed");
            });
    }

    function clearAll() {
        setCheckupdate("");
        setWeight("");
        setDescription("");
        setHeartrate("");
        setTemperature("");
        setTreatmentplan("");

    }

    function GetAnnimals() {

        axios.get('http://localhost:8080/GetAnimals')
            .then((res) => {
                setList(res.data);
            });
    }



    useEffect(() => {
        GetAnnimals();
    })

    const demail = sessionStorage.getItem("UserId");

    return (
        <div>
            <div className='container'>
                <div className="col-sm-10 mt-5 offset-1">
                    <div className='card'>
                        <div className="">
                            <h3 className='text-center mt-2'>Animal Health Details</h3>
                        </div>
                        <hr />

                        <form onSubmit={AddAnimalHealthDetails}>
                            <div className="card-body">

                                <div className="form-outline mb-1">
                                    <label className='form-label'>Select Animal </label>
                                    <select
                                        className="form-select mb-3 text-center "
                                        value={animalid}
                                        onChange={(e) => setAnimalid(e.target.value)}
                                        required
                                    >
                                        <option selected value="" hidden>
                                            ----Select----
                                        </option>
                                        {list.map((item, index) => {
                                            return (
                                                <option key={index} value={item.aid}>
                                                    {item.name}
                                                </option>
                                            );
                                        })}
                                    </select>

                                </div>

                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Weight</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}

                                        required
                                    />
                                </div>
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Temperature</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={temperature}
                                        onChange={(e) => setTemperature(e.target.value)}

                                        required
                                    />
                                </div>
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Heart Rate</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={heartrate}
                                        onChange={(e) => setHeartrate(e.target.value)}

                                        required
                                    />
                                </div>
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Treatmentplan</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={treatmentplan}
                                        onChange={(e) => setTreatmentplan(e.target.value)}

                                        required
                                    />
                                </div>
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}

                                        required
                                    />
                                </div>
                                <div className="form-outline mb-1">
                                    <label className='form-label'>Enter Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        value={checkupdate}
                                        onChange={(e) => setCheckupdate(e.target.value)}

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

            </div>
        </div>
    )
}
