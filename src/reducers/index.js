//全reducerをこのindex.jsにまとめる!!

import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({ count })
//export default combineReducers({ bar, baz, foo })
