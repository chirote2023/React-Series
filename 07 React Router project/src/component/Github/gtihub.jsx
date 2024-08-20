import React, { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

function gtihub() {
    // const data = useLoaderData()

    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/chirote2023')
        .then(Response => Response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])


  return (
    <div className='text-centre bg-gray-600 text-white text-3xl p-4'>
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="git pic"
      width={300}></img>
    </div>
  )
}

export default gtihub

// export const githubInfoLoder = async ()=>{
//     const response = await fetch('https://api.github.com/users/chirote2023')
//     return response.json()
// }
