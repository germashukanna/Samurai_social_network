import React from "react";
import {connect} from "react-redux";
import {
    getUsers, follow,
    setCurrentPage, unFollow,
    toggleFollowingProgress,
    UserType,
} from "../../redux/Users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPageUsers,
    getTotalUsersCount
} from "../../redux/users-selectors";

type mapStatePropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => any

}

export type UsersPropsType = mapStatePropsType & MapDispatchToProps


class UsersContainer extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   unfollow={this.props.unFollow}
                   follow={this.props.follow}
                   onPageChanged={this.onPageChanged}

            />

        </>
    }

}


let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: getPageUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}



// let whithRedirect = withAuthRedirect(UsersContainer)
//
// export const UsersContainerToStore = connect(mapStateToProps, {
//     follow,
//     unFollow,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers,
// })(whithRedirect);

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
    }),
    withAuthRedirect,
)(UsersContainer)

