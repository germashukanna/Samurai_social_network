import React from "react";
import {useFormik} from "formik";
import Button from "@mui/material/Button/Button";
import {TextField} from "@mui/material";
import {CustomButton} from "../common/Button/Button";


type FormikErrorsType = {
    message?: string | undefined
}

export type ValuesType = {
    callback?: (values: ValuesType) => void
    message?: string | undefined
    removeButton?: boolean
};

export const AddMessageForm: React.FC<ValuesType> = React.memo((props) => {

    let formik = useFormik({
        initialValues: {
            message: ''
        },
        validate: (value) => {
            let error: FormikErrorsType = {};

            if (!value.message) {
                error.message = 'Required';
            } else if (value.message.length > 30) {
                error.message = 'Invalid text';
            }
            return error
        },
        onSubmit: (values: ValuesType) => {
            if (props.callback) {
                props.callback(values)
            }
            formik.resetForm();
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <TextField
                    {...formik.getFieldProps('message')}
                    placeholder="Enter yore message." onBlur={formik.handleBlur}
                    color="info" variant={'outlined'}
                    sx={{mb: '10px'}}
                />
                {formik.errors.message
                    && formik.touched.message
                    && <div style={{color: '#DF204D'}}>{formik.errors.message}</div>}
            </div>
            <div>
                <CustomButton children={'Send'}/>
                {props.removeButton ? <button type="button">Remove</button> : ''}
            </div>
        </form>
    )

})