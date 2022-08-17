import { useState } from "react";
export const useHook=()=>{
    const [data,setData]=useState('new data')
    return {
        data
    }
}