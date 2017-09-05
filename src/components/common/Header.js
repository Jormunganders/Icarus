import React from "react";
import {
    Link
} from 'react-router-dom'
import {HOME, SIGN_UP} from "../../utils/Mapx";
import './Header.css';

const Header = () => (
    <div className="App-header">
        <h1><Link to={HOME}>Icarus</Link></h1>
        <Link to={SIGN_UP}>Sign up</Link>
    </div>
);

export default Header