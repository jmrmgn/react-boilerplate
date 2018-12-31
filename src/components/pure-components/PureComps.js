import React, { PureComponent } from 'react';
import PureComp from './PureComp';

class PureComps extends PureComponent {
   state = {
      val: 1
   }

   // componentDidMount() {
   //    setInterval(() => {
   //       this.setState({
   //          val: 1
   //       });
   //    }, 2000);
   // }

   // shouldComponentUpdate(nextProps, nextState) {
   //    console.log(`nextState ${nextState}`);
   //    console.log(`currentState ${this.state}`);

   //    // return TRUE if the state doesn't changed
   //    return ( this.state.val === nextState.val ) ? false : true ;
   // }
   

   render() {
      console.log('render');
      return (
         <div>
            <PureComp
               val={this.state.val}
            />
         </div>
      )
   }
}

export default PureComps;
