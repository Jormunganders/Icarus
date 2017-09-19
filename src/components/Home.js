import React from "react";
import {ListView} from "./common/ListView";
import {getLinkList, getRecommendPosts, getTopPosts} from "../utils/Service";
import PostItemView from "./posts/PostItemView";

class Home extends ListView {

    constructor(props) {
        super(props);
        this.type = 0;
        console.log(this.state)
    }

    getListData(params) {
        console.log(params);
        if (this.type === 0) {    //全部
            getLinkList({page: this.state.page, row: this.state.row},
                (result => {
                    if (result.status === 'ok') {
                        this.setState({data: result.data})
                    }
                }))
        } else if (this.type === 1) { //推荐
            getRecommendPosts({page: this.state.page, row: this.state.row},
                (result => {
                    if (result.status === 'ok') {
                        this.setState({data: result.data})
                    }
                }))
        } else if (this.type === 2) { //置顶
            getTopPosts({page: this.state.page, row: this.state.row},
                (result => {
                    if (result.status === 'ok') {
                        this.setState({data: result.data})
                    }
                }))
        } else {
            this.setState({data: []})
        }
    }

    createItemView(position, data) {
        return (<PostItemView key={data.posts_id} data={data}/>)
    }

    render() {
        const buttons = [
            (<li key="0">
                <button onClick={() => {
                    this.type = 0;
                    this.getListData(this.state)
                }}>全部
                </button>
            </li>),
            (<li key="1">
                <button onClick={() => {
                    this.type = 1;
                    this.getListData(this.state)
                }}>推荐
                </button>
            </li>),
            (<li key="2">
                <button onClick={() => {
                    this.type = 2;
                    this.getListData(this.state)
                }}>置顶
                </button>
            </li>)
        ];
        if (this.type >= 0 && this.type <= 2) {
            buttons[this.type] = null;
        }
        return (
            <div>
                <ul>{buttons}</ul>
                {super.render()}
            </div>
        );
    }

}

export default Home