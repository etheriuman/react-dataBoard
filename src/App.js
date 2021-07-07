import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/home" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
