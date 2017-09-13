import React from 'react'
import Header from "./components/common/Header";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import Home from "./components/Home";
import SignUp from "./components/account/sign_up/index";
import SignOn from "./components/account/sign_on/index";
import {HOME, LINK_LIST, SIGN_ON, SIGN_UP} from "./utils/Mapx";
import LinkList from "./components/posts/list/LinkList";

const App = () => (
    <Router>
        <div>
            <Header/>
            <Route exact path={HOME} component={Home}/>
            <Route path={SIGN_UP} component={SignUp}/>
            <Route path={SIGN_ON} component={SignOn}/>
            <Route path={LINK_LIST} component={LinkList}/>
        </div>
    </Router>
);

export default App