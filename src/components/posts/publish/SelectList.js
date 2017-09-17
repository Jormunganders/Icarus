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
            console.log(result.data);
            if (result.status === 'ok') {
                this.setState({items: result.data})
            }
        })
    }

    handleSelect(position) {
        this.props.onChange(this.state.items[position].cid)
    }

    render() {
        const items = this.state.items.map(t =>
            <option key={t.cid} name={t.cid}>{t.c_name}</option>
        );

        return (
            <div>
                <select onChange={x => this.handleSelect(x.target.selectedIndex)}>
                    {items}
                </select>
            </div>
        );
    }

}
