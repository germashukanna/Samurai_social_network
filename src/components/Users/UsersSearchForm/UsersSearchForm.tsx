import s from './UsersSearchForm.module.css'
import React from "react";
import {useFormik} from "formik";
import {FilterType} from "../../../redux/Users-reducer";
import {IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select} from "@mui/material";
import { ClearOutlined } from '@mui/icons-material';
import {CustomButton} from "../../../common/Button/Button";
import {useSelector} from "react-redux";
import {getFilter} from "../../../redux/users-selectors";



interface Values {
    term: string
}

type FormikErrorType = {}

type UsersSearchFormPropsType = {
    onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<UsersSearchFormPropsType> = React.memo((props) => {

    const filter = useSelector(getFilter)

    const formik = useFormik({
        initialValues: {
            term: filter.term,
            friend: filter.friend
        },
        validate: (values) => {
        },
        onSubmit: (values: FilterType) => {
            props.onFilterChanged(values)
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={s.usersSearchFormContainer}>
            <div>
                <OutlinedInput
                    className={s.inputBase}
                    {...formik.getFieldProps('term')}
                    onBlur={formik.handleBlur}
                    placeholder="Provide your text"
                    sx={{height: '35px', mt: '22px', mr: '15px'}}
                    size={'small'}
                    endAdornment={
                    <InputAdornment  position="end">
                        <IconButton size={'small'} onClick={() => {formik.resetForm()}}>
                            <ClearOutlined/>
                        </IconButton>
                    </InputAdornment>
                    }/>
                {formik.touched.term
                    ? <div style={{color: '#DF204D'}}>{formik.errors.term}</div>
                    : null}
            </div>
            <div>
                <InputLabel id="demo-simple-select-label"> Friends</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Friends"
                    size={'small'}
                    color={'info'}
                    sx={{width: '150px', mr: '15px', height: '35px'}}
                    {...formik.getFieldProps('friend')}
                >
                    <MenuItem value={'null'}>All</MenuItem>
                    <MenuItem value={'true'}>Followed</MenuItem>
                    <MenuItem value={'false'}>Unfollowed</MenuItem>
                </Select>
            </div>
            <div className={s.customButtonSearchFormContainer}>
                <CustomButton children={'Search'}/>
            </div>
        </form>
    )
})