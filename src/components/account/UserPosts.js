import {ListView} from "../common/ListView";
import {getCurrentUser} from "../../utils/UserUtils";
import {getUserPosts} from "../../utils/Service";
import React from "react";
import PostItemView from "../posts/PostItemView";

/**
 * 用户已发布的帖子
 */
export class UserPosts extends ListView {

    getListData(params) {
        getUserPosts({
            username: getCurrentUser().username,
            page: params.page,
            row: params.row
        }, result => {
            if (result.status === 'ok') {
                this.setState({
                    data: result.data
                })
            }
        })
    }

    createItemView(position, data) {
        return (<PostItemView data={data}/>)
    }

}