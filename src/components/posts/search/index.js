//搜索帖子界面
import {ListView} from "../../common/ListView";
import * as React from "react";
import {EditText} from "../../common/EditText";
import {search} from "../../../utils/Service";
import PostItemView from "../PostItemView";
import "../../account/sign_on/index.css"

class Search extends ListView {
    constructor(props) {
        super(props);
        Object.assign(this.state, {
            keywords: ''
        });
        this.handleSearch = this.handleSearch.bind(this)
    }

    handleSearch() {
        search({
            page: this.state.page,
            row: this.state.row,
            keywords: this.state.keywords
        }, result => {
            console.log(result);
            if (result.status === 'ok') {
                this.setState({
                    data: result.data
                })
            }
        })
    }

    getListData(params) {
        return super.getListData(params);
    }

    createItemView(position, data) {
        return (<PostItemView key={data.posts_id} data={data}/>)
    }

    render() {
        return (
            <div className="home_box">
                <h2>请输入搜索内容</h2>
                <br/>
                <EditText content={this.state.content} onChange={value => this.setState({keywords: value})}/>
                <br/>
                <button onClick={this.handleSearch}>搜索</button>
                <br/>
                <br/>
                {super.render()}
            </div>
        );
    }

}

export default Search