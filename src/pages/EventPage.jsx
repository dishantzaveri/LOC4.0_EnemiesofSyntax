import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export const Event = () => {
  let params = useParams()
  console.log(params);
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('https://dishant.pythonanywhere.com/links/retrieveevents/' + params.eventId).then(res => setData(res.data.data))
  }, [])
  console.log(data);
  return (
    <div>{data.id}</div>
  )
}