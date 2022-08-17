import { useState } from "react"

// normal js function
const useHook=()=>{
    const[data,setData] = useState('some data')
    return {
        data
    }
}

// below is component
const InpComponent=()=>{
    const {data} = useHook()
    return(
        <div>
            {console.log('render',data)}
            <form>
                <input type='text'></input>
            </form>
        </div>
    )
}

export default InpComponent;