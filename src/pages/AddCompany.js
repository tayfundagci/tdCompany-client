import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addCompany } from '../redux/company/services';

function AddCompany() {
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [country, setCountry] = React.useState('');

    const navigate = useNavigate()
    const dispatch = useDispatch();

    // const addCompany = async (e) => {
    //     e.preventDefault();
    //     const response = await fetch('http://localhost:5279/api/companies', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name,
    //             address,
    //             country
    //         })
    //     });
    //     const data = await response.json();
    //     navigate('/companies')
    //     console.log(data);
    // }

    const addCompanyy = async (e) => {
        e.preventDefault();
        dispatch(addCompany({
            name,
            address,
            country
        }));
        navigate('/companies');
    }


    return (
        <div id="add-company">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Country" onChange={(e) => setCountry(e.target.value)} />
                </Form.Group>

                <Button id="new-company" type="submit" className='2' onClick={addCompanyy}>
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default AddCompany