import React, { PureComponent } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import Index from './pages/Index';


const Detail = ({ match }) => (
  <div>
    <h2>{match.params.id}</h2>
  </div>
)

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className='root'>
          {
            (window.location.pathname==='/')&&<Redirect to="/index" />
          }
          <Route path="/index" component={Index} />
          <Route path="/detail/:id" component={Detail} />
        </div>
      </Router>
    )
  }
}

export default App

