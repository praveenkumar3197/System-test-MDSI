import axios from 'axios';
import React, { useState } from 'react';

export default function UserView(){
    const [user, setPost] = useState([])
    useState(() => {
        axios.get('./api/users/')
    .then(res => {
        setPost(res.data);
    })
    })
     
    return (
        <div className="table">
          <table>
            <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
            </tr>
            </thead>
            <tbody>
            {user.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.gender}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      );
}