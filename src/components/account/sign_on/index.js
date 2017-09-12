import React from "react";
import {EditText} from "../../common/EditText";
import {VERIFY} from "../../../utils/Api";
import {getVerify, signOn} from "../../../utils/Service";
import {delCookie, setCookie} from "../../../utils/CookieUtils";

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
            console.log(data);
            if (data.status === "ok") {
                this.setState({message: "Success"});
                setCookie({
                    username: this.state.username,
                    token: data.data.token
                })
                //跳转
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
            <div>
                <ul>
                    <li>
                        <div>
                            Username:
                            <EditText content={this.state.username}
                                      onChange={
                                          value => this.setState({username: value})}/>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div>
                            Password:
                            <EditText content={this.state.passwd}
                                      onChange={
                                          value => this.setState({passwd: value})
                                      }
                                      type="password"/>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div>
                            <Verify ref="verify"/>
                        </div>
                    </li>
                    <li>
                        <div>
                            Verify:
                            <EditText content={this.state.verify}
                                      onChange={
                                          value => this.setState({verify: value})
                                      }/>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div>
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