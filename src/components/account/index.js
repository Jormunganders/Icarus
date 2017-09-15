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
        getAccountInfo('qiaoyunrui', result => console.log(result))
    }

    render() {
        return (
            <div>
                Account!!
                <SignOnVerify/>
            </div>);
    }
}