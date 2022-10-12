import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteEmployee, fetchEmployee, updateEmployee } from '../redux/employee/services';
import axios from "axios"
import { selectEmployee } from '../redux/employee/employeeSlice';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form"
import { fetchCompany } from '../redux/company/services';

function EmployeeDetail() {
    const [show, setShow] = useState("");
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [position, setPosition] = React.useState('');
    const [company, setCompany] = React.useState('');

    const dispatch = useDispatch();
    const companies = useSelector(state => state.company.items.companyList);

    useEffect(() => {
        dispatch(fetchCompany());
    }, [])


    const [employee, setEmployee] = useState([]);
    const { employee_Id } = useParams();
    const selectedEmployee = useSelector(selectEmployee);

    let navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchEmployee(employee_Id));
    }, [])

    const updateEmploye = (id) => {
        dispatch(updateEmployee({
            id,
            name,
            age,
            position,
            companyId: company
        })).then(() => {
            dispatch(fetchEmployee(employee_Id));
        });
        setShow(false);
    }

    useEffect(() => {
        setEmployee(selectedEmployee?.employee);
    }, [selectedEmployee])

    const handleDelete = async (id) => {
        await dispatch(deleteEmployee(id));
        navigate('/employees');
    }

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setName(employee?.name);
        setAge(employee?.age);
        setPosition(employee?.position);
        setCompany(employee?.companyId);
        setShow(employee.id);
    }
    return (
        <div className=''>
            <div id='cardd' className="card bg-transparent border border-light ">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h4 className="card-title">{employee?.name}</h4>
                        <h4><i id='thrash' onClick={() => handleDelete(employee_Id)} className="bi bi-trash"></i></h4>
                    </div>
                    <h6 className="card-text">Position: {employee?.position}</h6>
                    <h6 className="card-title">Age : {employee?.age}</h6>
                    <hr />
                    <h3>Company</h3>
                    <h6 className="card-title">Company: {employee?.company && employee.company.name}</h6>
                    <h6 className="card-title">Address: {employee?.company && employee.company.address}</h6>
                    <div className="d-flex justify-content-between">
                        <h6 className="card-title">Country: {employee?.company && employee.company.country}</h6>
                        <h4><i id='thrash' className="bi bi-pen" onClick={handleShow}></i></h4>
                    </div>
                </div>
            </div>


            <Modal show={show == employee?.id} onHide={handleClose} className="text-dark">
                <Modal.Header closeButton>
                    <Modal.Title>{employee?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="number"
                                value={age}
                                autoFocus
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Position</Form.Label>
                            <Form.Control
                                type="text"
                                value={position}
                                autoFocus
                                onChange={(e) => setPosition(e.target.value)}
                            />
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

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => updateEmploye(employee_Id)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EmployeeDetail