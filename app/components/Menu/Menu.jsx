import React from 'react';
import { Link } from 'react-router-dom';
import style from './Menu.scss';

export default class Menu extends React.Component {
    render() {
        return (
            <nav className="nav">
                <Link className="item" to="/">Home</Link>
                <Link className="item" to="/api">Api</Link>
            </nav>
        );
    }
}
