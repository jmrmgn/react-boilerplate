import React, { Component } from 'react';
import MemChild from './MemChild';

class MemParent extends Component {
   state = {
      val: 1,
      inputValue: 0
   };

   // componentDidMount() {
   //    setInterval(() => {
   //       this.setState({
   //          val: 1
   //       });
   //    }, 2000);
   // }

   constructor(props) {
      super(props);
      this.inputRef = React.createRef();
   }

   addValueHandler = () => {
      let valState = this.state.val;

      this.setState({
         val: valState + +this.inputRef.current.value
      });
   }

   changeValue = (e) => {
      this.setState({
         inputValue: e.target.value
      });

   }

   render() {
      const { inputValue, val } = this.state;

      return(
         <div>
            <MemChild val={val}/>
            <input type="number" onChange={this.changeValue.bind(this)} ref={this.inputRef} value={inputValue} />
            <br/>
            <button onClick={this.addValueHandler.bind(this)}> Add {inputValue} </button>
         </div>
      )
   }
}

export default MemParent;