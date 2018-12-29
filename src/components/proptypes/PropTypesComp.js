import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

const Test = (props) => {
   return(
      <Fragment>
         <h3>{props.str}</h3>
         {props.bool}
         <p>{props.strOrNum}</p>
         {
            props.arr.map( (ar, index) => {
               return (
                  <li key={index}>{ar}</li>
               )
            })
         }
         {
            props.arrOfObj.map((ar) => {
               return (
                  <Fragment key={ar.id}>
                     <li>Name: {ar.name} Age: {ar.age}</li>
                  </Fragment>
               )
            })
         }
      </Fragment>
   );
}

Test.propTypes = {
   str: PropTypes.string,
   bool: PropTypes.bool,
   strOrNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   arr: PropTypes.arrayOf(PropTypes.number),
   arrOfObj: PropTypes.arrayOf(PropTypes.shape(
      {
         id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
         name: PropTypes.string,
         age: PropTypes.number
      }
   ))
}

class PropTypesComp extends Component {
   render() {
      return(
         <Fragment>
            <Test 
               str={"Test"}
               bool
               strOrNum={123}
               arr={[1,2,3]}
               arrOfObj={
                  [
                     {id: 1, name: "John", age: 25},
                     {id: 2, name: "Aaron", age: 22}
                  ]
               }
            />
         </Fragment>
      );
   }
}

export default PropTypesComp;