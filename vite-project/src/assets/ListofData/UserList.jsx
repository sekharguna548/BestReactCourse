import React from 'react'

function UserList() {


    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 22 },
      ];

  return (
    <div>
   {users.map(user => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          </div>
   ))}
    </div>
  )
}

export default UserList