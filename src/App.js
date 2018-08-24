//ここのReactはJSX->JSに変換で使用する
import React, { Component } from 'react';


const App = () => (<Counter></Counter>)

class Counter extends Component{
    constructor(props){
        super(props);{/* 親クラスで初期化 */}
        this.state = { count: 0 }
    }

    handlePlusButton = () => {
        this.setState({count: this.state.count + 1});
        {/* setStateはcall back関数でrenderが呼ばれる */}
    }

    render(){
        return (
            <React.Fragment>
                counter { this.state.count }
                <button onClick={this.handlePlusButton}>+1</button>
            </React.Fragment>
        )
    }
}

export default App;
