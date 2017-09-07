import React from "react";
import {EditText} from "../../common/EditText";
import {signUp} from "../../../utils/Service";
import "../../common/Header.css"

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp() {
        signUp({
            username: this.state.username,
            passwd: this.state.password,
            email: this.state.email
        }, data => {
            if (data.status === 'ok') {
                this.setState({message: "Success"});
                //进行跳转
            } else {
                this.setState({message: data.message})
            }
        });
    }


    handleChange(newState) {
        let tempState = Object.assign({}, newState, this.state);
        this.setState(tempState)
    }

    render() {
        const message = this.state.message;
        return (
            <div>
                <ul>
                    <li>
                        <div>
                            <text>Username:</text>
                            <EditText content={this.state.username} onChange={
                                value => this.setState({username: value})
                            }/>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div>
                            <text>Email:</text>
                            <EditText content={this.state.email} onChange={
                                value => this.setState({email: value})
                            }/>
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div>
                            <text>Password:</text>
                            <EditText
                                type="password"
                                content={this.state.password}
                                onChange={
                                    value => this.setState({password: value})
                                }
                            />
                        </div>
                    </li>
                    <br/>
                    <li>
                        <div>
                            <button onClick={this.handleSignUp}>SignUp</button>
                        </div>
                    </li>
                </ul>
                {message === 'Success' && <p>{message}</p>}
                {message !== 'Success' && <p className="red">{message}</p>}
            </div>
        );
    }
}

export default SignUp;

