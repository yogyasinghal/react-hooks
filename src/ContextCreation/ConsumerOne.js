import SimpleContext from "./ContextCreationEg"
import { useContext } from "react"
const ConsumerOne=()=>{
    const value=useContext(SimpleContext)
    return(
        <div>
            
            <h1>{value}</h1>
        </div>
    )
}
export default ConsumerOne;