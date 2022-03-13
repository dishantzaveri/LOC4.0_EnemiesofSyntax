import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { SimpleMap } from '../components/SimpleMap'

export const Event = () => {
  let params = useParams()
  console.log(params.eventId);
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('https://dishant.pythonanywhere.com/links/retrieveevents/' + params.eventId).then(res => setData(res.data.data))
  }, [])
  console.log(data);
  return (
    <div className='grid grid-cols-12'>
      <div className="col-span-7">
        
      </div>
      <div className="col-span-5">
        <SimpleMap />
      </div>
    </div>
  )
}