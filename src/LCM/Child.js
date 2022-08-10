import { useEffect, useState } from "react"

export const Child = (props)=>{
    const [add,Setadd] = useState(0)
    useEffect(()=>{
        console.log("initial useeffect");
    })
    useEffect(()=>{
        console.log("useeffect");
    })
    return(
        <div>
            {console.log("render")}
            {add}
            <button onClick={()=>Setadd(add+1)} >clickme</button>
            <h1>child</h1>
        </div>
    )
}