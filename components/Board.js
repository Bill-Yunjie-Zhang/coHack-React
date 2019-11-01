import React from "react"
import Square from "./Square"
import Win from "./Win"

class Board extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nextMove: "O",
            squareTaken: ["","","","","","","","",""]
        }
    }

    changeSymbol = () => {
        if (this.state.nextMove === "O"){
            this.setState({nextMove: "X"})
        } else {
            this.setState({nextMove: "O"})
        }
    }

    changeCashe = (id, symbol) => {
        let squareTaken1 = this.state.squareTaken
        squareTaken1[id] = symbol
        this.setState({squareTaken: squareTaken1})
    }

    refresh = () => {
        location.reload()
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <div style={{
                    height: 150,
                    width: 150,
                    border: "2px solid #333333"
                }}>
                    <div>
                        <Square id = {0} changeCashe={this.changeCashe} symbol={this.state.nextMove} changeSymbol={this.changeSymbol}></Square>
                        <Square id = {1} changeCashe={this.changeCashe} symbol={this.state.nextMove} changeSymbol={this.changeSymbol}></Square>
                        <Square id = {2} changeCashe={this.changeCashe} symbol={this.state.nextMove} changeSymbol={this.changeSymbol}></Square>
                    </div>
                    <div>
                        <Square id = {3} changeCashe={this.changeCashe} symbol={this.state.nextMove} changeSymbol={this.changeSymbol}></Square>
                        <Square id = {4} changeCashe={this.changeCashe} symbol={this.state.nextMove} changeSymbol={this.changeSymbol}></Square>
                        <Square id = {5} changeCashe={this.changeCashe} symbol={this.state.nextMove} changeSymbol={this.changeSymbol}></Square>
                    </div>
                    <div>
                        <Square id = {6} changeCashe={this.changeCashe} symbol={this.state.nextMove} changeSymbol={this.changeSymbol}></Square>
                        <Square id = {7} changeCashe={this.changeCashe} symbol={this.state.nextMove} changeSymbol={this.changeSymbol}></Square>
                        <Square id = {8} changeCashe={this.changeCashe} symbol={this.state.nextMove} changeSymbol={this.changeSymbol}></Square>
                    </div>
                </div>
                <Win squareTaken={this.state.squareTaken} symbol={this.state.nextMove}></Win>
                <button onClick={this.refresh} style={{fontSize: 30, marginTop: 10}}>restart</button>
            </div>
        )
    }
}

export default Board