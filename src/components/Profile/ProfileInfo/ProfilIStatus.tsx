import React from 'react';
import s from './ProfileInfo.module.css'


type ProfileStatusType = {
    status: string
}

class ProfilIStatus extends React.Component<ProfileStatusType>{
        state = {
        editMode: false
    }

    activateEditMode  () {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode  () {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
                    <>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}> {this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                </div>
            }
        </>
        )
    }
}

export default ProfilIStatus