import React from "react";
import {
    Link
} from 'react-router-dom'
import {ACCOUNT_INFO, HOME, LINK_LIST, PUBLISH_POST, SIGN_ON, SIGN_UP} from "../../utils/Mapx";
import './Header.css';

const Header = () => (
    <div>
        <h2 className="header-title"><Link to={HOME}>Icarus</Link></h2>
        <ul>
            <li><Link to={SIGN_UP}>Sign up</Link></li>
            <li><Link to={SIGN_ON}>Sign on</Link></li>
            <li><Link to={LINK_LIST}>Post List</Link></li>
            <li><Link to={PUBLISH_POST}>Publish Post</Link></li>
            <li><Link to={ACCOUNT_INFO}>Account Info</Link></li>
        </ul>
        <hr/>
    </div>
);

export default Header