import s from './NotFound.module.css'

export const NotFound = () => {
    return (
        <div className={s.notFoundContainer}>
            <div className={s.notFound}>404 • PAGE NOT FOUND</div>
        </div>
    )
}