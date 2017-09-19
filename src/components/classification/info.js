import {ListView} from "../common/ListView";
import * as React from "react";
import PostItemView from "../posts/PostItemView";
import {getClassInfo, getClassPosts} from "../../utils/Service";

/**
 * 分类详情
 */
class ClassInfo extends ListView {

    constructor(props) {
        super(props);
        Object.assign(this.state, {info: {}});
        this.id = this.props.location.pathname.substring("/class/info/".length);
    }

    getListData(params) {
        //获取分类信息
        getClassInfo(this.id, result => {
            this.setState({info: result.data})
        });
        //获取帖子列表
        getClassPosts({
            cid: this.id,
            page: this.state.page,
            row: this.state.row
        }, result => {
            console.log(result)
            if (result.status === 'ok') {
                this.setState({data: result.data})
            }
        })
    }

    /**
     * 贴子 Item
     * @param position
     * @param data
     */
    createItemView(position, data) {
        return (<PostItemView key={data.posts_id} data={data}/>)
    }

    render() {
        return (
            <div>
                <h1>分类详情</h1>
                {super.render()}
            </div>
        );
    }
}

export default ClassInfo