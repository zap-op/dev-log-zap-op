import React, { Component } from 'react';

class SectionBoard extends Component {
    render() {
        return (
            <div className="section-board-container">
                <div className="title-container">
                    <h4 className="title">
                        {this.props.title}
                    </h4>
                    <div className="date-time">
                        {this.props.startDate ? (this.props.startDate + " to " + this.props.endDate) : ""}
                    </div>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SectionBoard;