import React, { useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCompany } from '../redux/company/services';
import { addEmployee } from '../redux/employee/services';

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
    }, []);

    const addEmploye = (e) => {
        e.preventDefault();
        dispatch(addEmployee({
            name,
            age,
            position,
            companyId: company
        }));
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

                <Button id="new-company" type="submit" className='2' onClick={addEmploye} >
                    Add
                </Button>
            </Form>
        </div>
    )
}

export default AddEmployee