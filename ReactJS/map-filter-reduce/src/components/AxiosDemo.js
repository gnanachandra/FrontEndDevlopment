import React,{useEffect, useState} from 'react'
import axios from 'axios';
const AxiosDemo = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            setData(res.data);
        })
        .catch(err=>{console.log(err);})
    },[])
  return (

    <div>
        <h1>Data received</h1>
        <ol>
            {
                data.map((post)=>{
                    return (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            <br></br>
                        </li>
                    )
                })
            }
        </ol>
    </div>
  )
}

export default AxiosDemo