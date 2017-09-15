import React from "react";
import {signOnVerify} from "../../utils/Service";
import {getUserInfo} from "../../utils/UserUtils";
import {SIGN_ON} from "../../utils/Mapx";
import withRouter from "react-router-dom/es/withRouter";

//登录验证
class SignOnVerify extends React.Component {

    constructor(props) {
        super(props);
    }


    componentWillMount() {
        signOnVerify(getUserInfo(), result => {
            if (result.status !== 'ok') {   //未登录
                console.log("Not Sign On");
                this.props.history.push(SIGN_ON);
            }
        });
    }

    render() {
        return (<div/>);
    }

}

export default withRouter(SignOnVerify)