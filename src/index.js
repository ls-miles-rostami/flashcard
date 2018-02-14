import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import Stack from './components/Stack'
import StackForm from './components/StackForm'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './index.css'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/stack" component={Stack} />
        <Route path="/stack_form" component={StackForm} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);