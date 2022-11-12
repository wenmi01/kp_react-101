import React, { useState, useEffect} from 'react';

// import Button from 'react-bootstrap/button';
// import Modal from 'react-bootstrap/Modal';

import ApiService from './ApiService';
const apiPath = ApiService();

function Staff2(){

    // const [employees, setEmployees] = useState([]);

    const [staffs, setStaffs] = useState([]);

    const [formFields, setFormFields] = useState([]);

    // useEffect(() =>{
    //     fetch('http://localhost:9000/employees')
    //     .then(response => response.json())
    //     .then(data => {
    //         setEmployees(data);
    //     })
    //     .catch((err) => {
    //             console.log(err.message);
    //     });
    // },[]);

    useEffect(() =>{
        getEmployeeList();
     },[]);
 
     const getEmployeeList = () => {
        //  fetch( 'http://localhost:9000/employees' )
         fetch( apiPath + '/employees' )
         .then(response => response.json())
         .then(data => {
            setStaffs(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
     }

    // useEffect(() =>{
    //     fetch('http://localhost:9000/employees')
    //     .then(response => response.json())
    //     .then(data => {
    //         setStaff(data);
    //     })
    //     .catch((err) => {
    //             console.log(err.message);
    //     });
    // },[]);

    const onClickUpdate = (event, item) => {
        fetch('http://localhost:9000/employees/' + item.id)
        .then(response => response.json())
        .then(data => {
            setFormFields(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    //handle change
    const handleChange = (event) =>{
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        setFormFields(values=>({...values, [fieldName]: fieldValue}));
    };

    const onHandleSubmit = (event) => {
        event.preventDefault();

        let id = formFields.id;
        let method = id > 0 ? 'PUT' : 'POST';

        fetch( 'http://localhost:9000/employees/' + id,
            {
                method: method,
                body: JSON.stringify(formFields),
                headers: {'Content-type' : 'application/json; charset=UTF-8',},
            } 
        )
        .then(response => response.json())
        .then(data => {
            setFormFields(data);
            getEmployeeList();
        })
        .catch((err) => {
                console.log(err.message);
        });

    };

    const addHandler = (event) => {
        console.log('test');
        setFormFields({
            id: 0,
            name: "",
            title: "",
            age: "",
            gender: "",
        });
    };

    const onClickDelete = (event, item) => {
        fetch('http://localhost:9000/employees/' + item.id,
            {
                method: 'DELETE',
            }
        )
        .then(response => response.json())
        .then(data => {
            getEmployeeList();
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    return (
        <div>
            <h2 className="h1">List of Staff</h2>
            {/* {employees.map((employee)=>{
                return (
                    <div className="card my-2 p-2">
                        <div>Name : {employee.name}</div>
                        <div>Title : {employee.title}</div>
                        <div>Gender : {employee.gender}</div>
                        <div>Age: {employee.age}</div>
                    </div>
                );
            })} */}

            <button className="btn btn-primary" onClick={(event) => addHandler(event)}>Add New Record</button>

            <form onSubmit={onHandleSubmit}>
                <input type="hidden" value="{formFields.id}"/>
                <input type="text" name="name" value={formFields.name} placeholder="name" onChange={handleChange}/>
                <input type="text" name="title" value={formFields.title} placeholder="title" onChange={handleChange}/>
                <input type="text" name="gender" value={formFields.gender} placeholder="gender" onChange={handleChange}/>
                <input type="text" name="age" value={formFields.age} placeholder="age" onChange={handleChange}/>
                <div><input type="Submit"/></div>
            </form>

            {staffs.map((item)=>{
                return (
                    <div className="card my-2 p-2">
                        <div>Name : {item.name}</div>
                        <div>Title : {item.title}</div>
                        <div>Gender : {item.gender}</div>
                        <div>Age: {item.age}</div>
                        <button className="btn btn-primary" onClick={(event) => onClickUpdate(event, item)}>Update</button>
                        <button className="btn btn-danger" onClick={(event) => onClickDelete(event, item)}>Delete</button>
                    </div>
                );
            })};

        </div>
    );
}

export default Staff2;