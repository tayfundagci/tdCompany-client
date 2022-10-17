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

    console.log(userDetail);
    return (
        <div className='container'>
            <div className="row">
                <div className='col-lg-10'>
                    Profile
                    <div>Welcome {user.username}</div>
                    <div>Your Information:</div>
                </div>
                <div className='col-lg-2'>
                    <Link to="/edit-profile">
                        <button className='btn btn-outline-info'>Edit Profile</button>
                    </Link>
                </div>
            </div>

            <div className="row mt-5">
                <div>{userDetail && userDetail.name}</div>
                <div>{userDetail && userDetail.surname}</div>
                <div>{userDetail && userDetail.address}</div>
                <div>{userDetail && userDetail.phone}</div>
            </div>
        </div>
    )
}

export default Profile