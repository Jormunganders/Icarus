import React from "react";
import {EditText} from "../../common/EditText";

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleSignUp() {
        alert(this.state.username + "\n" + this.state.email + "\n" + this.state.password)
    }

    handleChange(newState) {
        let tempState = Object.assign({}, newState, this.state);
        this.setState(tempState)
    }

    render() {
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
                    <li>
                        <div>
                            <text>Email:</text>
                            <EditText content={this.state.email} onChange={
                                value => this.setState({email: value})
                            }/>
                        </div>
                    </li>
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
                    <li>
                        <div>
                            <button onClick={this.handleSignUp}>SignUp</button>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SignUp;