import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {this.props.textContent !== undefined ? this.props.textContent : 'Footer here'}
            </div>
        );
    }
}

export default Footer;