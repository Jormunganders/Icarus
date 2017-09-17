import {ListView} from "../common/ListView";
import {getCurrentUser} from "../../utils/UserUtils";
import {getUserPosts} from "../../utils/Service";
import React from "react";

/**
 * 用户已发布的帖子
 */
export class UserPosts extends ListView {

    getListData(params) {
        console.log(params);
        getUserPosts({
            username: getCurrentUser().username,
            page: params.page,
            row: params.row
        }, result => {
            console.log(result)
        })
    }

    createItemView(position, data) {
        return (<h3>{position}</h3>)
    }

}