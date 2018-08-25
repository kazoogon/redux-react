import axios from 'axios'
export const READ_EVENTS = 'READ_EVENTS'
export const READ_EVENT = 'READ_EVENT'
export const CREATE_EVENT = 'CREATE_EVENTS'
export const DELETE_EVENT = 'DELETE_EVENTS'
export const UPDATE_EVENT = 'UPDATE_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

/*
この中で非同期処理を実行したい
しかしpureなobjectをreturnしないといけない = ここでは非同期処理しちゃダメ
でもそれを可能にするのが "redux-thunk"!!

・action-creatorがactionの代わりに関数を返すようにできる
・dispatchとgetStateを引数として受け取れる
*/
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
    dispatch({ type: CREATE_EVENT, response })
}

export const putEvent = values => async dispatch => {
    const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
    dispatch({ type: UPDATE_EVENT, response })
}

export  const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: READ_EVENT, response })
}

export const deleteEvent = id => async dispatch => {
    const response = await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: DELETE_EVENT, response })
}
