import s from "./Paginator.module.css";
import React from "react";


type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
}

export let Paginator = React.memo((props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>{p}</span>)}
    </div>


})