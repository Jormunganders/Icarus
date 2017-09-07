import React from "react";
import {
    Link
} from 'react-router-dom'
import {HOME, SIGN_ON, SIGN_UP} from "../../utils/Mapx";
import './Header.css';

const Header = () => (
    <div>
        <h2 className="header-title"><Link to={HOME}>Icarus</Link></h2>
        <ul>
            <li><Link to={SIGN_UP}>Sign up</Link></li>
            <li><Link to={SIGN_ON}>Sign on</Link></li>
        </ul>
        <hr/>
    </div>
);

export default Header