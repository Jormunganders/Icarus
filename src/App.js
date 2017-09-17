import React from 'react'
import Header from "./components/common/Header";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from "./components/Home";
import SignUp from "./components/account/sign_up/index";
import SignOn from "./components/account/sign_on/index";
import {
    ACCOUNT_EDIT, ACCOUNT_INFO, HOME, LINK_LIST, PASSWORD_EDIT, PUBLISH_POST, SIGN_ON, SIGN_UP,
    USER_POSTS
} from "./utils/Mapx";
import LinkList from "./components/posts/list/LinkList";
import PublishPosts from "./components/posts/publish/index";
import {Account} from "./components/account/index";
import {AccountEdit, PasswordEdit} from "./components/account/edit";
import {UserPosts} from "./components/account/UserPosts";

const App = () => (
    <Router>
        <div>
            <Header/>
            <Route exact path={HOME} component={Home}/>
            <Route path={SIGN_UP} component={SignUp}/>
            <Route path={SIGN_ON} component={SignOn}/>
            <Route path={LINK_LIST} component={LinkList}/>
            <Route path={PUBLISH_POST} component={PublishPosts}/>
            <Route path={ACCOUNT_INFO} component={Account}/>
            <Route path={ACCOUNT_EDIT} component={AccountEdit}/>
            <Route path={PASSWORD_EDIT} component={PasswordEdit}/>
            <Route path={USER_POSTS} component={UserPosts}/>
        </div>
    </Router>
);

export default App