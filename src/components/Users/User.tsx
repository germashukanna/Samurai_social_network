import s from "./Users.module.css";
import userPhoto from "../../assets/images/userFhoto.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/Users-reducer";


type UsersPropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export let User: React.FC<UsersPropsType> = React.memo(({user, followingInProgress, unfollow, follow}) => {

        return (
            <div>
                <span>
                    <div>
                      <NavLink to={"/profile/" + user.id}>
                          <img alt={''} src={user.photos.small != null ? user.photos.small : userPhoto}
                               className={s.photoUrl}/>
                      </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some((id) => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id);

                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some((id) => id === user.id)}
                                      onClick={() => {
                                          follow(user.id);
                                      }}>follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
            </div>)
    }
)
