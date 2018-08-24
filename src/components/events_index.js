//ここのReactはJSX->JSに変換で使用する
import React, { Component } from 'react';
import { connect } from 'react-redux'; //reduxのstoreからcomponentに値をもらえるようになるconnect関数
import _ from 'lodash'

import { readEvents } from "../actions"; //必要な関数をactionからimport

class EventsIndex extends Component{
    componentDidMount(){ //componentがmountされたら呼び出される
        this.props.readEvents()
    }

    renderEvents(){
        return _.map(this.props.events, event =>(
            <tr key={event.id}>
                <td>{event.id}</td>
                <td>{event.title}</td>
                <td>{event.body}</td>
            </tr>
        ))
    }

    render(){
        return (
            <table>
              <thead>
              <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
              </tr>
              </thead>

              <tbody>
                {this.renderEvents()}
              </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ events: state.events })

// const mapDispatchToProps = dispatch => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
// })
//↑と同じ
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
