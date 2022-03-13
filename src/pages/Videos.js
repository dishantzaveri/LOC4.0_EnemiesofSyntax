import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";

export default function Videos() {
  const { token } = useContext(GlobalContext)
  const params = useParams()
  const [cricket, setCricket] = useState([])
  const [football, setFootball] = useState([])
  const [yoga, setYoga] = useState([])
  const [fitness, setFitness] = useState([])
  const [videoId, setVideoId] = useState(params.videoId);
  const [videoData, setVideoData] = useState({});

  const displayVideo = (ele) => {
    setVideoId(ele.link.split("/")[3]);
    addTimeStamp()
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

  const completeVideo = () => {
    const data = new FormData()
    data.append('title', videoData.title)
    data.append('time', new Date())
    data.append('completed', true)
    data.append('link', 'https://youtu.be/'+videoId)
    console.log(data);
    const config = {
      method: 'post',
      url: 'https://dishant.pythonanywhere.com/links/createtimestamp/',
      headers: {
        Authentication : "Token " + token
      },
      data: data
    }
    axios(config).then(res => console.log(res.data)).catch(err => console.log(err))
  }
  const addTimeStamp = () => {
    const data = new FormData()
    data.append('title', data.title)
    data.append('time', new Date())
    data.append('completed', false)
    data.append('link', data.link)
    console.log(data);
    const config = {
      method: 'post',
      url: 'https://dishant.pythonanywhere.com/links/createtimestamp/',
      headers: {
        Authentication : "Token " + token
      },
      data: data
    }
    axios(config).then(res => console.log(res.data)).catch(err => console.log(err))
  }

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
      <div className="pb-10 pt-5 bg-gray-900 flex flex-1 items-center justify-center mb-4">
        {videoData ? (
          <div>
            <iframe
              width="900"
              height="500"
              src={`https://www.youtube.com/embed/${videoId}`}
              allowFullScreen
            />
            <div className='flex justify-between items-center'>
              <h1 className='text-3xl font-semibold mt-4'>{videoData.title}</h1>
              <button onClick={() => completeVideo()} className='px-6 py-2 bg-green-400 shadow-xl hover:shadow-2xl rounded-xl'>Complete</button>
            </div>
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
