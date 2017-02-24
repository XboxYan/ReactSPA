import React, { PureComponent } from 'react';
import {
  HashRouter,
  Route,
  Switch
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
      <HashRouter>
        <div className='root'>
          <Switch>
            <Route path="/detail/:id" component={Detail} />
            <Route path="/" component={Index} />
          </Switch>
        </div>
      </HashRouter >
    )
  }
}

export default App

