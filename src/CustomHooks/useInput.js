import { useState } from "react";
export const useInput=()=>{

    const [value,setValue]=useState('')
    const [err,setErr]=useState("")
    return {
        value,
        err,
        onBlur:(e)=>{
            if(!e.target.value)
            setErr('this is a required field')
        },
        onChange:(e)=>setValue(e.target.value),
        
    }
}