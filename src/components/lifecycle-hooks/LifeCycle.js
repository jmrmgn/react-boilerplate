import React, { Component } from 'react';
import LifeCycleChild from './LifeCycleChild';

class LifeCycle extends Component {
   
   // Run first as always
   constructor() {
      super();
      this.state = {
         name: "John Doe"
      }
      console.log('constructor');
   }

   // This will run BEFORE the component mounted
   componentWillMount() {
      console.log('componentWillMount');
   }

   // This will run AFTER the component mounted
   componentDidMount() {
      console.log('componentDidMount');
   }
   
   /* ============================================= */

   // Basically, the state will update if we return TRUE, else it'll not update
   shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate');
      return true;
   }

   // This will run BEFORE RENDER and BEFORE the Component will update
   
   componentWillUpdate() {
      console.log('componentWillUpdate');
   }

   // This will run AFTER RENDER and AFTER the Component update
   componentDidUpdate(prevProps, prevState) {
      console.log(`prevProps ${prevProps}`);
      console.log(`prevState ${prevState}`);
      console.log('componentDidUpdate');
   }

   changeNameEvent() {
      this.setState({
         name: "Thom Yorke"
      });
   }

   unmountChild() {
      this.setState({
         name: "Aaron"
      });
   }

   render() {
      console.log('render');

      if (this.state.name === 'Aaron') {
         return <div/>
      }
      else {
         return (
            <div>
               {this.state.name}
               <LifeCycleChild 
                  name={this.state.name}
                  changeNameEvent={this.changeNameEvent.bind(this)}
                  unmountChild={this.unmountChild.bind(this)}
               />
            </div>
         )
      }
   }
}

export default LifeCycle;
