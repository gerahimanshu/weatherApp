import React from 'react';
import Login from './screens/login';
import Dashboard from './screens/dashboard';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './styles/App.scss';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <PublicRoute exact path="/" component={Login} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

const PublicRoute = ({ ...props }) => {
  const token = localStorage.getItem('access-token')  
  return token && token !== ''
    ? (<Redirect to="/dashboard" />)
    : (<Route {...props} />)
};

const ProtectedRoute =  ({ ...props }) => {
  const token = localStorage.getItem('access-token')
  return token && token !== ''
    ? (<Route {...props} />)
    : (<Redirect to="/" />)
};

export default App;
