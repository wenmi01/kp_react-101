// import { useState } from "react";
import { useState, useEffect } from "react";

function SampleForm() {

    const [inputs, setInputs] = useState({
        id: 0, // Default, means new record data, 1 is update
        // status: 'active',
        // status: "",
        average: '',
        version: 1,
    });

    const [status, setStatus] = useState();
    
    const [average, setAverage] = useState(0);

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        
        // validation can be done here
        if(fieldName === 'age' && (fieldValue > 99 || fieldValue < 0 || fieldValue === undefined || fieldValue.toString().trim() === '' || !fieldValue) ){
            setErrors(values=>({...values, age: "This field must be less than 100, not below 0.", age_fieldClass: 'error-field'}));
        }else{
            setErrors(values=>({...values, age: "", age_fieldClass: ''}));
        }

        setInputs(values=>({...values,[fieldName]: fieldValue}));
        
        // console.log(inputs);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // not move to another page
        // setInputs(values=>({...values, version: 2}));
        // setInputs({version: 2});
        // setInputs({version: inputs.version + 1});

        // example validation
        // if(input.email.contains("@")){
        // }

        setInputs(values=>({...values, version: inputs.version + 1}));

        // handling error
        //if(inputs.email.contains('@'))
        if(inputs.first_name === undefined || inputs.first_name.trim() === ''){
            // document.getElementById("err_first_name").innerHTML = "This field is required!";
            //<div id="err_first_name" className="error_message"></div>
            setErrors(values=>({...values, first_name: "This field is required", first_name_fieldClass: 'error-field'}));
        }else{
            setErrors(values=>({...values, first_name: "", first_name_fieldClass: ""}));
        }

        if(inputs.last_name === undefined || inputs.last_name.trim() === ''){
            setErrors(values=>({...values, last_name: "This field is required", last_name_fieldClass: "error-field"}));
        }else{
            setErrors(values=>({...values, last_name: "", last_name_fieldClass: ""}));
        }

        // validation can be done here
        if((inputs.age > 99 || inputs.age < 0 || inputs.age === undefined || inputs.age.toString().trim() === '' || !inputs.age) ){
            setErrors(values=>({...values, age: "This field must be less than 100, not below 0.", age_fieldClass: 'error-field'}));
        }else{
            setErrors(values=>({...values, age: "", age_fieldClass: ''}));
        }

        // console.log(inputs);
    }

    // Triggered on change, used for timers
    // useEffect(()=>{
    //     console.log(inputs);
    // }, [inputs]);

    useEffect(()=>{
        // console.log(inputs);

        let average = ( parseInt(inputs.score1) + parseInt(inputs.score2) + parseInt(inputs.score3) ) / 3;
        
        if(average >= 75){
            // setInputs((values)=>({...values, status: "Passed"}));
            setStatus('Passed');
        }else{
            // setInputs((values)=>({...values, status: "Failed"}));
            setStatus('Failed');
        }

        if(average !== undefined && !isNaN(average) ){
            setAverage(average);
        }

    
    }, [inputs]);

    return(
        <div className="">
            <form className="form" 
            onSubmit={handleSubmit}
            >
                <div className="row">
                    <div className="col-sm-4">
                        <label>First Name:</label>
                        <input type="text" name="first_name" className={"form-control text-input-field " + errors.first_name_fieldClass }
                        value={inputs.first_name} onChange={handleChange}/>
                        <div className="error_message">{errors.first_name}</div>
                    </div>
            
                    <div className="col-sm-4">
                        <label>Last Name:</label>
                        <input type="text" name="last_name" className={"form-control text-input-field " + errors.last_name_fieldClass } value={inputs.last_name} onChange={handleChange}/>
                        <div className="error_message">{errors.last_name}</div>
                    </div>
              </div>
                <div className="row">
                    <div className="col-sm-4">
                        <label>Age:</label>
                        <input type="number" name="age" className={"form-control text-input-field " + errors.age_fieldClass } value={inputs.age} onChange={handleChange} min="0" max="100"/>
                        <div className="error_message">{errors.age}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <label>Score 1: </label>
                        <input type="number" name="score1" className={"form-control number-input-field " + errors.age_fieldClass} value={inputs.score1} onChange={handleChange} min="0" max="100"/>
                        <div className="error_message">{errors.score1}</div>
                    </div>
                    <div className="col-sm-4">
                        <label>Score 2: </label>
                        <input type="number" name="score2" className={"form-control number-input-field " + errors.age_fieldClass} value={inputs.score2} onChange={handleChange} min="0" max="100"/>
                        <div className="error_message">{errors.score2}</div>
                    </div>
                    <div className="col-sm-4">
                        <label>Score 3: </label>
                        <input type="number" name="score3" className={"form-control number-input-field " + errors.age_fieldClass} value={inputs.score3} onChange={handleChange} min="0" max="100"/>
                        <div className="error_message">{errors.score3}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <label>AVERAGE: {average}</label>
                    </div>
                    <div className="col-sm-4">
                        <label>STATUS: {status}</label>
                    </div>
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default SampleForm;