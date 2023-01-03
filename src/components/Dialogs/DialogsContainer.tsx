import {DialogsPageType, sendMessageCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import React from "react";


type mapStatePropsType = {
    dialogsPage: DialogsPageType
}

type matDispatchPropsType = {
    sendMessage: (message: string) => void
}

export type DialogsPropsType = mapStatePropsType & matDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): matDispatchPropsType => {
    return {
        sendMessage: (message: string) => {
            dispatch(sendMessageCreator(message));
        }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)
