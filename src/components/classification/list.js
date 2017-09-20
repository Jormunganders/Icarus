import {ListView} from "../common/ListView";
import * as React from "react";
import {getClassTree, getParentClassificationList} from "../../utils/Service";
import ClassItem from "./item";

//分类列表
class ClassList extends ListView {
    getListData(params) {
        if (this.props.id !== undefined) {
            this.update(this.props.id)
        } else {
            getParentClassificationList(result => {
                if (result.status === 'ok') {
                    this.setState({data: result.data})
                }
            })
        }
    }

    createItemView(position, data) {
        return <ClassItem key={data.cid} data={data} onClick={() => {
            if (this.props.id !== undefined) {
                this.props.onChange(data.cid);
                this.getListData(this.state)
            }
        }}/>
    }

    update(id) {
        getClassTree(id, result => {
            if (result.status === 'ok') {
                this.setState({data: result.data})
            } else {
                this.setState({data: []})
            }
        });
    }

    render() {
        let title = null;
        if (this.props.id === undefined) {
            title = (
                <h2>
                    板块列表
                </h2>
            );
        }
        return (
            <div className="home_box">
                {title}
                <br/>
                {super.render()}
            </div>
        );
    }

}

export default ClassList