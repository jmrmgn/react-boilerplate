import React, { Component } from 'react';
import User from './User';

class Users extends Component {
   state = {
      users: [
         { id: 1, name: "Jomar", age: 24 },
         { id: 2, name: "Gian", age: 22 },
         { id: 3, name: "Mady", age: 20 },
      ],
      title: "Users List"
   }

   makeMeYounger = () => {
      const { users } = this.state;

      const newUser = users.map(user => {
         const tempUser = user;
         tempUser.age -= 10;
         return tempUser
      });

      this.setState({
         users: newUser
      });

      console.log(this.state);
   }

   render() {
      const { title, users } = this.state;
      return (
         <div>
            <button onClick={this.makeMeYounger}>Make us 10 years younger</button>
            <h1>{title}</h1>
            {
               users.map(user => {
                  return (
                     <User key={user.id} age={user.age}>
                        {user.name}
                     </User>
                  )
               })
            }
         </div>
      );
   }
}

export default Users;