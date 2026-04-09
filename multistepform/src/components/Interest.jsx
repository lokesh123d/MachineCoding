import React, { useState, useEffect } from "react";
import { useFormData } from "../context/form-data-context";
const Interest = () => {
  const [formData, setFormData] = useFormData();
  console.log(formData);
  return (
    <>
      <input
        type="text"
        placeholder="enter your hobby with the seprated comma"
        value={formData.hobbies.join(",")}
        onChange={(e) =>
          setFormData({ ...formData, hobbies: e.target.value.split(",") })
        }
      />
      <input
        type="text"
        placeholder="enter your favourite category  with the seprated comma"
        value={formData.favoriteCategory.join(",")}
        onChange={(e) =>
          setFormData({
            ...formData,
            favoriteCategory: e.target.value.split(","),
          })
        }
      />

      <select
        value={formData.experienceLevel}
        onChange={(e) =>
          setFormData({ ...formData, experienceLevel: e.target.value })
        }
      >
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
    </>
  );
};

export default Interest;
