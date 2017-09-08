import React from "react";
import {signOnVerify} from "../../utils/Service";
import {getUserInfo} from "../../utils/UserUtils";
import {SIGN_ON} from "../../utils/Mapx";
import {} from 'react-router'

//登录验证
class SignOnVerify extends React.Component {

    componentWillMount() {
        signOnVerify(getUserInfo(), result => {
            if (result.status !== 'ok') {   //未登录
                // browserHistory.push(SIGN_ON);
            }
        });
    }

    render() {
        return (<div/>);
    }

}

export default SignOnVerify