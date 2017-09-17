import * as React from "react";
import SignOnVerify from "./SignOnVerify";
import {getCurrentUser} from "../../utils/UserUtils";
import {EditText} from "../common/EditText";
import {editAccountInfo, editPassword} from "../../utils/Service";
import {ACCOUNT_INFO} from "../../utils/Mapx";

//修改信息
export class AccountEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname: getCurrentUser().user_nick,
            email: getCurrentUser().email,
            message: ''
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit() {
        editAccountInfo({
            username: getCurrentUser().username,
            nick: this.state.nickname,
            email: this.state.email
        }, result => {
            this.setState({message: result.message});
            if (result.status === 'ok') {
                this.props.history.push(ACCOUNT_INFO);
            }
        })
    }

    render() {
        const user = getCurrentUser();
        return (<div>
            <SignOnVerify/>
            <h2>{user.username}</h2>
            <ul>
                <li>昵称：<EditText content={this.state.nickname}
                                 onChange={
                                     value => this.setState({
                                         nickname: value
                                     })
                                 }/></li>
                <li>邮箱：<EditText content={this.state.email}
                                 onChange={
                                     value => this.setState({
                                         email: value
                                     })
                                 }/></li>
            </ul>
            <button onClick={this.handleEdit}>保存修改</button>
            <br/>
            {this.state.message}
        </div>);
    }

}

/**
 * 修改密码
 */
export class PasswordEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            old_passwd: '',
            passwd: '',
            repasswd: '',
            message: ''
        };
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit() {
        editPassword({
            username: getCurrentUser().username,
            old_passwd: this.state.old_passwd,
            passwd: this.state.passwd,
            repasswd: this.state.repasswd
        }, result => {
            this.setState({message: result.message});
            if (result.status === 'ok') {
                this.props.history.push(ACCOUNT_INFO);
            }
        })
    }


    render() {
        return (<div>
                <SignOnVerify/>
                <ul>
                    <li>旧密码：
                        <EditText content={this.state.old_passwd}
                                  onChange={
                                      value => this.setState({old_passwd: value})
                                  }
                                  type="password"/>
                    </li>
                    <li>新密码：
                        <EditText content={this.state.passwd}
                                  onChange={
                                      value => this.setState({passwd: value})
                                  }
                                  type="password"/></li>
                    <li>确认新密码：
                        <EditText content={this.state.repasswd}
                                  onChange={
                                      value => this.setState({repasswd: value})
                                  }
                                  type="password"/></li>
                    <br/>
                    {this.state.message}
                    <br/>
                    <button onClick={this.handleEdit}>保存修改</button>
                </ul>
            </div>
        );
    }

}
