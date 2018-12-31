import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
   const { isLoggedIn, authenticateHandler } = props;

   return (
      <ul style={{ float: 'left', display: 'inline' }}>
         <li>
            <NavLink activeClassName="active" exact to="/">Home</NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" exact to="/about">About</NavLink>
         </li>         
         <li>
            <NavLink activeClassName="active" exact to="/users">react-class-vs-es6-components</NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" exact to="/two-way-bind">Two Way Bind</NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" exact to="/parent">Parent</NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" exact to="/list-key">List Key</NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" exact to="/fragments">Fragments</NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" exact to="/lifecycle">Lifecycles</NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" exact to="/pure-components">Pure Components</NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" exact to="/proptypes">Prop Types</NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" exact to="/memoize">Memoize</NavLink>
         </li>
         <li>
            <NavLink activeClassName="active" exact to="/lazy-loading">Lazy Loading</NavLink>
         </li>
         <br/>
         <li>
            <NavLink activeClassName="active" exact to="/name/test">Name test</NavLink>
         </li>
         <button onClick={authenticateHandler}>
            {
               (isLoggedIn) ? "Logout" : "Login"
            }
         </button>
      </ul>
   );
}

export default Navigation;
