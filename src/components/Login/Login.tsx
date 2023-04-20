import React from "react";
import {useFormik} from "formik";
import FormControl from "@mui/material/FormControl/FormControl";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import TextField from "@mui/material/TextField/TextField";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import {AppStateType} from "../../redux/redux-store";
import {useAppDispatch, useAppSelector} from "../../redux/Hooks";
import {Navigate} from "react-router-dom";
import {loginTC, logOutTC} from "../../redux/auth-reducer";
import s from './Login.module.css'
import {CustomButton} from "../../common/Button/Button";


interface Values {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl: string
}

type PropsType = {
    onHandlerSubmit: (data: Values) => void
    onClickLogout: () => void
}

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl: string
}

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const LoginForm: React.FC<PropsType> = React.memo((props) => {

    const captchaUtl = useAppSelector((state: AppStateType) => state.auth.captchaUrl)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captchaUrl: ''
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
        <div className={s.loginFormContainer}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField label="Email" margin="normal" {...formik.getFieldProps('email')}
                                   onBlur={formik.handleBlur}
                                   size={'small'} variant="filled"
                        />
                        {formik.touched.email &&
                        formik.errors.email
                            ? <div style={{color: '#DF204D'}}>{formik.errors.email}</div>
                            : null}
                        <TextField type="password" label="Password" margin="normal"
                                   {...formik.getFieldProps('password')}
                                   onBlur={formik.handleBlur}
                                   size={'small'} variant="filled"
                        />
                        {formik.touched.password &&
                        formik.errors.password
                            ? <div style={{color: '#DF204D'}}>{formik.errors.password}</div>
                            : null}
                        <FormControlLabel label={'Remember me'} control={<Checkbox color={'default'}
                                                                                   onChange={formik.handleChange}
                                                                                   checked={formik.values.rememberMe}
                                                                                   name='rememberMe'/>}/>
                        {captchaUtl && <img src={captchaUtl}/>}
                        {captchaUtl &&
                            <TextField label="CaptchaUrl" margin="normal" {...formik.getFieldProps('captchaUrl')}
                                       onBlur={formik.handleBlur}
                            />}
                        <CustomButton children={'Login'}/>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
})

export const Login = () => {

    const isLoggedIh = useAppSelector((state: AppStateType) => state.auth.isAuth)
    const authUserId = useAppSelector((state: AppStateType) => state.auth.id)
    const captchaUtl = useAppSelector((state: AppStateType) => state.auth.captchaUrl)
    const dispatch = useAppDispatch()

    const onHandlerSubmit = (formData: FormDataType) => {
        dispatch(loginTC(formData.email, formData.password, formData.rememberMe, formData.captchaUrl));
    }

    const onClickLogout = () => {
        dispatch(logOutTC())
    }

    return (
        <div className={s.loginContainer}>
            {isLoggedIh ? <Navigate to={"/profile/" + authUserId}/>
                : <div>
                    <h1>Login</h1>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                    <LoginForm onClickLogout={onClickLogout}
                               onHandlerSubmit={onHandlerSubmit}/>
                    {captchaUtl}
                </div>
            }
        </div>
    )
}