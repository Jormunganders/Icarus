//评论列表
import {ListView} from "../common/ListView";
import {getAllReply} from "../../utils/Service";

class ReplyList extends ListView {

    getListData(params) {
        getAllReply({
            postsId: this.props.postsId,
            page: this.state.page,
            row: this.state.row
        }, result => {
            console.log(result);
            if (result.status === 'ok' &&
                result.data !== null && result.data !== undefined) {
                this.setState({data: result.data})
            }
        })
    }

    createItemView(position, data) {
        return {position};
    }
}

export default ReplyList