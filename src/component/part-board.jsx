import React, { Component } from 'react';
import $ from 'jquery'

class PartBoard extends Component {
    constructor(props) {
        super(props);
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onMouseEnterHandler(event) {
        $(event.target.parentElement).toggleClass("onhover");
    }

    onMouseLeaveHandler(event) {
        $(event.target.parentElement).toggleClass("onhover");
    }

    onClickHandler(event) {
        const heightCollapsedString = "10px"
        const contentElement = $(event.target).siblings(".content");
        if (contentElement.css("max-height") !== heightCollapsedString) {
            contentElement.css("max-height", heightCollapsedString);
            return;
        }
        contentElement.css("max-height", (contentElement.prop("scrollHeight") + "px"))
    }
    
    render() {
        return (
            <div className="part-board-container">
                <h3 className="title" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler} onClick={this.onClickHandler}>
                    {this.props.title}
                </h3>
                <hr />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PartBoard;