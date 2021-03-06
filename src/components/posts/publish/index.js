//发布帖子
import React from "react";
import {EditText} from "../../common/EditText";
import {TextArea} from "../../common/TextArea";
import SignOnVerify from "../../account/SignOnVerify";
import {publishPost} from "../../../utils/Service";
import {SelectList} from "./SelectList";
import {getCurrentUser} from "../../../utils/UserUtils";
import {HOME} from "../../../utils/Mapx";
import "../../Home.css"

class PublishPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            keywords: '',
            content: ''
        };
        this.data = {
            classificationId: ''
        };
        this.handlePublish = this.handlePublish.bind(this);
    }

    handlePublish() {
        if (this.data.classificationId === '' || this.data.classificationId === undefined) {
            this.data.classificationId = this.refs.selection.getInitCid();
        }
        publishPost({
            username: getCurrentUser().username,
            cid: this.data.classificationId,
            title: this.state.title,
            content: this.state.content,
            keywords: this.state.keywords
        }, result => {
            if (result.status === 'ok') {
                this.props.history.push(HOME);
            } else {
                alert(result.message);
            }
        })
    }

    render() {
        return (
            <div className="home_box">
                <SignOnVerify/>
                <ul>
                    <li>
                        <h2>标题</h2>
                        <br/>
                        <EditText content={this.state.title}
                                  onChange={
                                      value => this.setState({title: value})
                                  }/>
                        <br/>
                    </li>
                    <li>
                        <h3>关键字（使用,隔开）</h3>
                        <br/>
                        <EditText content={this.state.keywords}
                                  onChange={
                                      value => this.setState({keywords: value})
                                  }/>
                        <br/>
                    </li>
                    <li>
                        <h3>内容</h3>
                        <br/>
                        <TextArea content={this.state.content}
                                  onChange={
                                      value => this.setState({content: value})
                                  }/>
                        <br/>
                    </li>
                    <h3>选择板块</h3>
                    <br/>
                    <SelectList ref="selection" onChange={id => this.setState({classificationId: id})}/>
                    <br/>
                    <button onClick={this.handlePublish}>发布</button>
                </ul>
            </div>);
    }

}

export default PublishPosts