//单个帖子 Item
import React from "react";

export class LinkItem extends React.Component {
    render() {
        const content = this.props.content;
        return (
            <li>
                <div>
                    {content}
                </div>
            </li>);
    }

}