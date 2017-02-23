import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom'
import Index from './pages/Index';
import Appbar from './component/Appbar'

const Detail = ({ match }) => (
  <div className="root">
    <Appbar title='详情' />
    <h2>{match.params.id}</h2>
  </div>
)

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div className='root'>
          {
            (window.location.pathname==='/')&&<Redirect push  to="/index" />
          }
          <Route path="/index" component={Index} />
          <Route path="/detail/:id" component={Detail} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App

