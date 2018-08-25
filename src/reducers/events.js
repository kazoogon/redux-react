import _ from 'lodash' //配列のデータを変えるのが得意なパッケージ
import {
    READ_EVENTS ,
    READ_EVENT,
    DELETE_EVENT,
    UPDATE_EVENT,
    CREATE_EVENT,
} from '../actions'

export default (events = {}, action) => {
    switch(action.type){
        case READ_EVENTS:
        case UPDATE_EVENT:
        case CREATE_EVENT:
            /*
            [
                {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
                {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
            ]
            この配列を下記のようなobjectにしたい。そんなときに便利なのが "lodash"
            {
                1: {"id":1,"title":"Let's have an event 1!","body":"This is the body for event 1."},
                2: {"id":2,"title":"Let's have an event 2!","body":"This is the body for event 2."}
            }
            */
            return _.mapKeys(action.response.data, 'id')
        case READ_EVENT:
            const data = action.response.data
            //response.dataでもらった値をevents objectの値にあてはめる(最新の情報にするってこと)
            return {...events, [data.id]: data }
        case DELETE_EVENT:
            delete events[action.id]
            return { ...events } //スプレッド演算子
        default:
            return events
    }
}