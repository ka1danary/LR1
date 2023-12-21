import React from 'react';
import { Link } from 'react-router-dom';

import moduleHeader from './Header.module.sass'

const Header = () => {

    return (
        <div className={moduleHeader.headerBox}>
            <ul className={moduleHeader.headerUL}>
                <li>
                    <Link to='/' style={{ 'color': '#f55d9a' }}>Анализ</Link>
                </li>
                <li>
                    <Link to='/bubble'>Сортировки (INT)</Link>
                </li>
                <li>
                    <Link to='/string'>Сортировки (String)</Link>
                </li>
                <li>
                    <Link to='/analys' style={{ 'color': '#f55d9a' }}>Анализ EX</Link>
                </li>
                <li>
                    <Link to='/EInt'>Внешние (INT)</Link>
                </li>
                <li>
                    <Link to='/Estring'>Внешние (String)</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;