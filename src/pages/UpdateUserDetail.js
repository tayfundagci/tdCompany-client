import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUserDetail, updateUserDetail } from '../redux/userDetail/services';

function UpdateUserDetail() {
    const userDetail = useSelector(state => state.userdetail.items.userDetail);
    const isLoading = useSelector((state) => state.userdetail.isLoading);
    const error = useSelector((state) => state.userdetail.error);


    const [name, setName] = React.useState("");
    const [surname, setSurname] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [phone, setPhone] = React.useState("");


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchUserDetail());
    }, [])

    const updateUserDetaill = (id) => {
        dispatch(updateUserDetail({
            Id: id,
            Name: name,
            Surname: surname,
            Address: address,
            Phone: phone
        })).then(() => {
            dispatch(fetchUserDetail());
        })
        navigate("/profile");
    }



    return (
        <div>
            <div>
                <div id="edit-profile">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="col-md-12">
                                    <form className="form" >
                                        <h3 className="text-center text-info">Update User Detail</h3>
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
                                            <input type="text" name="text" value={phone} className="form-control" onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="form-group">
                                                <button id='new-company' className='btn btn-md' style={{ padding: "10px 30px" }} onClick={() => updateUserDetaill(userDetail?.id)} >Edit</button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default UpdateUserDetail