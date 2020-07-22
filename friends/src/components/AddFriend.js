import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

// const initialFormValues={
//     name:'antonio',
//     age: 27,
//     email: 'test@test.com'
// }

const initialFormValues = {
  name: "",
  age: "",
  email: "",
};

function AddFriend() {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleSumbit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", formValues)
      .then((res) => {
        console.log("added new friend to friends list");
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className=" bg-gray-300 p-5 flex flex-col" onSubmit={handleSumbit}>
        <label className='my-2 text-xl'>
          <input
            className="bg-gray-100 p-2"
            type="text"
            onChange={handleChange}
            name="name"
            value={formValues.name}
            placeholder="name"
          />
        </label>
        <label className='my-2 text-xl'>
          <input
            className="bg-gray-100 p-2"
            type="number"
            onChange={handleChange}
            name="age"
            value={formValues.age}
            placeholder="age"
          />
        </label>
        <label className='my-2 text-xl'>
          <input
            className="bg-gray-100 p-2"
            type="email"
            onChange={handleChange}
            name="email"
            value={formValues.email}
            placeholder="email"
          />
        </label>
        <button className="rounded bg-blue-800 text-white p-2">Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriend;
