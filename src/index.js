import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';//redux-thunkはmiddlewareなので使えるようにimport
import { Provider } from 'react-redux'; //作成したstoreの値を全componentから受け取れるようにできる
import thunk from 'redux-thunk';

import './index.css';
import reducer from './reducers'; //store作成のために必要なreducer
import EventsIndex from './components/events_index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, applyMiddleware(thunk));//thunkというmiddlewareをいつapplyするのか？　ここでしょ storeでしょ

ReactDOM.render(
    <Provider store={store}>{/* Providerのおかげで、どのcomponentからもstoreの値が見れる */}
    <EventsIndex />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
