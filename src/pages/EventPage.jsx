import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { SimpleMap } from '../components/SimpleMap'
import QRCode from "react-qr-code";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const Event = () => {
  let params = useParams()
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('https://dishant.pythonanywhere.com/links/retrieveevents/' + params.eventId).then(res => setData(res.data))
  }, [])
  return (
    <div className='grid grid-cols-12'>
      <div className="col-span-7 h-[80vh]">
        <div className='w-full flex flex-col items-center bg-gray-700'>
          <img className='h-80' src={data.photo} alt="" />
        </div>
        <div className="px-24 py-6">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-5xl font-semibold text-white">{data.title}</h1>
            <Popup trigger={<button className='px-6 py-3 bg-green-400 shadow-xl hover:shadow-2xl rounded-xl text-gray-800'>Participate</button>} position="bottom center">
              <div className='p-2'>
                <QRCode value={data.title} />
              </div>
            </Popup>
            
          </div>
          <h1 className="text-xl text-gray-300 mt-4">{data.description}</h1>
          <h1 className="text-2xl text-gray-300 mt-4">Location: {data.location}</h1>
          <h1 className="text-2xl text-gray-300 mt-2">Sport: {data.sports}</h1>
        </div>
      </div>
      <div className="col-span-5">
        <SimpleMap />
      </div>
    </div>
  )
}