import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";

const url = "https://rest-api-without-db.herokuapp.com/users/";

function Index() {
  const [users, setUsers] = useState(null);
  const [isLoading, setILoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState({
    username: "",
    email: "",
  });

  const [updateFlag, setUpdateFlag] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");

  const getAllUsers = () => {
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw Error("Could Not Fetch");
        }
        return res.json();
      })
      .then(data => {
        setUsers(data.users);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setILoading(false);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  const handleDelete = id => {
    fetch(url + `/${id}`, {
      method: "Delete",
    })
      .then(res => {
        if (!res.ok) {
          throw Error("Could Not Delete");
        }
        getAllUsers();
      })

      .catch(err => {
        setError(err.message);
      });
  };
  const addUser = user => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        if (res.status === 201) {
          getAllUsers();
        } else {
          throw new Error("Could Not Create new !");
        }
      })

      .catch(err => {
        setError(err.message);
      });
  };
  const handleEdit = id => {
    setSelectedUserId(id)
    setUpdateFlag(true);
    const filteredData = users.filter(user => user.id === id);
    setSelectedUser({
      username: filteredData[0].username,
      email: filteredData[0].email,
    });
  };

  const handleUpdate = user => {
    fetch(url + `/${selectedUserId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to update");
        }
        getAllUsers();
        setUpdateFlag(false);
      })

      .catch(err => {
        setError(err.message);
      });
  };
  return (
    <div>
      <h1>Users Management App </h1>

      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}

      {updateFlag ? (
        <UserForm
          btnText="Update User"
          handleSubmitData={handleUpdate}
          selectedUser={selectedUser}
        />
      ) : (
        <UserForm btnText="Add User" handleSubmitData={addUser} />
      )}

      <section>
        {users &&
          users.map(user => {
            const { id, username, email } = user;
            return (
              <article key={id} className="card">
                <p>{username}</p>
                <p>{email}</p>
                <button
                  className="btn"
                  onClick={() => {
                    handleEdit(id);
                  }}>
                  Edit
                </button>
                <button
                  className="btn"
                  onClick={() => {
                    handleDelete(id);
                  }}>
                  Delete
                </button>
              </article>
            );
          })}
      </section>
    </div>
  );
}

export default Index;
