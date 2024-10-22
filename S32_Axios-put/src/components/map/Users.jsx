import React from "react";
import { usersdata } from "./UserData";
import "./Users.css";
function Users() {
  return (
    <div className="usersContainer">
      <h2>Users Component</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis
        ratione excepturi, facere consequuntur fugiat sapiente laboriosam dicta
        impedit cupiditate ut hic quia deserunt et nulla enim est adipisci ex
        eaque quibusdam temporibus aperiam illum. Facilis quo deserunt,
        cupiditate, velit nulla eius impedit laborum delectus veritatis quaerat
        consequatur, maiores nam est ratione ipsa eum. Architecto labore
        obcaecati, officia reprehenderit id fugit rerum suscipit distinctio illo
        repellendus ipsam commodi, est aperiam sapiente ullam, soluta error
        porro sint quibusdam deleniti veniam voluptatibus dolor earum? Vitae
        molestias, nostrum assumenda doloribus delectus reprehenderit
        necessitatibus corporis reiciendis ad. Dicta, quam! Porro iusto nisi
        ratione ullam.
      </p>
      <button>Get Users</button>

      <div className="usersTable">
        <table rules="rows">
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>GENDER</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody align="center">
            {usersdata.map(function (user) {
              return (
                <tr>
                  <td>
                    <img src={user.picture.medium} width={70} height={70} />
                  </td>
                  <td>
                    {user.name.title} {user.name.first} {user.name.last}
                  </td>
                  <td>{user.gender}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
