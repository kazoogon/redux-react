import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';//redux-thunkはmiddlewareなので使えるようにimport
import { Provider } from 'react-redux'; //作成したstoreの値を全componentから受け取れるようにできる
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.css';
import reducer from './reducers'; //store作成のために必要なreducer

//各componentのclass名をimport
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import registerServiceWorker from './registerServiceWorker';

//storeの第二引数がenhancerって名前なのでここも
const enhancer = process.env.NODE_ENV === 'development' ?
    composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);//thunkというmiddlewareをいつapplyするのか？　ここでしょ storeでしょ

ReactDOM.render(
    <Provider store={store}>{/* Providerのおかげで、どのcomponentからもstoreの値が見れる */}
        <BrowserRouter>
            <Switch>
                <Route path="/events/new" component={EventsNew} />
                <Route path="/events/:id" component={EventsShow} /> {/* 変数はコロン付ける */}
                <Route exact path="/" component={EventsIndex} />
                <Route exact path="/events" component={EventsIndex} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
