import React from 'react';

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            backgroundColor: "gray",
            enabled: true,
            };
    }


    clickHandler = ()  => {
        this.setState({
            backgroundColor: "white",
            enabled: false,
        });
    }

    // <div className="square" style={{backgroundColor: this.state.backgroundColor}}>{this.props.textContent}</div>
    // <div className={"square " + this.props.className !== undefined ? this.props.className : ''} style={{backgroundColor: this.state.backgroundColor}} data-index={this.props.index}>{this.props.textContent}</div>
    // <div className={"square " + this.props.className + " " + this.state.backgroundColor} data-index={this.props.dataIndex}>{this.props.textContent}{this.props.dataIndex}</div>

    render(){
        return (
    
            <div onClick={this.clickHandler} className={"square " + this.props.className + " " + this.state.backgroundColor} data-index={this.props.dataIndex}>{this.props.textContent}{this.props.dataIndex}{this.state.enabled ? 1 : 0 }</div>

        )
    }

}

export default Square;