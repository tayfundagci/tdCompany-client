import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, LineChart, Line, PieChart, Pie } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllEmployee } from '../redux/employee/services';
import { fetchCompany, getCompanyPerson } from '../redux/company/services';
import _ from "lodash";

function Dashboard() {

    const dispatch = useDispatch();
    const employees = useSelector(state => state.employee.items.employeeList);
    const company = useSelector(state => state.company.items.companyList);
    const companyPerson = useSelector(state => state.company.items);
    useEffect(() => {
        dispatch(fetchAllEmployee());
        dispatch(fetchCompany());
        dispatch(getCompanyPerson());
    }, [])

    console.log(employees);
    console.log(companyPerson)


    // const countOfEmployee = () => {
    //     return _(employees).groupBy('company.name').map((v, companyName) => ({ companyName, count: v.length })).value();
    // }

    // const countData = countOfEmployee();
    // console.log(countData);

    return (
        <>
            <BarChart width={1000} height={300} data={employees} style={{ marginTop: "50px" }}>
                <XAxis dataKey="name" stroke="white" angle={-45} />
                <YAxis stroke='white' />
                <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
                <Legend width={200} wrapperStyle={{ top: -30, right: 10, backgroundColor: '#ddd', border: '1px solid #d5d5d5', borderRadius: 5, lineHeight: '0' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
                <Bar dataKey="age" fill="#8884d8" barSize={30} />
            </BarChart>
            <hr /> <br />

            <LineChart width={1000} height={300} data={companyPerson}>
                <XAxis dataKey="name" stroke="white" className='text-truncate' style={{ maxWidth: "50px" }} />
                <YAxis stroke='white' />
                <Tooltip wrapperStyle={{ width: 200, backgroundColor: '#ccc' }} />
                <Legend width={200} wrapperStyle={{ top: 0, right: 0, backgroundColor: '#000', border: '1px solid #d5d5d5', borderRadius: 5, lineHeight: '0' }} />
                <Line type="monotone" dataKey="personCount" stroke="#8884d8" />
            </LineChart>

        </>
    )
}

export default Dashboard