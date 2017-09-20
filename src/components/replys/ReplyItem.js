//评论 Item
import "../common/list.css"

import * as React from "react";

class ReplyItem extends React.Component {
    render() {
        return (
            <li className="item">
                {this.props.data.username} : {this.props.data.content}
            </li>
        );
    }
}

export default ReplyItem