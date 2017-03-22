import React from 'react';
import style from './Layout.scss';
import Menu from '../components/Menu/Menu';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="container">
                <aside className="side">
                    <Menu />
                </aside>
                <main className="main">
                    {this.props.children}
                </main>
            </div>
        );
    }
}
