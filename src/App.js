import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import './App.css';

import Navigation from './components/navigation/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Users from './components/users/Users'; // react-class-vs-es6-components
import TwoWayBind from './components/bind/TwoWayBind'; // two-way-binding
import Parent from './components/communication/Parent'; // Parent-Child communication
import ListKey from './components/listkeys/ListKeys'; // List-key
import Templates from './components/fragments/Templates'; // Fragments
import LifeCycle from './components/lifecycle-hooks/LifeCycle'; // Lifecycles
import PureComps from './components/pure-components/PureComps'; // Pure Component
import PropTypesComp from './components/proptypes/PropTypesComp'; // Prop-types
import MemParent from './components/memoize/MemParent';


const User = (params) => {
   return (
      <h1>Hello {params.username}</h1>
   );
}

class App extends Component {
   state = {
      isLoggedIn: false
   }

   authenticateHandler = () => {
      this.setState({
         isLoggedIn: !this.state.isLoggedIn
      });
   }

   render() {

      const { isLoggedIn } = this.state;
      return (
         <Router>
            <div className="App">
               <Navigation 
                  isLoggedIn={isLoggedIn}
                  authenticateHandler={this.authenticateHandler.bind(this)}
               />

               <Route path="/" exact strict component={Home} />
               <Route path="/about" exact strict component={About}/>
               <Route path="/users" exact strict component={Users}/>
               <Route path="/two-way-bind" exact strict component={TwoWayBind}/>
               <Route path="/parent" exact strict component={Parent}/>
               <Route path="/list-key" exact strict component={ListKey}/>
               <Route path="/fragments" exact strict component={Templates}/>
               <Route path="/lifecycle" exact strict component={LifeCycle}/>
               <Route path="/pure-components" exact strict component={PureComps}/>
               <Route path="/proptypes" exact strict component={PropTypesComp}/>

               <MemParent />
               <Route path="/name/:username" exact strict 
                  render={
                     ({match}) => {
                        return (isLoggedIn) ?
                           <User username={match.params.username}/> :
                           <Redirect to="/"/>
                     }
                  }
               />

            </div>
         </Router>
      );
   }
}

export default App;