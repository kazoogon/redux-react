import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

import { getEvent, deleteEvent, putEvent } from "../actions"; //必要な関数をactionからimport

class EventsShow extends Component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if(id) this.props.getEvent(id)
    }

    renderField(field){
        const { input, label, type, meta: { touched, error }} = field
        //redux特有のmeta属性 "touched" (一回でも触れたら)

        return(
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        )
    }

    async onDeleteClick(){
        const { id } = this.props.match.params
        await this.props.deleteEvent(id) //actionにidを渡す
        this.props.history.push('/')
    }

    async onSubmit(values){
        await this.props.putEvent(values)
        this.props.history.push('/')
    }

    render(){
        /*
         ・何も手が付けられてない属性 = pristine !!
         ・2重押し回避に使う　submitting (submitしたらtrueになる)
        */
        const { handleSubmit, pristine, submitting, invalid} = this.props
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
                <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
                <div>
                    <input type="submit" value="Submit" disabled={pristine || submitting || invalid} />
                    <Link to="/">Cancel</Link>
                    <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
                </div>

            </form>
        )
    }
}

const validate = values => {
    const errors = {}

    if(!values.title) errors.title = "Enter a title, plz"
    if(!values.body) errors.body = "Enter a body, plz"

    return errors
}

const mapStateToProps = (state, ownProps) => {
    const event = state.events[ownProps.match.params.id]
    return { initialValues: event, event }
}

const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent }) //このcomponentにbind

//enableReinitialize = trueだとinitailValuesのpropの値が変更されるたびに初期化される
export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({validate, form: 'eventShowForm', enableReinitialize: true})(EventsShow)
)
