import { useState, useReducer } from "react";
import { reducer } from "./Reducer";
import { nanoid } from "nanoid";
import Modal from './Modal'
function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    category: "general",
    gender: "male",
    hobbies: [],
    aggrement: false,
  });

  const [state, dispatch] = useReducer(reducer, {
    users: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addUserData(e) {
    e.preventDefault();

    dispatch({ type: "ADD_USER", payload: { ...formData, id: nanoid() } });
    setFormData({
      name: "",
      age: "",
      category: "general",
      gender: "male",
      hobbies: [],
      aggrement: false,
    });
  }

  console.log(state.users);

  function isEditModal(id) {
    setIsModalOpen(id);
  }

  return (
    <>
      {isModalOpen ? (
        <Modal userId={isModalOpen} users={state.users} />
      ) : (
        <div>
          {" "}
          <form onSubmit={addUserData}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
            />
            <br />
            <input
              type="number"
              name="age"
              id="age"
              placeholder="enter your age"
              value={formData.age}
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, age: e.target.value };
                })
              }
            />
            <br />
            <label>Select You Gender :</label>
            <br />
            <label htmlFor="male">
              Male:{" "}
              <input
                type="radio"
                name="gender"
                id="male"
                checked={formData.gender == "male"}
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, gender: e.target.id };
                  });
                }}
              />
            </label>
            <br />
            <label htmlFor="female">
              Female:{" "}
              <input
                type="radio"
                name="gender"
                id="female"
                checked={formData.gender == "female"}
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, gender: e.target.id };
                  });
                }}
              />
            </label>
            <br />
            <label htmlFor="other">
              Other:{" "}
              <input
                type="radio"
                name="gender"
                id="other"
                checked={formData.gender == "other"}
                onChange={(e) => {
                  setFormData((prev) => {
                    return { ...prev, gender: e.target.id };
                  });
                }}
              />
            </label>
            <br />

            <label>
              Aggrement:
              <input
                type="checkbox"
                checked={formData.aggrement}
                onChange={(e) =>
                  setFormData((prev) => {
                    return { ...prev, aggrement: e.target.checked };
                  })
                }
              />
            </label>
            <br />
            <select
              onChange={(e) =>
                setFormData((prev) => {
                  return { ...prev, category: e.target.value };
                })
              }
              id="category"
            >
              <option value="general" name="category">
                General
              </option>
              <option value="sc" name="category">
                sc
              </option>
              <option value="obc" name="category">
                obc
              </option>
            </select>
            <br />
            <button type="sbumit">Add User Data</button>
          </form>
          <div>
            {state.users.map((user) => {
              return (
                <div key={user.id}>
                  Name:{user.name} , Age:{user.age || 20}, gender:{user.gender}{" "}
                  , aggrement:{user.aggrement} , category: {user.category}
                  <br />
                  <button
                    onClick={(e) =>
                      dispatch({
                        type: "DELETE_USER",
                        payload: { id: user.id },
                      })
                    }
                  >
                    Delete user
                  </button>
                  <button onClick={() => isEditModal(user.id)}>
                    Edit user
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
