import ConsumerOne from "./ConsumerOne"
import ConsumerTwo from "./ConsumerTwo"
import ContextCreation from "./ContextCreationEg"
function ContextProviderEg(){
    const conValue='new value'
    return(
        <div>
    <ContextCreation.Provider value={conValue}>
        <ConsumerOne></ConsumerOne>
        <ConsumerTwo></ConsumerTwo>
    </ContextCreation.Provider>
    </div>
    )
}
export default ContextProviderEg;
// https://www.youtube.com/watch?v=1reYPCaViVI