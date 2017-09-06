import React from "react";

export class EditText extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
        this.props.onChange(e.target.value)
    }

    render() {
        const content = this.props.content;
        return (
            <div>
                <input value={content} type={this.props.type} onChange={this.onChange}/>
            </div>
        );
    }

}