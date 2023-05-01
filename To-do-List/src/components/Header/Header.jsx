import classNames from 'classnames';
import classes from './Header.module.css';

export const Header = () => {
    return <div className={ classNames(classes.box, classes.logo) }>Header</div>;
}