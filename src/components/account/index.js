//用户信息界面
import React from "react";
import SignOnVerify from "./SignOnVerify";
import {getAccountInfo} from "../../utils/Service";
import {getCurrentUser, updateCurrentUser} from "../../utils/UserUtils";

export class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentUser: getCurrentUser()};
        console.log(this.state.currentUser)
    }

    componentWillMount() {
        //获取用户信息
        getAccountInfo(this.state.currentUser.username, result => {
            if (result.status === 'ok') {   //获取信息成功
                updateCurrentUser(result.data);
                console.log(this.state.currentUser);
            } else {

            }
        });
    }

    render() {
        return (
            <div>
                Account!!
                <SignOnVerify/>
            </div>);
    }
}

/**
 * 这个界面要展示的信息有：【Step by Step】
 * pickname
 * 我的帖子
 */
