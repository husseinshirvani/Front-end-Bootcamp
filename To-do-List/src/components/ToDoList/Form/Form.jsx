import classNames from "classnames"
import classes from './Form.module.css'
import { useState } from "react"

export const Form = ( {onAdd} ) => {
    const [value, setValue] = useState("");

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }

    const onClickHandler = () => {
        if (value) {
            onAdd(value);
            setValue("");
        }
    }

    return (
        <div className={classNames(classes.form)}>
            <input type="text" onChange={onChangeHandler} value={value} />
            <button onClick={onClickHandler}>Submit</button>
        </div>
    )
}