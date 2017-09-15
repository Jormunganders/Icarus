//帖子列表
import React from "react";
import {LinkItem} from "./LinkItem";
import {getLinkList} from "../../../utils/Service";

class LinkList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: []   //帖子列表
        }
    }

    //在这里加载数据
    componentWillMount() {
        getLinkList({page: 1, row: 10}, (result => {
            if (result.data !== null && result.data !== undefined) {
                this.setState({links: result.data})
            }
        }))
    }


    render() {
        const items = this.state.links.map(t =>
            <LinkItem content={t.title} key={t.posts_id}/>);
        return (
            <div>
                帖子列表：
                <ul>{items}</ul>
            </div>
        );
    }
}

export default LinkList