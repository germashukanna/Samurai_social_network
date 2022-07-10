import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'



type ProfileStatusType = {
    status: string,
    updateStatusTC: (status: string) => void

}

class ProfilIStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: !this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatusTC(this.state.status)
    }

    onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
       this.setState({
           status: event.currentTarget.value
       });
    }


    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}> {this.props.status || "-------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode}
                               value={this.props.status} autoFocus={true}
                               onChange={this.onStatusChange}
                        />
                    </div>
                }
            </>
        )
    }
}

export default ProfilIStatus