import React, { useState, useEffect} from 'react';

function EmployeeList(){
    const [employees, setEmployees] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:9000/employees')
        .then(response => response.json())
        .then(data => {
            setEmployees(data);
        })
        .catch((err) => {
                console.log(err.message);
        });
    },[]);

    return (
        <div>
            <h1>List of Employees</h1>
            {employees.map((employee)=>{
                return (
                    <div className="card my-2 p-2">
                        <div>Name : {employee.name}</div>
                        <div>Title : {employee.title}</div>
                        <div>Gender : {employee.gender}</div>
                        <div>Age: {employee.age}</div>
                    </div>
                );
            })}
        </div>
    );
}

export default EmployeeList;