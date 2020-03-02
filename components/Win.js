import React from "react"

class Win extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        let that = this.props
        let symbol = that.symbol
        let squareTaken = that.squareTaken
        let txt = ""

        if(symbol === "X") {
            symbol = "O"
        }else {
            symbol = "X"
        }

        // console.log(symbol)
        // 012, 345, 678; 036, 147, 258; 048, 246;
        if(    (squareTaken[0] === symbol && squareTaken[1] === symbol && squareTaken[2] === symbol) 
            || (squareTaken[3] === symbol && squareTaken[4] === symbol && squareTaken[5] === symbol)
            || (squareTaken[6] === symbol && squareTaken[7] === symbol && squareTaken[8] === symbol)
            || (squareTaken[0] === symbol && squareTaken[3] === symbol && squareTaken[6] === symbol)
            || (squareTaken[1] === symbol && squareTaken[4] === symbol && squareTaken[7] === symbol)
            || (squareTaken[2] === symbol && squareTaken[5] === symbol && squareTaken[8] === symbol)
            || (squareTaken[0] === symbol && squareTaken[4] === symbol && squareTaken[8] === symbol)
            || (squareTaken[2] === symbol && squareTaken[4] === symbol && squareTaken[6] === symbol)){
                txt = '"' + symbol + '"' + ' wins!'
        }

        return (
            <h1>{txt}</h1>
        )
    }
}

export default Win