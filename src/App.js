import React, {Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './page/homepage/homepage.component'
import ShopPage from './page/shop/shop.component'
import Header from './components/header/header.component'
import RegisterAndLogin from './page/register-login/register-login.component'
import {auth} from './firebase/firebase.utils'

class App extends Component {

  constructor(){
    super();

    this.state ={
      currentUser : null
    }
  }

  unsubscribeFromAUth = null;

  componentDidMount() {
   this.unsubscribeFromAUth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user);
    })
  }



  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route  exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route  path='/signin' component={RegisterAndLogin} />
        </Switch>
      </div>
    );
  }
}

export default App;
