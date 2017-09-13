import React from "react";
import {
    Link
} from 'react-router-dom'
import {HOME, LINK_LIST, SIGN_ON, SIGN_UP} from "../../utils/Mapx";
import './Header.css';
import SignOut from "../account/SignOut";

const Header = () => (
    <div>
        <h2 className="header-title"><Link to={HOME}>Icarus</Link></h2>
        <ul>
            <li><Link to={SIGN_UP}>Sign up</Link></li>
            <li><Link to={SIGN_ON}>Sign on</Link></li>
            <li><Link to={LINK_LIST}>Link List</Link>   </li>
            <li><SignOut/></li>
        </ul>
        <hr/>
    </div>
);

export default Header