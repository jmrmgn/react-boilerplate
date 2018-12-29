import React from 'react';

const Child = (props) => {
   const { title, changeTheTextHandler, cantChangeTheTextHandler } = props;
   return (
      <div>
         <button onClick={changeTheTextHandler}>{title}</button>
         <button onClick={cantChangeTheTextHandler}>{title}</button>
      </div>
   );
};

export default Child;