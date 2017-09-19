//评论列表
import {ListView} from "../common/ListView";
import {getAllReply} from "../../utils/Service";
import {parseArray} from "../../utils/Utils";
import * as React from "react";
import ReplyItem from "./ReplyItem";

class ReplyList extends ListView {

    getListData(params) {
        getAllReply({
            postsId: this.props.postsId,
            page: this.state.page,
            row: this.state.row
        }, result => {
            if (result.status === 'ok' &&
                result.data !== null && result.data !== undefined) {
                this.setState({data: parseArray(result.data)})
            }
        })
    }

    /**
     * 重新加载数据
     */
    update() {
        this.getListData(this.state)
    }

    createItemView(position, data) {
        return <ReplyItem key={data.rid} data={data}/>;
    }
}

export default ReplyList