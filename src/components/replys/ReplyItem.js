//评论 Item

import * as React from "react";

class ReplyItem extends React.Component {
    render() {
        return (
            <li>
                {this.props.data.username} : {this.props.data.content}
            </li>
        );
    }
}

export default ReplyItem