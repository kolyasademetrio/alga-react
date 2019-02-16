import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';

// setTimeout(function(){
//     store.dispatch({
//         type: 'SET_PRODUCTS',
//         payload: [
//             {
//                 id: 2,
//                 title: 'Is the product #2'
//             }
//         ]
//     });
// }, 1000);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>
), document.getElementById('root'));
