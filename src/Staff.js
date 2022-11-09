import React, { useState, useEffect} from 'react';

// import Button from 'react-bootstrap/button';
// import Modal from 'react-bootstrap/Modal';


function Staff(){
    
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
         fetch("http://localhost:9000/employees")
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

    const onClickView = (event, item) => {
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

        fetch('http://localhost:9000/employees/' + 0,
            {
                method: 'POST',
                body: JSON.stringify(formFields),
                headers: {'Content-type' : 'application/json; charset=UTF-8',},
            } 
        )
        .then(response => response.json())
        .then(data => {
            setFormFields(data);
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

            <form onSubmit={onHandleSubmit}>
                <input type="hidden" value="{formFields.id}"/>
                <input type="text" name="name" value={formFields.name} placeholder="name" onChange={handleChange}/>
                <input type="text" name="title" value={formFields.title} placeholder="title" onChange={handleChange}/>
                <input type="text" name="gender" value={formFields.gender} placeholder="gender" onChange={handleChange}/>
                <input type="text" name="age" value={formFields.age} placeholder="age" onChange={handleChange}/>
                <div><input type="submit"/></div>
            </form>

            {staffs.map((item)=>{
                return (
                    <div className="card my-2 p-2">
                        <div>Name : {item.name}</div>
                        <div>Title : {item.title}</div>
                        <div>Gender : {item.gender}</div>
                        <div>Age: {item.age}</div>
                        <button className="btn btn-primary" onClick={(event) => onClickView(event, item)}>View</button>
                    </div>
                );
            })}

        </div>
    );
}

export default Staff;