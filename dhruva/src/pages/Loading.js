import React,  { useState, useEffect }  from "react";

import ReactLoading from "react-loading";


export default function Loading() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => setLoading(false), 2000)
    }, [])
    return (
    <>
     {loading === false ? (
         <div>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         
        <h3>Genius loading</h3> 
         <img src="https://th.bing.com/th/id/R.cb464d9284e131ba0c0e1e05961c24c4?rik=8tdXfxN5yigS1g&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpsychology-brain-png-brain-gears-icon-png-800.png&ehk=RyZ1VMV8MhkMQivLRFHtqhUHzg4VauXl4tsYQIzfTPc%3d&risl=&pid=ImgRaw&r=0" alt="CognitiveBrain" width="5000" height="6000"/>
         </div>
) : (
    <div>
    <h1>Wait just a moment ....</h1>

<h3><ReactLoading type="bubbles" color="#0000FF" text-align="center"
height={1000} width={400} /></h3>

</div>
  )
}
    </>
    )
    }
