import axios from "axios";
import React, { useEffect, useState } from "react";
function DashBoard() {
  const [posts, setPosts] = useState([]);
  // const [id, setId] = useState(1);

  useEffect(() => {
   
    axios
      .get(`https://api.github.com/users`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);

  return (
    <div className="container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Sl no</th>
            <th scope="col">Profile Photo</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Delet/Insert</th>
          </tr>
        </thead>
        <tbody>
        {posts.map(post => <tr key={post.id}>
                <th scope="row">{post.id}</th>
                <td><img style={{width:"10%"}} src={post.avatar_url} alt="user" className="img-thumbnail"></img></td>
              <td>{post.login}</td>
              <td>{post.login}</td>               
              <td>{post.id}</td>
              <td>
                  <div>
                      <button className="btn btn-primary">Update</button>
                      <button className="btn btn-danger">Remove</button>
                  </div>
                </td>
            </tr>
          )}


        </tbody>
      </table>
    </div>
  );
}

export default DashBoard;
