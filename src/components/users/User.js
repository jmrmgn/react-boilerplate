import React from 'react';

const User = (props) => {
   return (
      <div>
         <h4>Name: {props.children} | Age: {props.age}</h4>
      </div>
   );
}

User.defaultProps = {
   age: 'N/a'
}

export default User;