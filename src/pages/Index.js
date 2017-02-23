import React, { PureComponent } from 'react';
import {
  Route,
  Link,
  NavLink
} from 'react-router-dom'
import './App.css';
import '../iconfont/material-icons.css';

const Home = () => (
  <div>
    <h2>Home</h2>
    <Link to='/detail/333'>333</Link>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
    <Link to='/detail/555555'>55555</Link>
  </div>
)

const Topics = () => (
  <div>
    <h2>topics</h2>
  </div>
)

const User = () => (
  <div>
    <h2>user</h2>
  </div>
)


class NavItem extends PureComponent {
  render(){
    let {exact,to,icon,name} = this.props;
    return (
      <NavLink className="navitem" exact={exact} to={to} activeClassName="active">
        <i className="material-icons">{icon}</i>
        <span>{name}</span>
      </NavLink>
    )
  }
}

class Index extends PureComponent {
  render(){
    let {match} = this.props;
    return(
      <div className='root flexDirCol'>
        <div className='flexItem'>
          <Route exact path={match.path} component={Home}/>
          <Route path={`${match.url}/about`} component={About}/>
          <Route path={`${match.url}/topics`} component={Topics}/>
          <Route path={`${match.url}/user`} component={User}/>
        </div>
        <nav className='nav'>
          <NavItem exact={true} to={`${match.path}`} name="主页" icon="home" />
          <NavItem exact={false} to={`${match.url}/about`} name="电视" icon="live_tv" />
          <NavItem exact={false} to={`${match.url}/topics`} name="影视" icon="movie" />
          <NavItem exact={false} to={`${match.url}/user`} name="我的" icon="person" />
        </nav>
      </div>
    )
  }
}

export default Index

