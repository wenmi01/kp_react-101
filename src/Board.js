import React from 'react';
import Square from './Square';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            onOff: 'ON',
            enabled: true,
            IsEnabled: true,
            textState: 'Hello World',
        }

    }

    // call square component and pass var
    createSquare(index){
        return <Square dataIndex={index} />
    }

    toggleOnOff = (value) => {
        this.setState({
            onOff: this.state.onOff === 'OFF' ? 'ON' : 'OFF',
            IsEnabled: !this.state.IsEnabled,
        });
    }

    setNewValue = (event,value) => {
        this.setState({
            enabled: value,
            // textState: value ? 'HelloKodeGo' : 'Goodnight Kodego',
        });
        // console.log(event.type);
        // console.log(event.currentTarget);

        if(value){
            this.setState({
                textState: 'Hello Kodego',
            });
        }else{
            this.setState({
                textState: 'Goodnight KodeGo',
            });
        }
    }
 
    /* <div>{"" + this.state.enabled}</div> */

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

                <button onClick={this.toggleOnOff} className="btn btn-primary">Toggle {this.state.onOff}</button>
                <div>Is Enabled? {this.state.IsEnabled.toString()}</div>

                <button onClick={(event) => this.setNewValue(event,!this.state.enabled)} className="btn btn-primary">Set New Value</button>
                {/* <div>{"" + this.state.enabled}</div> */}
                <div>{this.state.enabled.toString()} {this.state.textState}</div>
               

            </div>
        );
    }
}

export default Board;