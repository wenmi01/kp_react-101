import { useCallback, useState } from "react";
import FormField from "./FormField";

function DynamicForm(){

    const [formFields, setFormFields] = useState([
        {fieldName:"field1",value:"abc"},
        {fieldName:"field1",value:"efg"},
    ]);
    const [fieldCtr, setFieldCtr] = useState(3);

    const addField = useCallback(() =>{
        setFieldCtr(fieldCtr=>fieldCtr+1);
        setFormFields((fields) => [...fields, {fieldName:"field"+ fieldCtr, value:fieldCtr}]);        
    })

    const removeField = useCallback(() =>{
        if(fieldCtr > 1){
            formFields.pop();
            setFormFields(formFields);
            setFieldCtr(fieldCtr=>fieldCtr-3);
        }
    })

    return(
        <div className="row">
            <FormField fieldList={formFields} onAddField={addField} onRemoveField={removeField}/>
        </div>
    )
}

export default DynamicForm;