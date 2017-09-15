//发布帖子
import React from "react";
import {EditText} from "../../common/EditText";
import {TextArea} from "../../common/TextArea";
import SignOnVerify from "../../account/SignOnVerify";

class PublishPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
    }

    handlePublish() {

    }

    handleChange(newState) {
        this.setState(newState)
    }

    render() {
        return (<div>
            <SignOnVerify/>
            <ul>
                <li>
                    标题：<EditText content={this.state.title}
                                 onChange={
                                     value => this.setState({title: value})
                                 }/>
                </li>
                <li>
                    <TextArea content={this.state.content}
                              onChange={
                                  value => this.setState({content: value})
                              }/>
                </li>
            </ul>
        </div>);
    }

}

export default PublishPosts