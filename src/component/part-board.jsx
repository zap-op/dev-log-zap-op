import React, { Component } from 'react';
import $ from "jquery";

class PartBoard extends Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        const heightCollapsedString = "10px"
        const arrowElement = $(event.currentTarget).children(".arrow");
        const contentElement = $(event.currentTarget).siblings(".content");
        arrowElement.toggleClass("active");
        if (contentElement.css("max-height") !== heightCollapsedString) {
            contentElement.css("max-height", heightCollapsedString);
            return;
        }
        contentElement.css("max-height", (contentElement.prop("scrollHeight") + "px"))
    }

    render() {
        return (
            <div className="part-board-container">
                <div className="title-container" onClick={event => this.onClickHandler(event)}>
                    <h3 className="title">
                        {this.props.title}
                    </h3>
                    <span className="arrow active">

                    </span>
                </div>
                <hr />
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PartBoard;