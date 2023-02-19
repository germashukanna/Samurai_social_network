import React from 'react';
import s from './Settings.module.css'

type SettingsPropsType = {}

const Settings: React.FC<SettingsPropsType> = () => {
    return (
        <div className={s.settingsContainer}>
            Settings
        </div>
    )
}

export default Settings