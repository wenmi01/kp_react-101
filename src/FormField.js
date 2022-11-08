import { memo } from "react";

const FormField = ({fieldList, onAddField, onRemoveField}) => {
    return(
        <>
            {fieldList.map((field, counter) =>{
                return (
                    <div class="row">
                        <div className="col-sm-3">
                            <input type="text" className="form-control" name={field.fieldName} placeholder="Description"/>
                        </div>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" name={field.fieldName}  placeholder="Qty"/>
                        </div>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" name={field.fieldName} placeholder="Unit Price"/>
                        </div>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" name={field.fieldName} placeholder="Amount"/>
                        </div>
                    </div>
                )
            } )}
            <button className="btn btn-primary" onClick={onAddField}>Add New Field</button>
            <button className="btn btn-primary" onClick={onRemoveField}>Remove Field</button>
        </>
    )
}

export default memo(FormField);