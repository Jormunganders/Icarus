import {getClassTree} from "../../utils/Service";
import * as React from "react";
import ClassItem from "./item";
import {ListView} from "../common/ListView";

class ChildClassList extends ListView {

    constructor(props) {
        super(props);
        Object.assign(this.state, {id: this.props.id})
    }

    createItemView(position, data) {
        return <ClassItem key={data.cid} data={data} onClick={() => {
            if (this.props.id !== undefined) {
                this.props.onChange(data.cid);
            }
        }}/>
    }

    udpate(id) {
        this.setState(id)
    }

    getListData() {
        getClassTree(this.state.id, result => {
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
                <div>
                    <h4>没有子版块</h4>
                </div>
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

export default ChildClassList