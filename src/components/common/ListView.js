import React from "react";

//并不是一个控件是用来继承的
export class ListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            page: 1,
            row: 100
        };
        this.getListData = this.getListData.bind(this);
        this.createItemView = this.createItemView.bind(this);
    }

    /**
     * 获取列表数据，需要继承实现
     */
    getListData(params) {
        //这里应该是异步的，
        //数据加载完成之后，要调用 setData
    }

    /**
     * 加载数据
     */
    componentWillMount() {
        this.getListData(this.state);
    }

    /**
     * 创建 ItemView 时调用的方法
     * 需要继承
     */
    createItemView(position, data) {
        return (<li>{position}</li>);
    }

    render() {
        if (this.state.data === null) {
            return (
                <div>
                    没有数据
                </div>
            );
        }
        const items = this.state.data.map((t, position) =>
            this.createItemView(position, t)
        );
        return (
            <div>
                <ul>{items}</ul>
            </div>);
    }

}