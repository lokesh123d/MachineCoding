import { useState } from "react";
const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    gender: "male",
    agreement: true,
    hobbies: "",
    category: "general",
  });

  const [userData, setUserData] = useState([]);

  function handleFormData(e) {
    // e.preventDefault();
    // console.log(e.target.name);

    if (e.target.name == "name" || e.target.name == "age") {
      setFormData((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    }
    if (e.target.name == "gender") {
      setFormData((prev) => {
        return { ...prev, gender: e.target.id };
      });
    }

    if (e.target.name == "agreement") {
      setFormData((prev) => {
        return { ...prev, agreement: e.target.checked };
      });
    }
  }

  console.log(userData);

  function handleSubmit(e) {
    e.preventDefault();
    setUserData((prev) => {
      return [...prev, formData];
    });
    setFormData({
      name: "",
      age: 0,
      gender: "male",
      agreement: true,
      hobbies: "",
      category: "general",
    });
  }L



  function handleDelete(index){
    setUserData((prev)=>{
return prev.filter((item,idx)=>idx !=index)
    })
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => handleFormData(e)}
          placeholder="enter your name"
        ></input>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={(e) => handleFormData(e)}
          placeholder="enter your age"
        ></input>
        <label htmlFor="male">
          Male:
          <input
            type="radio"
            id="male"
            name="gender"
            checked={formData.gender == "male"}
            onChange={(e) => handleFormData(e)}
          />
        </label>
        <label htmlFor="female">
          Female:
          <input
            type="radio"
            id="female"
            checked={formData.gender == "female"}
            name="gender"
            onChange={(e) => handleFormData(e)}
          />
        </label>
        <label htmlFor="other">
          Other:
          <input
            type="radio"
            id="other"
            checked={formData.gender == "other"}
            name="gender"
            onChange={(e) => handleFormData(e)}
          />
        </label>

        <label htmlFor="agreement">
          Aggrement:
          <input
            type="checkbox"
            id="agreement"
            name="agreement"
            checked={formData.agreement}
            onChange={(e) => handleFormData(e)}
          ></input>
        </label>

        <select
          onChange={(e) =>
            setFormData((prev) => {
              return { ...prev, category: e.target.value };
            })
          }
        >
          <option value="general">General</option>
          <option value="sc">Sc</option>
          <option value="obs">Obs</option>
        </select>

        <label>
          Hobbies With Seprated Comma:
          <input
            type="text"
            value={formData.hobbies}
            onChange={(e) => {
              setFormData((prev) => {
                return { ...prev, hobbies: e.target.value.split(",") };
              });
            }}
          ></input>
        </label>

        <button type="submit">Submit Fomr</button>
      </form>

      <div>
       {userData.map((item,index)=>{
         return (
          <div  key={index}>
          <ul>
          <li>Name:{item.name}</li>
          <li>age:{item.age}</li>
          <li>gender:{item.gender}</li>
          <li>aggrement:{item.aggrement}</li>
          <li>category:{item.category}</li>
          <li>hobbies:{item.hobbies}</li>
        </ul>
        <button onClick={(e)=>handleDelete(index)}>
          Delete
        </button>
          </div>
         )
       })}
      </div>
    </>
  );
};

export default App;
