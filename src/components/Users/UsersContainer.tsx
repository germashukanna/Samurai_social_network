import React from "react";
import {connect} from "react-redux";
import {
    getUsers, follow,
    setCurrentPage, unFollow,
    toggleFollowingProgress,
    UserType, FilterType,
} from "../../redux/Users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage, getFilter,
    getFollowingInProgress,
    getIsFetching,
    getPageSize, getPageUsers, getPortionSize,
    getTotalUsersCount
} from "../../redux/users-selectors";

type mapStatePropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
    portionSize: number,
    filter: FilterType
}

type MapDispatchToProps = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void

}

export type UsersPropsType = mapStatePropsType & MapDispatchToProps


class UsersContainer extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter)

    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize, this.props.filter)
    }

    onFilterChanged = (filter: FilterType) => {
        this.props.getUsers(1, this.props.pageSize, filter)
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
                   portionSize={this.props.portionSize}
                   onFilterChanged={this.onFilterChanged}
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
        followingInProgress: getFollowingInProgress(state),
        portionSize: getPortionSize(state),
        filter: getFilter(state)
    }
}

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

