import {DialogsPageType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialogs-reducer";
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
    onSendMessageChange: (body: string) => void
    sendMessage: () => void
}

export type DialogsPropsType = mapStatePropsType & matDispatchPropsType

const mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): matDispatchPropsType => {
    return {
        onSendMessageChange: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
//
// let AuthRedirectComponent = withAuthRedirect (Dialogs)
//
// export const SuperDialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)
