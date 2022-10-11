import React, { useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCompany } from '../redux/company/services';

function AddEmployee() {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [position, setPosition] = React.useState('');
    const [company, setCompany] = React.useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const companies = useSelector(state => state.company.items.companyList);

    useEffect(() => {
        dispatch(fetchCompany());
    }, [])

    const addEmployee = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5279/api/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                age,
                position,
                companyId: company
            })
        });
        navigate('/employees');
    }


    return (
        <div id='add-employe'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Position</Form.Label>
                    <Form.Control type="text" placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Company</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={(e) => setCompany(e.target.value)}>
                        <option>Select your company</option>
                        {companies?.map((company) => (
                            <option key={company.id} value={company.id} >{company.companyName}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Button id="new-company" type="submit" className='mt-2' onClick={addEmployee} >
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default AddEmployee