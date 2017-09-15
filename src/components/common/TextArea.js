import React from "react";

export class TextArea extends React.Component {
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
                <textarea onChange={this.onChange} defaultValue={content}/>
            </div>
        );

    }

}
