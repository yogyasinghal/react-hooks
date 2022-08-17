import { useEffect, useState } from "react"

import axios from "axios"

export const FetchApi=(props)=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        console.log("useeffect");
        async function callApi(){
            try{
                const result = await axios.get('http://localhost:3001/empDetails')
                console.log(result);
                setData(result.data)
            }
            catch(e){
                console.log(e);
            }
        }
        callApi()
    },[])
    return(
        <div>
            {console.log("render api",data)}
            <h1>Fetch</h1>
            {
                 data.map((item)=>(
                    <div className="bg-info m-2 p-2">
                        <h1>{item.fname}</h1>
                        <h2>{item.phone}</h2>
                        <h3>{item.email}</h3>
                        {/* <button onClick={(e)=>DeleteItem(e,item.id)} className="btn btn-primary btn-lg">Delete</button> */}
                    </div>
                ))
            }
        </div>
    )
}