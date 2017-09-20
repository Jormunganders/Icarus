import {ListView} from "../common/ListView";
import * as React from "react";
import PostItemView from "../posts/PostItemView";
import {getClassInfo, getClassPosts} from "../../utils/Service";
import ChildClassList from "./ChildClassList";

/**
 * 分类详情
 */
class ClassInfo extends ListView {

    constructor(props) {
        super(props);
        this.id = this.props.location.pathname.substring("/class/info/".length);
        Object.assign(this.state, {info: {}});
    }

    getListData(params) {
        //获取分类信息
        getClassInfo(this.id, result => {
            if (result.status === 'ok') {
                this.setState({info: result.data})
            }
        });
        //获取帖子列表
        getClassPosts({
            cid: this.id,
            page: this.state.page,
            row: this.state.row
        }, result => {
            if (result.status === 'ok') {
                this.setState({data: result.data})
            } else {
                this.setState({data: []})
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
        let message = null;
        if (this.state.info !== null) {
            message = (
                <div>
                    <h2>{this.state.info.c_name}</h2>
                </div>
            );
        }
        return (
            <div className="home_box">
                {message}
                <br/>
                <hr/>
                <h4>子版块</h4>
                <ChildClassList
                    ref="child"
                    id={this.id}
                    onChange={newId => {
                        this.id = newId;
                        this.getListData(this.state);
                        this.refs.child.update(this.id);
                    }}/>
                <br/>
                <hr/>
                <h4>帖子列表</h4>
                <br/>
                {super.render()}
            </div>
        );
    }
}

export default ClassInfo

//子版块的 Id 不更新...