import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import Thunk from 'redux-thunk';
import Promise from 'redux-promise-middleware';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';


import App from './components/app';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(Thunk, Promise)(createStore);

// Store with middleware and reducers
const State = combineReducers({
  routing: routerReducer
});

const store = createStoreWithMiddleware(State);

// Sync history with store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="page1" component={Page1} />
        <Route path="page2" component={Page2} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
