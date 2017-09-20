import React from "react";
import {
    Link
} from 'react-router-dom'
import {ACCOUNT_INFO, CLASS_LIST, HOME, PUBLISH_POST, SEARCH, SIGN_ON, SIGN_UP} from "../../utils/Mapx";
import './Header.css';
import {getSignOnState} from "../../utils/UserUtils";

class Header extends React.Component {
    render() {
        const accountInfo = (
            <li><Link to={ACCOUNT_INFO}>个人中心</Link></li>
        );
        const signUp = (
            <li><Link to={SIGN_UP}>注册</Link></li>
        );
        const signOn = (
            <li><Link to={SIGN_ON}>登录</Link></li>
        );
        let content = null;
        if (getSignOnState() === true) {  //已经登录
            content = accountInfo
        } else {
            content = [signOn, signUp]
        }
        return (
            <div>
                <div className="box">
                    <h2 className="header-title"><Link to={HOME}>Icarus</Link></h2>
                    <ul className="list">
                        <li><Link to={CLASS_LIST}>板块列表</Link></li>
                        <li><Link to={PUBLISH_POST}>发帖</Link></li>
                        <li><Link to={SEARCH}>搜索</Link></li>
                        {content}
                    </ul>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Header