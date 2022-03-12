import React from 'react'

export const Rewards = () => {
  const data = [
  {
    id:1,
    title:"Football",
    points:"5 points",
    image:"https://pbs.twimg.com/profile_images/1278494917174587392/TKQueGE7_400x400.jpg"
  },
  {
    id:2,
    title:"Bottle",
    points:"3 points",
    image:"https://m.media-amazon.com/images/I/51L0b7NLiBL._SL1280_.jpg",

  },
  {
    id:3,
    title:"Bat",
    points:"7 points",
    image:"https://m.media-amazon.com/images/I/61wbIOMM-fL._SY606_.jpg"
  },
  {
    id:4,
    title:"Racquet",
    points : "6 points",
    image:"https://m.media-amazon.com/images/I/71UtKTJvMQL._SY679_.jpg"
  },
  {
    id:1,
    title:"Football",
    points:"5 points",
    image:"https://pbs.twimg.com/profile_images/1278494917174587392/TKQueGE7_400x400.jpg"
  },
  {
    id:2,
    title:"Bottle",
    points:"3 points",
    image:"https://m.media-amazon.com/images/I/51L0b7NLiBL._SL1280_.jpg",

  },
  {
    id:3,
    title:"Bat",
    points:"7 points",
    image:"https://m.media-amazon.com/images/I/61wbIOMM-fL._SY606_.jpg"
  },
  {
    id:4,
    title:"Racquet",
    points : "6 points",
    image:"https://m.media-amazon.com/images/I/71UtKTJvMQL._SY679_.jpg"
  },
  

]
  return (
    <div>
      <h1 className='text-4xl mb-10' >Rewards</h1>
      <div className='flex overflow-auto scroll-smooth no-scrollbar flex-1 flex-nowrap'>
        {
          data.map(ele => (
                <div key={ele.id} className=' mr-10 mt-3 bg-gray-700 rounded-md max-h-[500px] min-w-[150px]'>
                    <img className='max-h-[150px] min-w-full rounded-t-md' src={ele.image} />
                    <div className='p-2'>
                      <h3 className=' mt-1 text-2xl'>{ele.title}</h3>
                      <h3 className=' mt-1 text-xl' >{ele.points}</h3>
                      <button className='mt-2 bg-green-400 shadow-lg px-4 py-2 rounded-lg text-gray-800'>Redeem</button>
                    </div>
                </div>
          ))
        }
      </div>
    </div>
  )
}

