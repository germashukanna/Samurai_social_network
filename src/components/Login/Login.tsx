import React from "react";
import {useFormik} from "formik";
import FormControl from "@mui/material/FormControl/FormControl";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import TextField from "@mui/material/TextField/TextField";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import Button from "@mui/material/Button/Button";
import {AppStateType} from "../../redux/redux-store";
import {useAppDispatch, useAppSelector} from "../../redux/Hooks";
import {Navigate} from "react-router-dom";
import {loginTC, logOutTC} from "../../redux/auth-reducer";


interface Values {
    email: string
    password: string
    rememberMe: boolean
}

type PropsType = {
    onHandlerSubmit: (data: Values) => void
    onClickLogout: () => void
}

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<PropsType> = (props) => {
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
            props.onHandlerSubmit(values)
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
                        <FormControlLabel label={'Remember me'} control={<Checkbox color={'secondary'}
                                                                                   onChange={formik.handleChange}
                                                                                   checked={formik.values.rememberMe}
                                                                                   name='rememberMe'/>}/>
                        <Button type={'submit'} variant={'outlined'} color={'secondary'} size={'medium'}>
                            Login
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
}

// const LoginReduxForm = reduxForm({form: 'Login'}) (LoginForm)

export const Login = () => {

    const isLoggedIh = useAppSelector((state: AppStateType) => state.auth.isAuth)
    const authUserId = useAppSelector((state: AppStateType) => state.auth.id)
    const dispatch = useAppDispatch()

    const onClickLogout = () => {
        dispatch(logOutTC())
    }

    const onHandlerSubmit = (formData: FormDataType) => {
        dispatch(loginTC(formData.email, formData.password, formData.rememberMe));
    }
    return (
        <div style={{position: 'fixed', top: '22%', textAlign: 'center', width: '100%'}}>
            {isLoggedIh ? <Navigate to={"/profile/" + authUserId}/>
                : <>
                    <h1>Login</h1>
                    <LoginForm onClickLogout={onClickLogout}
                               onHandlerSubmit={onHandlerSubmit}/>
                </>
            }
        </div>
    )
}