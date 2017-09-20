//帖子的 Item 显示
//显示 标题，作者
//点击跳转
import React from "react";
import Link from "react-router-dom/es/Link";
import {POST_CONTENT} from "../../utils/Mapx";
import "../common/list.css"

class PostItemView extends React.Component {

    render() {
        return (
            <li className="item">
                <Link to={POST_CONTENT + "/" + this.props.data.posts_id}>
                    {this.props.data.title}
                </Link>
            </li>
        );
    }

}

export default PostItemView