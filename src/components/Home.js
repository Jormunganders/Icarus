import React from "react";
import SignOnVerify from "./account/SignOnVerify";
import {ListView} from "./common/ListView";
import {getLinkList} from "../utils/Service";
import PostItemView from "./posts/PostItemView";

class Home extends ListView {


    getListData(params) {
        getLinkList({page: this.state.page, row: this.state.row},
            (result => {
                if (result.data !== null && result.data !== undefined) {
                    this.setState({data: result.data})
                }
            }))
    }

    createItemView(position, data) {
        return (<PostItemView data={data}/>)
    }
}

export default Home