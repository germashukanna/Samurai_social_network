import s from "./Users.module.css";
import userPhoto from "../../assets/images/userFhoto.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {UserType} from "../../redux/Users-reducer";
import Button from "@mui/material/Button/Button";


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
                            ? <Button variant={'outlined'} color={'secondary'} size={'small'}
                                      sx={{ mt: 0.5, mb: 0.5 }}
                                disabled={followingInProgress.some((id) => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id);

                                      }}>Unfollow</Button>
                            : <Button variant={'outlined'} color={'secondary'} size={'small'}
                                      sx={{ mt: 0.5, mb: 0.5 }}
                                disabled={followingInProgress.some((id) => id === user.id)}
                                      onClick={() => {
                                          follow(user.id);
                                      }}>follow</Button>}
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
