import React from "react";
import {
    Link
} from 'react-router-dom'
import {ACCOUNT_INFO, CLASS_LIST, HOME, PUBLISH_POST, SEARCH, SIGN_ON, SIGN_UP} from "../../utils/Mapx";
import './Header.css';

const Header = () => (
    <div>
        <h2 className="header-title"><Link to={HOME}>Icarus</Link></h2>
        <ul>
            <li><Link to={SIGN_UP}>注册</Link></li>
            <li><Link to={SIGN_ON}>登录</Link></li>
            <li><Link to={ACCOUNT_INFO}>个人中心</Link></li>
            <li><Link to={CLASS_LIST}>板块列表</Link></li>
            <li><Link to={PUBLISH_POST}>发帖</Link></li>
            <li><Link to={SEARCH}>搜索</Link></li>
        </ul>
        <hr/>
    </div>
);

export default Header