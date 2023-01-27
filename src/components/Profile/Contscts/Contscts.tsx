import React from 'react';

type contactsPropsType = {
    contactTitle: string,
    contactValue: any
}

export const Contacts:React.FC<contactsPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div><b>{contactTitle}</b>: {contactValue}</div>
    )
}