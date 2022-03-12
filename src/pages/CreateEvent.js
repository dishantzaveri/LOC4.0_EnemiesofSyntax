import React, { useState } from "react";

export const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [sports, setSports] = useState("");
  const [Timing, setTiming] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const uploadData = () => {
    var axios = require("axios");
    var FormData = require("form-data");

    var data = new FormData();
    data.append("title", title);
    data.append("location", location);
    data.append("photo", image[0]);
    data.append("sports", sports);
    data.append("Timing", Timing);
    data.append("phone", phone);
    data.append("description", description);

    var config = {
      method: "post",
      url: "http://dishant.pythonanywhere.com/links/createevent",
      headers: {
        Authorization: "Token e822948ac36d3500dad10e2b0f2f3896b42cfc25",
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

    setImage(null);
    setTitle("");
    setLocation("");
    setPhone("");
    setTiming("");
    setDescription("");
    setSports("");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-10 mt-5">Create Event</h1>
      <div className="bg-gray-800 w-[500px] pt-10 pb-10 rounded-md flex flex-col justify-center items-center gap-6 text-gray-800">
        <div>
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-black px-6 py-2 border border-gray-600 text-lg rounded-xl w-[350px]"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
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
            placeholder="Enter Timing"
            value={Timing}
            onChange={(e) => setTiming(e.target.value)}
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

        <div>
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="text-black px-6 py-2 border border-gray-600 text-lg rounded-xl w-[350px]"
          />
        </div>
        <input type="file" onChange={(e) => setImage(e.target.files)} />
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
