import s from "./Paginator.module.css";
import React, {useState} from "react";
import cn from 'classnames'
import Button from "@mui/material/Button/Button";


type PaginatorPropsType = {
    pageSize: number
    currentPage: number
    onPageChanged: (page: number) => void
    totalItemsCount: number
    portionSize: number
}

export let Paginator = React.memo((props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionSize = 10
    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.paginator}>
        {portionNumber > 1 &&
            <Button variant={'outlined'} color={'secondary'} size={'small'}
                    sx={{ mt:-0.4, mr: 1 }}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>PREV</Button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [s.selectedPages]: props.currentPage === p
                }, s.pageNumber)}
                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <Button variant={'outlined'} color={'secondary'} size={'small'}
                    sx={{ mt:-0.5, ml: 1 }}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>NEXT</Button>}
    </div>
})