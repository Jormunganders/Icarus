//用户信息界面
import React from "react";
import SignOnVerify from "./SignOnVerify";
import {getAccountInfo} from "../../utils/Service";

export class Account extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        //获取用户信息
        getAccountInfo('qiaoyunrui', result => console.log(result.data))
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
