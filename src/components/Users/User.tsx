import s from "./User.module.css";
import userPhoto from "../../assets/images/26-bpfull.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/Users-reducer";
import {CustomButton} from "../../common/Button/Button";


type UsersPropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export let User: React.FC<UsersPropsType> = React.memo(({user, followingInProgress, unfollow, follow}) => {

        return (
            <div className={s.userContainer}>
                <span>
                    <div>
                      <NavLink to={"/profile/" + user.id}>
                          <img alt={''} src={user.photos.small != null ? user.photos.small : userPhoto}
                               className={s.photoUrl}/>
                      </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <CustomButton children={'Unfollow'}
                                            disabled={followingInProgress.some((id) => id === user.id)}
                                            onClick={() => {
                                                unfollow(user.id);

                                            }}/>
                            : <CustomButton children={'Unfollow'}
                                            disabled={followingInProgress.some((id) => id === user.id)}
                                            onClick={() => {
                                                follow(user.id);
                                            }}/>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                </span>
            </div>)
    }
)
