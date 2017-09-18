//帖子内容

import React from "react";
import {getPostContent} from "../../utils/Service";
import ReplyList from "../replys/ReplyList";
import PublishReply from "../replys/PublishReply";

class PostContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}    //文章信息
        };
        this.id = this.props.location.pathname.substring("/post/content/".length);
    }

    componentWillMount() {
        //在这里加载数据
        getPostContent(this.id, result => {
            if (result.status === 'ok') {
                this.setState({
                    data: result.data
                })
            }
        })
    }

    render() {
        console.log(this.state.data);
        if (this.state.data === null || this.state.data === undefined) {
            return (<div>
                未知错误
            </div>);
        }
        else {
            return (
                <div>
                    <h1>{this.state.data.title}</h1>
                    <h2>作者：{this.state.data.author}</h2>
                    <h4>关键字：{this.state.data.keywords}</h4>
                    <br/>
                    {this.state.data.content}
                    <br/>
                    <PublishReply postsId={this.id}/>
                </div>
            );
        }
    }

}

//<ReplyList postsId={this.id}/>

export default PostContent