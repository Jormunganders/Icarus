//发表评论

import React from "react";
import {EditText} from "../common/EditText";
import {publishReply} from "../../utils/Service";
import {getCurrentUser, getSignOnState} from "../../utils/UserUtils";

class PublishReply extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ''
        };
        this.handlePublish = this.handlePublish.bind(this)
    }

    handlePublish() {
        if (getSignOnState() !== true) {
            alert("请先登录");
            return;
        }
        publishReply({
            username: getCurrentUser().username,
            parentId: 0,
            postsId: this.props.postsId,
            content: this.state.content
        }, result => {
            if (result.status === 'ok') {
                this.setState({
                    content: ''
                });
                this.props.onPublish()
            }
        })
    }

    render() {
        return (
            <div>
                <EditText content={this.state.content}
                          onChange={
                              value => this.setState({content: value})
                          }/>
                <button onClick={this.handlePublish}>评论</button>
            </div>
        );
    }

}

export default PublishReply
