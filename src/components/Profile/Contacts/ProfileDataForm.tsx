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
                        <Button type={'submit'} variant={'outlined'} color={'secondary'} size={'medium'}
                        >
                            save
                        </Button>
                        <Box>
                <textarea
                    {...formik.getFieldProps('fullName')}
                    placeholder="Enter yore full name." onBlur={formik.handleBlur}
                    color="secondary"
                />
                        </Box>
                        <Box>
                            <FormControlLabel label={'looking for a job'} control={<Checkbox color={'secondary'}
                                                                                             onChange={formik.handleChange}
                                                                                             checked={formik.values.lookingForAJob}
                                                                                             name='lookingForAJob'/>}/>
                        </Box>
                        <Box>
                        <textarea
                            {...formik.getFieldProps('lookingForAJobDescription')}
                            placeholder="Description" onBlur={formik.handleBlur}
                            color="secondary"
                        />
                        </Box>
                        <Box>
                        <textarea
                            {...formik.getFieldProps('aboutMe')}
                            placeholder="About me" onBlur={formik.handleBlur}
                            color="secondary"
                        />
                        </Box>
                        <div>
                            <b>Contacts:</b>: <div
                            className={s.contacts}>
                            <div>
                                <b>Github: <textarea
                                    {...formik.getFieldProps('contacts.github')}
                                    placeholder="github" onBlur={formik.handleBlur}
                                    color="secondary" name='contacts.github'
                                /></b>
                            </div>
                            <div>
                                <b>Facebook: <textarea
                                    {...formik.getFieldProps('contacts.facebook')}
                                    placeholder="facebook" onBlur={formik.handleBlur} name='contacts.facebook'
                                    color="secondary"
                                /></b>
                            </div>
                            <div>
                                <b>Instagram: <textarea
                                    {...formik.getFieldProps('contacts.instagram')}
                                    placeholder="instagram" onBlur={formik.handleBlur}
                                    color="secondary" name='contacts.instagram'
                                /></b>
                            </div>
                            <div>
                                <b>Website: <textarea
                                    {...formik.getFieldProps('contacts.website')}
                                    placeholder="github" onBlur={formik.handleBlur}
                                    color="secondary" name='contacts.website'
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