import React from 'react'

const PureComp = (props) => {
   console.log('Child render');
   return (
      <div>
         {props.val}
      </div>
   );
};

export default PureComp;