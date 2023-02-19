import React from "react";
import {useFormik} from "formik";
import Button from "@mui/material/Button/Button";
import FormControl from "@mui/material/FormControl/FormControl";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import s from './ProfileDataForm.module.css'
import {saveProfile} from "../../../redux/Profile-reducer";
import {useAppDispatch} from "../../../redux/Hooks";
import {getProfileResponseType} from "../../../Api/api";
import Box from "@mui/material/Box";
import {CustomButton} from "../../../common/Button/Button";
import {TextField} from "@mui/material";
import {Navigate, NavLink} from "react-router-dom";


type FormikErrorsType = {
    message?: string | undefined
}

type ProfileDataFormPropsType = {
    profile: getProfileResponseType
    notToEditMode: () => void
}
export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = (props) => {

    let dispatch = useAppDispatch()

    let formik = useFormik({
        initialValues: {
            aboutMe: "",
            lookingForAJob: false,
            lookingForAJobDescription: "",
            fullName: '',
            contacts: {
                github: '',
                website: '',
                facebook: '',
                instagram: ''
            }
        },
        onSubmit: (values: getProfileResponseType) => {
            dispatch(saveProfile(values))
            // props.notToEditMode
        }
    })

    return (
        <div className={s.wrapper}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl className={s.formControl}>
                    <FormGroup>
                        <div className={s.ProfileDataFormCustomButton}>
                            <CustomButton children={'Save'}/>
                        </div>
                        <Box>
                            <TextField
                                {...formik.getFieldProps('fullName')}
                                placeholder="Enter yore full name." onBlur={formik.handleBlur}
                                color="info" variant={'outlined'}
                                sx={{mb: '10px', ml: '10px'}}
                            />
                        </Box>
                        <Box>
                            <FormControlLabel label={'looking for a job'} control={<Checkbox color={'primary'}
                                                                                             onChange={formik.handleChange}
                                                                                             checked={formik.values.lookingForAJob}
                                                                                             name='lookingForAJob'/>}/>
                        </Box>
                        <Box>
                            <TextField
                                {...formik.getFieldProps('lookingForAJobDescription')}
                                placeholder="Description." onBlur={formik.handleBlur}
                                color="info" variant={'outlined'}
                                sx={{mb: '10px', ml: '10px'}}
                            />
                        </Box>
                        <Box>
                            <TextField
                                {...formik.getFieldProps('aboutMe')}
                                placeholder="About me." onBlur={formik.handleBlur}
                                color="info" variant={'outlined'}
                                sx={{mb: '10px', ml: '10px'}}
                            />
                        </Box>
                        <div>
                            <b>Contacts:</b>: <div
                            className={s.contacts}>
                            <div>
                                <b>Github: <TextField
                                    {...formik.getFieldProps('contacts.github')}
                                    placeholder="Github." onBlur={formik.handleBlur}
                                    color="info" variant={'outlined'}
                                    sx={{mb: '10px', ml: '10px'}}
                                /></b>
                            </div>
                            <div>
                                <b>Facebook:<TextField
                                    {...formik.getFieldProps('contacts.facebook')}
                                    placeholder="Facebook." onBlur={formik.handleBlur}
                                    color="info" variant={'outlined'}
                                    sx={{mb: '10px', ml: '10px'}}
                                /></b>
                            </div>
                            <div>
                                <b>Instagram: <TextField
                                    {...formik.getFieldProps('contacts.instagram')}
                                    placeholder="Instagram." onBlur={formik.handleBlur}
                                    color="info" variant={'outlined'}
                                    sx={{mb: '10px', ml: '10px'}}
                                /></b>
                            </div>
                            <div>
                                <b>Website: <TextField
                                    {...formik.getFieldProps('contacts.website')}
                                    placeholder="Website." onBlur={formik.handleBlur}
                                    color="info" variant={'outlined'}
                                    sx={{mb: '10px', ml: '10px'}}
                                /></b>
                            </div>
                        </div>
                        </div>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    )
}