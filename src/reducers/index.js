//全reducerをこのindex.jsにまとめる!!

import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })
//export default combineReducers({ bar, baz, foo })
