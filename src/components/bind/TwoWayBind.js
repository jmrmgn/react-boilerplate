import React, { Component } from 'react';

class TwoWayBind extends Component {
   state = {
      name: 'Two way bind'
   }

   changeNameHandler = (newState) => {
      this.setState({
         name: newState
      });
   }

   // Better way
   bindChangeNameHandler = (newState) => {
      this.setState({
         name: newState
      });
   }

   changeInputHandler = (e) => {
      this.setState({
         name: e.target.value
      });
   }

   render() {
      const { name } = this.state;
      return (
         <div>
            <button onClick={() => this.changeNameHandler('Two way bind :(')}>Change state using Anonymous Function</button>
            <button onClick={this.bindChangeNameHandler.bind(this, 'Two way bind :)')}>Change state using bind Function</button>
            <br/><br/>
            <input type="text" onChange={this.changeInputHandler} value={name} />
            <br/><br/>
            {name}
         </div>
      );
   }
}

export default TwoWayBind;