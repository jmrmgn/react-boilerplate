import React, { memo } from 'react';

const MemChild = memo((props) => {
   console.log('Render');
   return (
      <div>
         Value is {props.val}
      </div>
   );
});

export default MemChild;
