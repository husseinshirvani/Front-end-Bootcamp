import classNames from 'classnames'
import { ToDo } from './ToDo/ToDo'
import { Form } from './Form/Form'
import toDoClasses from './ToDo/ToDo.module.css'
import listClasses from './ToDoList.module.css'
import { useState } from 'react'

const toDoArray = [
    { id: Date.now(), title: 'First task in my To-Do List', checked: false }
]

export const ToDoList = () => {
    let [toDoList, setToDoList] = useState(toDoArray);

    const onAddHandler = (title) => {
        setToDoList([...toDoList, {id: Date.now(), title, checked: false}])
    }

    const onRemoveHandler = (id) => {
        const newArray = toDoList.filter(item => item.id !== id)
        setToDoList(newArray);
    }

    const onCheckedHandler = (id) => {
        const newArray = toDoList.map(item => {return item.id === id ? {...item, checked: !item.checked} : item})
        setToDoList(newArray);
    }

    const onEditHandler = (id, newTitle) => {
        const newArray = toDoList.map(item => {return item.id === id ? {...item, title: newTitle} : item})
        setToDoList(newArray);
    }

    return (
        <div>
            <ul className={classNames(toDoClasses.list)}> 
                { toDoList.map(item => 
                <ToDo key={item.id} 
                      id={item.id} 
                      title={item.title} 
                      checked={item.checked}
                      onRemoveHandler={onRemoveHandler} 
                      onCheckedHandler={onCheckedHandler}
                      onEditHandler={onEditHandler} />) }
            </ul>
            <Form onAdd={onAddHandler} />
        </div>
    )
}