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
            this.props.onSignOut();
        })
    }

    render() {
        return (
            <div>
                <div onClick={this.handleClick}>退出登录</div>
                &nbsp;{this.state.message}
            </div>
        );
    }

}

export default SignOut