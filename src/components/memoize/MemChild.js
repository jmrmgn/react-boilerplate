import React, { memo } from 'react';

const MemChild = memo((props) => {
   return (
      <div>
         Value is {props.val}
      </div>
   );
});

export default MemChild;
