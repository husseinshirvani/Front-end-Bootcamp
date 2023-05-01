import classNames from "classnames"
import classes from './ToDo.module.css'

export const ToDo = ({ id, title, checked, onRemoveHandler, onCheckedHandler, onEditHandler }) => {
    return (
        <li>
            <p className={checked ? classNames(classes.checked) : ""}>{title}</p>
            <div className={classNames(classes.actions)}>
                <button onClick={() => onRemoveHandler(id)}>Delete</button>
                <button onClick={() => onCheckedHandler(id)}>{checked ? "To Do" : "Mark as Done"}</button>
                <button onClick={() => onEditHandler(id, title)}>Edit</button>
            </div>
        </li>
    )
}