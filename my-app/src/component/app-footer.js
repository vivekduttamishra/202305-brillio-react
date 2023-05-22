import React from "react";

export class AppFooter extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props);
        return <div>
            <h1><a href={this.props.src} target={"_blank"}>{this.props.text}</a></h1>
        </div>
    }
}