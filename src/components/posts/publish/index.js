//发布帖子
import React from "react";
import {EditText} from "../../common/EditText";
import {TextArea} from "../../common/TextArea";
import SignOnVerify from "../../account/SignOnVerify";
import {publishPost} from "../../../utils/Service";

class PublishPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            keywords: '',
            content: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
    }

    handlePublish() {
        publishPost({}, result => {
            console.log(result)
        })
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
                    关键字：（使用,隔开）
                    <EditText content={this.state.keywords}
                              onChange={
                                  value => this.setState({keywords: value})
                              }/>
                </li>
                <li>
                    <TextArea content={this.state.content}
                              onChange={
                                  value => this.setState({content: value})
                              }/>
                </li>
                <button onClick={this.handlePublish}>Publish</button>
            </ul>
        </div>);
    }

}

export default PublishPosts