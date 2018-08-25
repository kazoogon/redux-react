//ここのReactはJSX->JSに変換で使用する
import React, { Component } from 'react';
import { connect } from 'react-redux'; //reduxのstoreからcomponentに値をもらえるようになるconnect関数
import _ from 'lodash'
import { Link } from 'react-router-dom'

import { readEvents } from "../actions"; //必要な関数をactionからimport

class EventsIndex extends Component{
    componentDidMount(){ //componentがmountされたら呼び出される
        this.props.readEvents()
    }

    renderEvents(){
        return _.map(this.props.events, event =>(
            <tr key={event.id}>
                <td>{event.id}</td>
                <td>
                    <Link to={`/events/${event.id}`}>
                        {event.title}
                    </Link>
                </td>
                <td>{event.body}</td>
            </tr>
        ))
    }

    render(){
        return (
            <React.Fragment>
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

                <Link to="/events/new">New Event</Link>
            </React.Fragment>
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
