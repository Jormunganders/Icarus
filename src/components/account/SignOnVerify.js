import React from "react";
import {signOnVerify} from "../../utils/Service";
import {getUserInfo} from "../../utils/UserUtils";
import {HOME} from "../../utils/Mapx";
import createBrowserHistory from "history/es/createBrowserHistory";

//登录验证
class SignOnVerify extends React.Component {


    componentWillMount() {
        signOnVerify(getUserInfo(), result => {
            if (result.status !== 'ok') {   //未登录
                console.log("Not Sign!");
                let history = createBrowserHistory();
                history.push(HOME);
                //跳转到登陆界面
            }
        });
    }

    render() {
        return (<div/>);
    }

}

export default SignOnVerify