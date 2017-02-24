import React, { PureComponent } from 'react';
import Banner from '../component/Banner';
import '../iconfont/material-icons.css';
import './Home.css';
import logo from '../img/logo_m.png';
import API from '../api';

class Home extends PureComponent {
  state = {
    index: 0,
    isLoaded:false
  };
  getLatestNews = ()=>{
      fetch(API.getLatestNews(),{
          method: 'GET',
          mode: 'cors',
      })
      .then((response) => {
          console.log(response)
        if (response.ok) {
          return response.json()
        }
      })
      .then((responseData) => {
          
        this.setState({
          isLoaded: true,
        })
      })
      .catch(() => {
        this.setState({
          isLoaded: false,
        })
      });
  }  
  componentDidMount(){
    this.getLatestNews();
  } 
  render() {
    return (
      <div className="root">
          <div className="homeHeader flex">
            <img className="logo" src={logo} alt='logo' />
          </div>
          <Banner></Banner>
          <h2>5655</h2>
      </div>
    )
  }
}

export default Home
