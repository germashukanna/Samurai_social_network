import React, {ChangeEvent, useEffect, useState} from 'react';


type ProfileStatusType = {
    status: string,
    updateStatusTC: (status: string) => void
}

export const ProfilIStatusWithHook: React.FC<ProfileStatusType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    }

    const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.currentTarget.value)
    }

        return (
            <>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input  onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                        value={status}/>
                    </div>
                }
            </>
        )
}


