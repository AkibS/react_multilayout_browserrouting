import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker';

import RouteTemplate from './routes/index'

import store from './store'
import theme from './assets/theme'

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouteTemplate />
        </ThemeProvider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
