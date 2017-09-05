import React from "react";
import Appbar from 'muicss/lib/react/appbar';
import {
    Link
} from 'react-router-dom'
import {HOME, SIGN_UP} from "../../utils/Mapx";

const Header = () => (
    <Appbar>
        <h1><Link to={HOME}>Icarus</Link></h1>
        <Link to={SIGN_UP}>Sign up</Link>
    </Appbar>
);

export default Header