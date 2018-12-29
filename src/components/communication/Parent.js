import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
   state = {
      title: "Click Me!"
   }

   changeTheTextHandler = (newState) => {
      this.setState({
         title: newState
      });
   }

   render() {
      const { title } = this.state;
      return (
         <div>
            <Child
               title={title}
               changeTheTextHandler={this.changeTheTextHandler.bind(this, 'I can change the world!')}
               cantChangeTheTextHandler={this.changeTheTextHandler.bind(this, `No you can't change!`)}
            />
         </div>
      );
   }
}

export default Parent;