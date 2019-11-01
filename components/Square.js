import React from "react"

const style = {
    height: 50,
    width: 50,
    fontSize: 30,
    verticalAlign: "top"
}

class Square extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }
    }

    render (){ 
        return (
            <button style={style} onClick={() => {
                this.setState({value: this.props.symbol})
                this.props.changeCashe(this.props.id, this.props.symbol)
                this.props.changeSymbol()
            }}>{this.state.value}</button>
        )
    }
}

export default Square