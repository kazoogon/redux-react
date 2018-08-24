//ここのReactはJSX->JSに変換で使用する
import React, { Component } from 'react';
import { connect } from 'react-redux'; //reduxのstoreからcomponentに値をもらえるようになるconnect関数

import { increment, decrement } from "../actions"; //必要な関数をactionからimport

class App extends Component{
    render(){
        const props = this.props

        return (
            <React.Fragment>
                value { props.value }
                <button onClick={props.increment}>+1</button>
                <button onClick={props.decrement}>-1</button>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({ value: state.count.value })

// const mapDispatchToProps = dispatch => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
// })
//↑と同じ
const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispatchToProps)(App)
