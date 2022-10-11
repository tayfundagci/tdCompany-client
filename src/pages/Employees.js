import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { fetchAllEmployee } from '../redux/employee/services';

function Employees() {

    const dispatch = useDispatch();
    const employees = useSelector(state => state.employee.items.employeeList);
    const isLoading = useSelector((state) => state.employee.isLoading);
    const error = useSelector((state) => state.employee.error);

    useEffect(() => {
        dispatch(fetchAllEmployee());
    }, [])


    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <Error message={error} />
    }

    console.log(employees);

    return (
        <div className="container">
            <div className='row justify-content-center'>
                {employees && employees.map((employee) => (
                    <div className='col-lg-4' key={employee.id}>
                        <Link to={`/employee/${employee.id}`}>
                            <div id='cardd' className="card bg-transparent border border-light mt-3">
                                <div className="card-body">
                                    <h4 className="card-title">{employee.name}</h4>
                                    <h6 className="card-text">{employee.position}</h6>
                                    <h6 className="card-title">{employee.age}</h6>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
                <Link id='new-employee' to="/addemployee" className='mt-4 text-center'  >Add a New Employee</Link>

            </div>

        </div >
    )
}

export default Employees