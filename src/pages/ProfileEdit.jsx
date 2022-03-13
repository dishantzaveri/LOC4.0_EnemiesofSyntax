import React, { useEffect, useState, useContext } from "react";
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'
import { useNavigate } from "react-router-dom";

export const ProfileEdit = () => {
  const navigate = useNavigate()
  const { token, username } = useContext(GlobalContext)
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [sports, setSports] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState(null);
  const uploadData = () => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + token);

    var formdata = new FormData();
    formdata.append("username", username);
    formdata.append("weight", weight);
    formdata.append("height", height);
    photo!=null && formdata.append("photo", photo);
    formdata.append("age", age);
    formdata.append("sports", sports);
    formdata.append("phone", phone);

    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://dishant.pythonanywhere.com/links/updateprofile", requestOptions)
    .then(response => response.text())
    .then(result => navigate('/dashboard'))
    .catch(error => console.log('error', error));
      setPhoto(null);
      setWeight("");
      setHeight("");
      setPhone("");
      setAge("");
      setSports("");
  };
  useEffect(() => {
    console.log(username);
    let config = {
      method: 'get',
      header: {
        "Authorization": "Token " + token,
      },
      url: `https://dishant.pythonanywhere.com/links/retrieveprofile/${username}`
    }
    axios(config).then(res => {
      setWeight(res.data.weight)
      setHeight(res.data.height)
      setSports(res.data.sports)
      setAge(res.data.age)
      setPhone(res.data.phone)
      console.log(res.data);
    })
  }, [])
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-10 mt-5">Edit Profile</h1>
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
