import React, { PureComponent } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect
} from 'react-router-dom'
import Index from './pages/Index';
import Appbar from './component/Appbar'

class Detail extends PureComponent {
  render() {
    return (
      <div className="root">
        <Appbar title='详情' {...this.props} />
        <h2>{this.props.match.params.id}</h2>
      </div>
    )
  }
}

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

