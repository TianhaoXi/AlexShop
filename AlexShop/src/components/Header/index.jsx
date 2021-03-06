import React from "react"
import "./style.less"

export default class Header extends React.Component {

    clickBackHandler(){
        window.history.back(-1);
    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={ this.clickBackHandler }>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}