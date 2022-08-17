// basic one
import { useHook } from "../CustomHooks/useHook";

const HookComp=()=>{
    const {data}=useHook()
    return(
        <div>
            {console.log('render',data)}
        <h1>{data}</h1>
        </div>

    )
}
export default HookComp;
