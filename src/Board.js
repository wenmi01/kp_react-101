import React from 'react';
import Square from './Square';

class Board extends React.Component {
    constructor(props){
        super(props);

    }

    // call square component and pass var
    createSquare(index){
        return <Square dataIndex={index} />
    }

    render(){
        return(
            <div>
                <div>
                    {this.createSquare(1)}
                    {this.createSquare(2)}
                    {this.createSquare(3)}
                </div>
                <div>
                    {this.createSquare(4)}
                    {this.createSquare(5)}
                    {this.createSquare(6)}
                </div>
                <div>
                    {this.createSquare(7)}
                    {this.createSquare(8)}
                    {this.createSquare(9)}
                </div>
            </div>
        );
    }
}

export default Board;