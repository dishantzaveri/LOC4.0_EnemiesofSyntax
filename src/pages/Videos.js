import { useEffect, useState } from "react";
import { allData } from "../components/data";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Videos() {
  const params = useParams()
  const cricketData = allData.filter((ele) => ele.sport === "cricket");
  const [videoId, setVideoId] = useState(params.videoId);
  const [videoData, setVideoData] = useState({});

  const displayVideo = (ele) => {
    setVideoId(ele.videoLink.split("/")[3]);
  };

  console.log(videoData);

  useEffect(() => {
    if(videoId) {
      axios.get(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`)
        .then(res => setVideoData(res.data))
      window.scrollTo({top: 0, left: 0,behavior: 'smooth'})
    }
  }, [videoId])

  return (
    <div className='scroll-smooth'>
      <div className="pb-10 pt-5 bg-gray-900 flex flex-1 items-center justify-center mt-3">
        {videoData ? (
          <div>
            <iframe
              width="900"
              height="500"
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            />
            <h1 className='text-2xl mt-4'>{videoData.title}</h1>
          </div>
        ) : null}
      </div>
      <div className="bg-scroll">
        <div>
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
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
}
