import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute/index'

import './App.css'

import Home from './components/Home/index'
import Jobs from './components/Jobs/index'
import Login from './components/Login/index'
import Notfound from './components/NotFound/index'

import JobItemDetails from './components/JobItemDetails/index'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
    <ProtectedRoute exact path="/not-found" component={Notfound} />
    <Redirect to="/not-found" />
  </Switch>
)
export default App
