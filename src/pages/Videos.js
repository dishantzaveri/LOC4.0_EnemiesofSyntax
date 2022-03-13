import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Videos() {
  const params = useParams()
  const [cricket, setCricket] = useState([])
  const [football, setFootball] = useState([])
  const [yoga, setYoga] = useState([])
  const [fitness, setFitness] = useState([])
  const [videoId, setVideoId] = useState(params.videoId);
  const [videoData, setVideoData] = useState({});

  const displayVideo = (ele) => {
    setVideoId(ele.link.split("/")[3]);
  };

  const getCricket = () => {
    axios.get('https://dishant.pythonanywhere.com/links/listcrickets').then(res => setCricket(res.data))
  }

  const getFootball = () => {
    axios.get('https://dishant.pythonanywhere.com/links/listfootball').then(res => setFootball(res.data))
  }

  const getYoga = () => {
    axios.get('https://dishant.pythonanywhere.com/links/listyoga').then(res => setYoga(res.data))
  }

  const getFitness = () => {
    axios.get('https://dishant.pythonanywhere.com/links/listfitness').then(res => setFitness(res.data))
  }

  console.log(videoData);

  useEffect(() => {
    getCricket()
    getFootball()
    getYoga()
    getFitness()
  }, [])

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
            <h1 className='text-3xl font-semibold mt-4'>{videoData.title}</h1>
          </div>
        ) : null}
      </div>
      <div className="bg-scroll flex flex-col gap-6 pl-24">
        <div className=''>
          <h3 className="mb-5 text-3xl font-bold">Cricket</h3>
          <div className="flex flex-row overflow-auto scroll-smooth no-scrollbar flex-1 flex-nowrap">
            {cricket.map((ele) => (
              <div
                onClick={() => displayVideo(ele)}
                className="min-h-[100px] min-w-[200px] mr-10 cursor-pointer bg-gray-500 rounded-lg shadow-xl"
              >
                <img
                  className='rounded-t-lg'
                  src={`https://i.ytimg.com/vi/${
                    ele.link.split("/")[3]
                  }/hqdefault.jpg`}
                />
                <h2 className='text-lg font-semibold mx-3 my-2'>{ele.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-3xl font-bold">Football</h3>
          <div className="flex flex-row overflow-auto scroll-smooth no-scrollbar flex-1 flex-nowrap">
            {football.map((ele) => (
              <div
                onClick={() => displayVideo(ele)}
                className="min-h-[100px] min-w-[200px] mr-10 cursor-pointer bg-gray-500 rounded-lg shadow-xl"
              >
                <img
                  className='rounded-t-lg'
                  src={`https://i.ytimg.com/vi/${
                    ele.link.split("/")[3]
                  }/hqdefault.jpg`}
                />
                <h2 className='text-lg font-semibold mx-3 my-2'>{ele.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-3xl font-bold">Yoga</h3>
          <div className="flex flex-row overflow-auto scroll-smooth no-scrollbar flex-1 flex-nowrap">
            {yoga.map((ele) => (
              <div
                onClick={() => displayVideo(ele)}
                className="min-h-[100px] min-w-[200px] mr-10 cursor-pointer bg-gray-500 rounded-lg shadow-xl"
              >
                <img
                  className='rounded-t-lg'
                  src={`https://i.ytimg.com/vi/${
                    ele.link.split("/")[3]
                  }/hqdefault.jpg`}
                />
                <h2 className='text-lg font-semibold mx-3 my-2'>{ele.title}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 text-3xl font-bold">Fitness</h3>
          <div className="flex flex-row overflow-auto scroll-smooth no-scrollbar flex-1 flex-nowrap">
            {fitness.map((ele) => (
              <div
                onClick={() => displayVideo(ele)}
                className="min-h-[100px] min-w-[200px] mr-10 cursor-pointer bg-gray-500 rounded-lg shadow-xl"
              >
                <img
                  className='rounded-t-lg'
                  src={`https://i.ytimg.com/vi/${
                    ele.link.split("/")[3]
                  }/hqdefault.jpg`}
                />
                <h2 className='text-lg font-semibold mx-3 my-2'>{ele.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
