import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Routes from './routes'
import { render } from 'react-dom';

render(
    <Provider store={store}>
<Routes />
</Provider>
    , document.getElementById('main'));
