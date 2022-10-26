import { useState, forwardRef, useImperativeHandle } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

function Menu() {
    const active = { color: 'orange' };

    return (
        <nav>
            <h1>
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + '/img/logo_w.png'} alt="logo" />
                </Link>
            </h1>

            <ul id="gnb">
                <li>
                    <NavLink to='/department' activeStyle={active}>
                        Department
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/community' activeStyle={active}>
                        Community
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/gallery' activeStyle={active}>
                        Gallery
                    </NavLink>

                </li>
                <li>
                    <NavLink to='/youtube' activeStyle={active}>
                        Youtube
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/location' activeStyle={active}>
                        Location
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/member' activeStyle={active}>
                        Member
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
