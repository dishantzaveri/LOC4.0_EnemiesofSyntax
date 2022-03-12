import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Badge, Stack, Avatar } from "@mui/material";
import { allData } from "../components/data";
export default function Videos() {
  const cricketData = allData.filter((ele) => ele.sport === "cricket");
  const [videoId, setVideoId] = useState(
    cricketData[0].videoLink.split("/")[3]
  );

  const displayVideo = (ele) => {
    setVideoId(ele.videoLink.split("/")[3]);
  };
  return (
    <div>
      <div>
        <div className="pb-10 pt-5 z-50 bg-gray-900 sticky top-0 flex flex-1 items-center justify-center mt-3">
          {videoId ? (
            <iframe
              width="853"
              height="380"
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            />
          ) : null}
        </div>
        <div className="bg-scroll">
          <h3 className="ml-5 mb-5 text-3xl font-bold">Cricket</h3>
          <div className="flex flex-row overflow-auto scroll-smooth no-scrollbar flex-1 flex-nowrap">
            {cricketData.map((ele) => (
              <div
                onClick={() => displayVideo(ele)}
                className="min-h-[100px] min-w-[150px] ml-10 cursor-pointer"
              >
                <img
                  src={`https://i.ytimg.com/vi/${
                    ele.videoLink.split("/")[3]
                  }/hqdefault.jpg`}
                />
                <h2>{ele.title}</h2>
              </div>
            ))}
          </div>
          <h3 className="ml-5 mt-10 mb-5 text-3xl font-bold">Cricket</h3>
          <div className="flex flex-row overflow-auto scroll-smooth no-scrollbar flex-1 flex-nowrap">
            {cricketData.map((ele) => (
              <div
                onClick={() => displayVideo(ele)}
                className="min-h-[100px] min-w-[150px] ml-10 cursor-pointer"
              >
                <img
                  src={`https://i.ytimg.com/vi/${
                    ele.videoLink.split("/")[3]
                  }/hqdefault.jpg`}
                />
                <h2>{ele.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
