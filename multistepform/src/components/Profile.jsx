import React from "react";
import { useFormData } from "../context/form-data-context";
const Profile = () => {
  const [formData, setFormData] = useFormData();
  console.log(formData);
  return (
    <div className="tab-container">
      <input
        type="text"
        placeholder="enter you name"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      <input
        type="number"
        placeholder="enter you age"
        value={formData.age}
        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
      />
      <input
        type="text"
        placeholder="enter you email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <div>
        <p>Gender:</p>
        <label htmlFor="gender-male">Male</label>
        <input
          type="radio"
          id="gender-male"
          name="gender"
          value="male"
          checked={formData.gender === "male"}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        />

        <label htmlFor="gender-female">Female</label>
        <input
          type="radio"
          id="gender-female"
          name="gender"
          value="female"
          checked={formData.gender === "female"}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        />

        <label htmlFor="gender-other">Other</label>
        <input
          type="radio"
          id="gender-other"
          name="gender"
          value="other"
          checked={formData.gender === "other"}
          onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Profile;
