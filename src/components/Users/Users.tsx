import s from "./Users.module.css";
import userPhoto from "../../assets/images/userFhoto.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/Users-reducer";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    onPageChanged: (page: number) => void
}

export let Users = React.memo((props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {pages.map(p => <span key={p}  className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>)}
            <div>

                {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                      <NavLink to={"/profile/" + u.id}>
                          <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photoUrl}/>
                      </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some((id) => id === u.id)}
                                      onClick={() => {props.unfollow(u.id);

                                      }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some((id) => id === u.id)}
                                      onClick={() => {props.follow(u.id);
                            }}>follow</button>}
                        {/*<button>Follows</button>*/}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
                </div>)}
            </div>
        </div>
    )
})