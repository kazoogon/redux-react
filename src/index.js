import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //作成したstoreの値を全componentから受け取れるようにできる

import './index.css';
import reducer from './reducers'; //store作成のために必要なreducer
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>{/* Providerのおかげで、どのcomponentからもstoreの値が見れる */}
    <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
