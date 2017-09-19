//分类 Item
import * as React from "react";
import Link from "react-router-dom/es/Link";
import {CLASS_INFO} from "../../utils/Mapx";


class ClassItem extends React.Component {
    render() {
        return (
            <li>
                <Link to={CLASS_INFO + "/" + this.props.data.cid}>
                    {this.props.data.c_name}
                </Link>
            </li>
        );
    }
}

export default ClassItem