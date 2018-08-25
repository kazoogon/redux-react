//ここのReactはJSX->JSに変換で使用する
import React, { Component } from 'react';
import { connect } from 'react-redux'; //reduxのstoreからcomponentに値をもらえるようになるconnect関数
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { postEvent } from "../actions"; //必要な関数をactionからimport

class EventsNew extends Component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field){
        const { input, label, type, meta: { touched, error }} = field
        //redux特有のmeta属性 "touched" (一回でも触れたら)

        return(
            <div>
                <TextField
                    hintText={label}
                    floatingLabelText={label}
                    type={type}
                    errorText={touched && error}
                    {...input}
                    fullWidth={true}
                />
            </div>
        )
    }

    async onSubmit(values){
        await this.props.postEvent(values)
        this.props.history.push('/')
    }

    render(){
        /*
         ・何も手が付けられてない属性 = pristine !!
         ・2重押し回避に使う　submitting (submitしたらtrueになる)
        */
        const { handleSubmit, pristine, submitting, invalid} = this.props
        const style = { margin: 12 }
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
                <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

                <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
                <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />}/>
            </form>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement()),
// })
//↑と同じ
// const mapDispatchToProps = ({ postEvents })

const validate = values => {
    const errors = {}

    if(!values.title) errors.title = "Enter a title, plz"
    if(!values.body) errors.body = "Enter a body, plz"

    return errors
}

const mapDispatchToProps = ({ postEvent })

export default connect(null, mapDispatchToProps)(
    reduxForm({validate, form: 'eventNewForm'})(EventsNew)
)
