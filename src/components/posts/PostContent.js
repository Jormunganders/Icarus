//帖子内容

import * as React from "react";

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
        console.log(this.id)
    }

    render() {
        return (
            <div>
                <p2>帖子详情</p2>
            </div>
        );
    }

}

export default PostContent