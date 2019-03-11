import React from "react";
import math from './math';

class MathComp extends React.Component {

    constructor () {
        super()
        this.state = {
            operator : "",
            result: ""
        }
    }

    handleCalculateClick = () => {
        console.log("in handleCalculateClick");
        const input1 = Number(document.getElementById("operand1").value);
        const input2 = Number(document.getElementById("operand2").value);
        const operator = document.getElementsByName("operator")[0].value;

        console.log("operator is ", operator);
        switch (operator) {
            case "plus" :
                this.setState({result : math.sum(input1, input2)});
                break;
            case "minus" :
                this.setState({result : math.sub(input1, input2)});
                break;
            case "times" :
                this.setState({result : math.mult(input1, input2)});
                break;
            case "divide" :
                this.setState({result : math.div(input1, input2)});
                break;
            default:
                alert("select an operator and enter operands");
        }
    }

    render() {

        return (
            <div>
                <h1>Hello world from MathComp</h1>

                <input id="operand1" type="number"/>
                <select name="operator">
                    <option value="plus">+</option>
                    <option value="minus">-</option>
                    <option value="times">*</option>
                    <option value="divide">/</option>
                </select>
                <span>{this.state.operator}</span>
                <input id="operand2" type="number"/>
                <button onClick={this.handleCalculateClick}>Calculate</button>
                <span id="calcValue">{this.state.result}</span>

            </div>
        )
    }
}
export default MathComp