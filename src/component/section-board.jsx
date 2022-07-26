import React, { Component } from 'react';

class SectionBoard extends Component {
    render() { 
        return ( 
            <div className="section-board-container">
                <h4 className="title">
                    {this.props.title}
                </h4>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default SectionBoard;