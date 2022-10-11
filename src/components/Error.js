import React from 'react'

function Error({ message }) {
    return (
        <div id='error' className='text-center'>Error: {message}</div>
    )
}

export default Error