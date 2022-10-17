import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUserDetail } from '../redux/userDetail/services';

function EditProfile() {
    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [id, setId] = React.useState(localStorage.getItem("id"));

    const dispatch = useDispatch();
    const navgitate = useNavigate();

    const addUserDetailFunc = (e) => {
        e.preventDefault();
        dispatch(addUserDetail({
            name: name,
            surname: surname,
            address: address,
            phone: phone,
            UserDetailId: id
        })).then(() => {
            navgitate("/profile");
        })
    }

    return (
        <div>
            <div id="edit-profile">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className="col-md-12">
                                <form className="form" >
                                    <h3 className="text-center text-info">Edit Profile</h3>
                                    <div className="form-group mt-3">
                                        <label htmlFor="name" className="text-info">Name:</label><br />
                                        <input type="text" name="name" className="form-control" onChange={(e) => setName(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="surname" className="text-info">Surname:</label><br />
                                        <input type="text" name="text" className="form-control" onChange={(e) => setSurname(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="surname" className="text-info">Address:</label><br />
                                        <input type="text" name="text" className="form-control" onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="surname" className="text-info">Phone:</label><br />
                                        <input type="text" name="text" className="form-control" onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        <div className="form-group">
                                            <button id='new-company' className='btn btn-md' style={{ padding: "10px 30px" }} onClick={addUserDetailFunc} >Edit</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default EditProfile