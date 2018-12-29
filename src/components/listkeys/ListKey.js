import React from 'react';

const ListKey = (props) => {
   const { name, age, updateUserEvent, deleteUserEvent } = props;

   return (
      <div>
         <label>Name: {name}| Age: {age}</label>
         <input type="text" onChange={updateUserEvent} value={name} />
         <button onClick={deleteUserEvent}>Delete</button>
      </div>
   );

};

export default ListKey;