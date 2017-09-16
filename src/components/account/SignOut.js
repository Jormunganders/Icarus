import React from "react";
import {signOut} from "../../utils/Service";
import {delCookie} from "../../utils/CookieUtils";
import {clearCurrentUser} from "../../utils/UserUtils";

class SignOut extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {message: ''}
    }

    handleClick() {
        signOut(data => {
            this.setState({message: data.message});
            clearCurrentUser();
            delCookie("username");
            delCookie("token");
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Sign out</button>
                &nbsp;{this.state.message}
            </div>
        );
    }

}

export default SignOut