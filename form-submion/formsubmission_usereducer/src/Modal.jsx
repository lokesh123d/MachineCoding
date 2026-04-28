import { useState } from "react";
import { createPortal } from "react-dom";

function Modal({ userId, users }) {
    const initialState =  users.find((item) => item.id == userId);
  const [user, setUser] = useState(initialState);
  console.log(user)

  const [formData, setFormData] = useState({
    name: user.name,
    age: user.age,
    category: user.category,
    gender: user.gender,
    hobbies: [],
    aggrement: user.aggrement,
  });

  console.log(userId);
  const modal = document.getElementById("modal");

  return createPortal(
    <form>
      <h2> Edit Form </h2>
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
      <button type="sbumit" onClick>Save Data</button>
    </form>,
    modal,
  );
}

export default Modal;
