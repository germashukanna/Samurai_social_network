import React from "react";
import {useFormik} from "formik";
import FormControl from "@mui/material/FormControl/FormControl";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import TextField from "@mui/material/TextField/TextField";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Button from "@mui/material/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";


type loginPropsType = {}

export const LoginForm = (props: loginPropsType) => {

const isLoggedIh = useSelector((state: AppStateType) => state.login.isLoggedIh)
const dispatch = useDispatch()

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
        rememberMe: false
    },
    validate: (values) => {
        const errors: FormikErrorType = {}
        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
        }
        if (values.password.length <= 2) {
            errors.password = 'Invalid password'
        }
        return errors
    },
    onSubmit: values => {
        dispatch(loginTC(values))
        formik.resetForm();
    },
})
return (
    <div style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
        <form onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormGroup>
                    <TextField label="Email" margin="normal" {...formik.getFieldProps('email')}
                               onBlur={formik.handleBlur}
                               size={'small'} color={'secondary'}
                    />
                    {formik.touched.email &&
                    formik.errors.email
                        ? <div style={{color: 'red'}}>{formik.errors.email}</div>
                        : null}
                    <TextField type="password" label="Password" margin="normal"
                               {...formik.getFieldProps('password')}
                               onBlur={formik.handleBlur}
                               size={'small'} color={'secondary'}
                    />
                    {formik.touched.password &&
                    formik.errors.password
                        ? <div style={{color: 'red'}}>{formik.errors.password}</div>
                        : null}
                    <FormControlLabel label={'Remember me'}  control={<Checkbox color={'secondary'}
                        onChange={formik.handleChange} checked={formik.values.rememberMe} name='rememberMe'/>}/>
                    <Button type={'submit'} variant={'outlined'} color={'secondary'} size={'medium'}>
                        Login
                    </Button>
                </FormGroup>
            </FormControl>
        </form>
    </div>
)
}

export const Login = () => {
    return (
        <div style={{position: 'fixed', top: '22%', textAlign: 'center', width: '100%'}}>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}