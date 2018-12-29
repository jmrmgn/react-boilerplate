import React, { Component } from 'react';

class LifeCycleChild extends Component {

   // Run first as always
   constructor() {
      super();
      console.log('Child constructor');
   }

   // This will run BEFORE the component mount
   componentWillMount() {
      console.log('Child componentWillMount');
   }

   // This will run AFTER the component mounted
   componentDidMount() {
      console.log('Child componentDidMount');
   }

   /* ============================================= */

   // Basically, the state will update if we return TRUE, else it'll not update
   shouldComponentUpdate(nextProps, nextState) {
      console.log('Child shouldComponentUpdate');
      return false;
   }

   // This will run BEFORE the Component will update
   componentWillUpdate() {
      console.log('Child componentWillUpdate');
   }

   // This will run AFTER the Component update
   componentDidUpdate(prevProps, prevState) {
      console.log(`Child prevProps ${prevProps}`);
      console.log(`Child prevState ${prevState}`);
      console.log('Child componentDidUpdate');
   }

   componentWillUnmount() {
      console.log('Child componentWillUnmount');
   }

   render() {
      console.log('Child render');
      return (
         <div>
            Child: {this.props.name}
            <br/>
            <button onClick={this.props.changeNameEvent}>Change Name</button>
            <button onClick={this.props.unmountChild}>Unmount Child</button>
            
         </div>
      )
   }
}

export default LifeCycleChild;
