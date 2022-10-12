import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { deleteCompany, fetchCompany, updateCompany } from '../redux/company/services';
import axios from "axios"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form"

function Companies() {
    let navigate = useNavigate();
    const [show, setShow] = useState("");

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');

    const dispatch = useDispatch();
    const companies = useSelector(state => state.company.items.companyList);
    const isLoading = useSelector((state) => state.company.isLoading);
    const error = useSelector((state) => state.company.error);

    useEffect(() => {
        dispatch(fetchCompany());
    }, [])

    const handleDelete = async (id) => {
        await dispatch(deleteCompany(id));
        dispatch(fetchCompany());
    }

    const updateCompanies = (id) => {
        dispatch(updateCompany({
            id,
            name,
            address,
            country
        })).then(() => {
            dispatch(fetchCompany());
        })
        setShow(false);
    }

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error message={error} />
    }

    return (
        <div className="container">
            <div className='row justify-content-center'>
                {companies && companies.map((company) => {

                    const handleClose = () => setShow(false);
                    const handleShow = () => {
                        setName(company.companyName);
                        setAddress(company.address);
                        setCountry(company.country);
                        setShow(company.id);
                    }
                    return (
                        (
                            <div key={company.id}>

                                <div id='cardd' className="card bg-transparent border border-light mb-4" >
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h4 className="card-title">{company.companyName}</h4>
                                            <h4><i id='thrash' onClick={() => handleDelete(company.id)} className="bi bi-trash"></i></h4>
                                        </div>
                                        <h6 className="card-title">{company.address}</h6>
                                        <div className='d-flex justify-content-between'>
                                            <p className="card-text">{company.country}</p>
                                            <i id='thrash' className="bi bi-pen" type="button" onClick={handleShow}></i>
                                        </div>
                                    </div>
                                </div>


                                <Modal show={show == company.id} onHide={handleClose} className="text-dark 5">
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit your company</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    value={name}
                                                    autoFocus
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    value={address}
                                                    autoFocus
                                                    onChange={(e) => setAddress(e.target.value)}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Country</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    value={country}
                                                    autoFocus
                                                    onChange={(e) => setCountry(e.target.value)}
                                                />
                                            </Form.Group>

                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={() => updateCompanies(company.id)}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        )
                    )
                })}
            </div>



        </div >
    )
}

export default Companies