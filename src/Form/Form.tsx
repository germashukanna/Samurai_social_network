import React from "react";
import {useFormik} from "formik";
import Button from "@mui/material/Button/Button";


type FormikErrorsType = {
    message?: string | undefined
}

export type ValuesType = {
    callback?: (values: ValuesType) => void
    message?: string | undefined
    removeButton?: boolean
};

export const AddMessageForm: React.FC<ValuesType> = (props) => {

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
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <textarea
                    {...formik.getFieldProps('message')}
                    placeholder="Enter yore message." onBlur={formik.handleBlur}
                    color="secondary"
                />
                {formik.errors.message
                    && formik.touched.message
                    && <div style={{color: 'red'}}>{formik.errors.message}</div>}
            </div>
            <div>
                <Button type={'submit'} variant={'outlined'} color={'secondary'} size={'medium'}
                >
                    Send
                </Button>
                {props.removeButton ? <button type="button">Remove</button> : ''}
            </div>
        </form>
    )

}