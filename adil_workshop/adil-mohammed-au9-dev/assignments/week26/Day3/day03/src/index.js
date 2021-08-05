import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/storefile';
import Routing from './component/routing';

ReactDom.render(
    <Provider store={store}>
        <Routing />
    </Provider>,document.getElementById('root')
)
