import React from "react";
import {getParentClassificationList} from "../../../utils/Service";

/**
 * 板块下拉框
 */
export class SelectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        getParentClassificationList(result => {
            if (result.status === 'ok') {
                this.setState({items: result.data})
            }
        })
    }

    /**
     * 初始选中的 cid
     */
    getInitCid() {
        if (this.state.items.length > 0) {
            return this.state.items[0].cid;
        }
        return -1;
    }


    handleSelect(position) {
        this.props.onChange(this.state.items[position].cid)
    }

    render() {
        const items = this.state.items.map((t, position) => {
            if (position === 0) {
                return (<option key={t.cid} name={t.cid} selected="selected">{t.c_name}</option>)
            } else {
                return (<option key={t.cid} name={t.cid}>{t.c_name}</option>)
            }

        });

        return (
            <div>
                <select onChange={x => this.handleSelect(x.target.selectedIndex)}>
                    {items}
                </select>
            </div>
        );
    }

}
