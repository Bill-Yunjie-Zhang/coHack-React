import React from "react"
import Square from "./Square"

class Board extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nextMove: "O"
        }
    }

    render(){
        const changeSymbol = () => {
            if (this.state.nextMove === "O"){
                this.setState({nextMove: "X"})
            } else {
                this.setState({nextMove: "O"})
            }
        }

        return (
            <div style={{
                height: 150,
                width: 150,
                border: "2px solid #333333"
            }}>
                <div>
                    <Square symbol={this.state.nextMove} changeSymbol={changeSymbol}></Square>
                    <Square symbol={this.state.nextMove} changeSymbol={changeSymbol}></Square>
                    <Square symbol={this.state.nextMove} changeSymbol={changeSymbol}></Square>
                </div>
                <div>
                    <Square symbol={this.state.nextMove} changeSymbol={changeSymbol}></Square>
                    <Square symbol={this.state.nextMove} changeSymbol={changeSymbol}></Square>
                    <Square symbol={this.state.nextMove} changeSymbol={changeSymbol}></Square>
                </div>
                <div>
                    <Square symbol={this.state.nextMove} changeSymbol={changeSymbol}></Square>
                    <Square symbol={this.state.nextMove} changeSymbol={changeSymbol}></Square>
                    <Square symbol={this.state.nextMove} changeSymbol={changeSymbol}></Square>
                </div>
            </div>
        )
    }
}

export default Board