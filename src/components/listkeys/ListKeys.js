import React, { Component } from 'react';
import ListKey from './ListKey';

class ListKeys extends Component {
   state = {
      users: [
         { id: 1, name: "John Doe", age: 21 },
         { id: 2, name: "Stephen Smith", age: 35 },
         { id: 3, name: "Aaron Carter", age: 25 }
      ]
   };

   deleteUserEvent = (id) => {
      const users = Object.assign([], this.state.users);
      const updatedUsers = users.filter(user => user.id !== id);

      this.setState({
         users: updatedUsers
      });
   }

   updateUserEvent = (id, event) => {
      // Find the user index
      const index = this.state.users.findIndex(user => user.id === id);

      // Create copy of the user selected
      const user = Object.assign({}, this.state.users[index]);

      // Modify the name of the selected user
      user.name = event.target.value;

      // Create copy of the users array
      const users = Object.assign([], this.state.users);

      // Update the user
      users[index] = user;

      // Change the state
      this.setState({
         users: users
      });

   }

   render() {
      const { users } = this.state;
      return (
         <div>
            {
               users.map(user => {
                  return (
                     <ListKey
                        key={user.id}
                        name={user.name}
                        age={user.age}
                        updateUserEvent={this.updateUserEvent.bind(this, user.id)}
                        deleteUserEvent={this.deleteUserEvent.bind(this, user.id)}
                     />
                  )
               })
            }
         </div>
      );
   }
}

export default ListKeys;