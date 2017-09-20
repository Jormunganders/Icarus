import React from "react";
import {EditText} from "../../common/EditText";
import {VERIFY} from "../../../utils/Api";
import {getVerify, signOn} from "../../../utils/Service";
import {delCookie, setCookie} from "../../../utils/CookieUtils";
import {ACCOUNT_INFO} from "../../../utils/Mapx";
import {updateCurrentUser} from "../../../utils/UserUtils";
import "./index.css";
//import {stylebox} from './style.js';
class SignOn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passwd: '',
            verify: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSignOn = this.handleSignOn.bind(this);
    }

    handleSignOn() {
        // console.log(parseString(this.state))
        signOn({
            username: this.state.username,
            passwd: this.state.passwd,
            verify: this.state.verify
        }, data => {
            if (data.status === "ok") {
                this.setState({message: "Success"});
                setCookie({
                    username: this.state.username,
                    token: data.data.token
                });
                updateCurrentUser({
                    username: this.state.username,
                    token: data.data.token
                });
                this.props.history.push(ACCOUNT_INFO);
            } else {
                this.setState({message: data.message});
                this.refs.verify.handleClick();
            }
        });
        delCookie("message")
    }

    handleChange(newState) {
        this.setState(newState);
    }

    render() {
        const message = this.state.message;

        return (
            <div className="signon_box">
                <ul>
                    <li>
                        <div className="username">
                            <label>Username:</label>
                            <EditText className="edittext" content={this.state.username}
                                      onChange={
                                          value => this.setState({username: value})}/>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className="username">
                        <label>Password:</label>
                            <EditText className="edittext"  content={this.state.passwd}
                                      onChange={
                                          value => this.setState({passwd: value})
                                      }
                                      type="password"/>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className="img">
                            <Verify ref="verify"/>
                        </div>
                    </li>
                    <li>
                        <div className="username">
                        <label>Verify:</label>
                            <EditText className="edittext"  content={this.state.verify}
                                      onChange={
                                          value => this.setState({verify: value})
                                      }/>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div className="button">
                            <button onClick={this.handleSignOn}>SignOn</button>
                        </div>
                    </li>
                </ul>
                {message === 'Success' && <p>{message}</p>}
                {message !== 'Success' && <p className="red">{message}</p>}
            </div>
        );
    }

}

class Verify extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            url: VERIFY
        };
    }


    handleClick() {
        this.setState({url: getVerify()})
    }

    render() {
        const url = this.state.url;
        return (
            <img src={url} onClick={this.handleClick} alt="Verify"/>
        );
    }
}

export default SignOn