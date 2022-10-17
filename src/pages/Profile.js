import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserDetail } from '../redux/userDetail/services';

function Profile() {

    const user = JSON.parse(localStorage.getItem("user"));
    const userDetail = useSelector(state => state.userdetail.items.userDetail);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserDetail());
    }, [])

    return (
        <div className='container'>
            <div className="row">
                <div className='col-lg-10'>
                    Profile
                    <div>Welcome {user.username}</div>
                </div>
                <div className='col-lg-2'>
                    <Link to="/edit-profile">
                        <button className='btn btn-outline-info'>Edit Profile</button>
                    </Link>
                </div>
            </div>

            <div className="row mt-5">

            </div>


            <div>
                <div className="">
                    <div className="text-light">
                        <div className="bg-transparent">
                            <div className="card bg-transparent border border-white" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-4">
                                    <div className="d-flex ">
                                        <div >
                                            <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" style={{ width: '120px', borderRadius: '10px' }} />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <h5 className='mt-2'>{userDetail ? userDetail.name : "Name: "} <span> </span> {userDetail && userDetail.surname}</h5>
                                            <div className='mt-2'>{userDetail ? userDetail.address : "Address: "}</div>
                                            <div>{userDetail ? userDetail.phone : "Phone: "}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Profile