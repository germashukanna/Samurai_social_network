import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfilIStatusWithHook.module.css'

type ProfileStatusWithHooksPropsType = {
    status: string
    updateStatusTC:(status:string)=>any
}


export const ProfilIStatusWithHook =(props:ProfileStatusWithHooksPropsType)=>  {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)


    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    }


    return (
        <div className={s.ProfilIStatusWithHook}>
            <h3>User status:</h3>
            {/*если у нас false отображаем эту div*/}
            {!editMode && // если не эдит мод покажи спан
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '------'}</span>
                </div>
            }

            {/*если у нас true отображаем эту div*/}
            {editMode && //если будет эдитмод покажи импут
                <div>
                    <input onChange={onStatusChange} value={status} onBlur={deactivateEditMode} autoFocus={true}/>
                </div>
            }


        </div>
    );

};


