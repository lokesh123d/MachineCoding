import React from "react";
import { useFormData } from "../context/form-data-context";
const Settings = () => {
  const [formData, setFormData] = useFormData();
  console.log(formData);
  return (
    <>
      <label htmlFor="notification">Notification:</label>
      <br />
      <label htmlFor="on">on</label>
      <input
        type="radio"
        id="on"
        name="notification"
        value="on"
        checked={formData.notifications === true}
        onChange={() => setFormData({ ...formData, notifications: true })}
      />
      <label htmlFor="off">off</label>
      <input
        type="radio"
        id="off"
        name="notification"
        value="off"
        checked={formData.notifications === false}
        onChange={() => setFormData({ ...formData, notifications: false })}
      />
      <br />
      <label htmlFor="cookies">Accept Cookies</label>
      <input
        type="checkbox"
        id="cookies"
        name="cookies"
        checked={formData.terms}
        onChange={(e) => setFormData({ ...formData, terms: !formData.terms })}
      />
      <br />
      <select
        value={formData.theme}
        onChange={(e) => setFormData({ ...formData, theme: e.target.value })}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </>
  );
};

export default Settings;
