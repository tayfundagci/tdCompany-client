import React from 'react'

function Profile() {

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <div className='container'>
            Profile
            <div className='col-lg-3'>
                {user.username}
            </div>
        </div>
    )
}

export default Profile