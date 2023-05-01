import classes from './Main.module.css';
import { ToDoList } from '../ToDoList/ToDoList';

const Main = () => {
    return (
        <div className={classes.container}>
            <ToDoList />
        </div>
    );
}

export default Main;