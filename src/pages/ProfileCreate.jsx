import React, { useState, useContext } from "react";
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'

export const ProfileCreate = () => {
  const { token, username } = useContext(GlobalContext)
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sports, setSports] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);
  const uploadData = () => {
    let data = new FormData();
    data.append("height", height);
    data.append("username", username);
    data.append("age", age);
    data.append("photo", photo[0]);
    data.append("sports", sports);
    data.append("weight", weight);
    data.append("phone", phone);

    var config = {
      method: "post",
      url: 'https://dishant.pythonanywhere.com/links/createprofile/',
      headers: {
        Authorization: "Token " + token,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

    setPhoto(null);
    setWeight("");
    setHeight("");
    setPhone("");
    setAge("");
    setSports("");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-10 mt-5">Create Profile</h1>
      <div className="bg-gray-800 w-[500px] pt-10 pb-10 rounded-md flex flex-col justify-center items-center gap-6 text-gray-800">
        <div>
          <input
            type="text"
            placeholder="Enter Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="text-black px-6 py-2 border border-gray-600 text-lg rounded-xl w-[350px]"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="text-black px-6 py-2 border border-gray-600 text-lg rounded-xl w-[350px]"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Sports"
            value={sports}
            onChange={(e) => setSports(e.target.value)}
            className="text-black px-6 py-2 border border-gray-600 text-lg rounded-xl w-[350px]"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="text-black px-6 py-2 border border-gray-600 text-lg rounded-xl w-[350px]"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="text-black px-6 py-2 border border-gray-600 text-lg rounded-xl w-[350px]"
          />
        </div>
        <input type="file" onChange={(e) => setPhoto(e.target.files)} />
      </div>

      <div>
        <button
          className="mt-5 px-8 py-3 bg-green-400 shadow-xl hover:shadow-2xl rounded-xl"
          onClick={() => uploadData()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
