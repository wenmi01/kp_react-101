import React from 'react';

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: "gray",
            enabled: true,

        }
    }



    // <div className="square" style={{backgroundColor: this.state.backgroundColor}}>{this.props.textContent}</div>
    // <div className={"square " + this.props.className !== undefined ? this.props.className : ''} style={{backgroundColor: this.state.backgroundColor}} data-index={this.props.index}>{this.props.textContent}</div>
    render(){
        return (
            <div className={"square " + this.props.className + " " + this.state.backgroundColor} data-index={this.props.dataIndex}>{this.props.textContent}{this.props.dataIndex}</div>
        )
    }

}

export default Square;