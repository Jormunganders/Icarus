import * as React from "react";
import SignOnVerify from "./SignOnVerify";
import {getCurrentUser} from "../../utils/UserUtils";
import {EditText} from "../common/EditText";
import {editAccountInfo} from "../../utils/Service";
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
