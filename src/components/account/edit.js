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
        return (<div className="signon_box">
            <SignOnVerify/>
            <h1>{user.username}</h1>
            <br/>
            <ul>
                <li><h4>昵称</h4><br/><EditText content={this.state.nickname}
                                              onChange={
                                                  value => this.setState({
                                                      nickname: value
                                                  })
                                              }/>
                    <br/></li>
                <li><h4>邮箱</h4><br/><EditText content={this.state.email}
                                              onChange={
                                                  value => this.setState({
                                                      email: value
                                                  })
                                              }/>
                    <br/></li>
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
        return (<div className="signon_box">
                <SignOnVerify/>
                <ul>
                    <li>
                        <h4>旧密码</h4>
                        <br/>
                        <EditText content={this.state.old_passwd}
                                  onChange={
                                      value => this.setState({old_passwd: value})
                                  }
                                  type="password"/>
                        <br/>
                    </li>
                    <li>
                        <h4>新密码</h4>
                        <br/>
                        <EditText content={this.state.passwd}
                                  onChange={
                                      value => this.setState({passwd: value})
                                  }
                                  type="password"/>
                        <br/>
                    </li>
                    <li>
                        <h4>确认新密码</h4>
                        <br/>
                        <EditText content={this.state.repasswd}
                                  onChange={
                                      value => this.setState({repasswd: value})
                                  }
                                  type="password"/>
                        <br/>
                    </li>
                    <br/>
                    {this.state.message}
                    <br/>
                    <button onClick={this.handleEdit}>保存修改</button>
                </ul>
            </div>
        );
    }

}
