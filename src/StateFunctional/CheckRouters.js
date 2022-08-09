import { useParams } from "react-router-dom"
export function CheckRouters(){
    return(
        <div> CheckRouters {useParams().query} </div>
    )
}