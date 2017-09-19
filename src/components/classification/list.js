import {ListView} from "../common/ListView";
import * as React from "react";
import {getParentClassificationList} from "../../utils/Service";
import ClassItem from "./item";

//分类列表
class ClassList extends ListView {

    getListData(params) {
        getParentClassificationList(result => {
            if (result.status === 'ok') {
                this.setState({data: result.data})
            }
        })
    }

    createItemView(position, data) {
        return <ClassItem key={data.cid} data={data}/>
    }

    render() {
        return (
            <div>
                <h2>板块列表</h2>
                <br/>
                {super.render()}
            </div>
        );
    }

}

export default ClassList