import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';

import { addCompany, fetchCompany } from '../redux/company/services';

function AddCompany() {
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [country, setCountry] = React.useState('');

    const isLoading = useSelector((state) => state.company.isLoading);
    const error = useSelector((state) => state.company.error);

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const addCompanyy = async (e) => {
        e.preventDefault();
        await dispatch(addCompany({
            name,
            address,
            country
        })).then(() => {
            navigate('/companies')
        });
    }

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error message={error} />
    }

    return (
        <div id="add-company">
            <Form>
                <Form.Group className="mb-3 text-info" controlId="formBasicEmail">
                    <Form.Label className='text-info'>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 text-info" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3 text-info" controlId="formBasicPassword">
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