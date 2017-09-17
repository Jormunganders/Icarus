//用户信息界面
import React from "react";
import SignOnVerify from "./SignOnVerify";
import {getAccountInfo} from "../../utils/Service";
import {getCurrentUser, updateCurrentUser} from "../../utils/UserUtils";
import SignOut from "./SignOut";
import {ACCOUNT_EDIT} from "../../utils/Mapx";
import Link from "react-router-dom/es/Link";

export class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: getCurrentUser(),
            message: ''
        };
    }

    componentWillMount() {
        //获取用户信息
        getAccountInfo(this.state.currentUser.username, result => {
            if (result.status === 'ok') {   //获取信息成功
                updateCurrentUser(result.data);
                this.setState({currentUser: getCurrentUser()})
            } else {
                this.setState({message: "获取用户信息失败"});
            }
        });
    }

    render() {
        const user = this.state.currentUser;
        return (
            <div>
                <SignOnVerify/>
                <h1>{user.user_nick}</h1>
                用户名：<h2>{user.username}</h2>
                邮箱： <h2>{user.email}</h2>
                <h4 className="red">{this.state.message}</h4>
                <ul>
                    <li><Link to={ACCOUNT_EDIT}>修改信息</Link></li>
                    <li>我的帖子</li>
                    <li><SignOut onSignOut={
                        () => {
                            this.setState({
                                message: '账号已退出，请重新登录！'
                            })
                        }
                    }/></li>
                </ul>
            </div>);
    }
}

/**
 * 这个界面要展示的信息有：【Step by Step】
 * pickname
 * 我的帖子
 */
