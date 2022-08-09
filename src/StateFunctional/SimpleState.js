import {useState} from "react"; 
const SimpleState = (props)=>{
    console.log("hello");
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState('');
    const [ans,setAns] = useState('');
    const handleChange=(e)=>{
        e.preventDefault();
        setInp(e.target.value);
    }
    const showInput=(e)=>{
        // console.log("btn clicked");
        e.preventDefault();
        setAns(inp);
    }
    console.log(count);
    if(count<0){
        setCount(0);
    }
    return(
        <div>
            <h1>{inp}</h1>
            <h1>{ans}</h1>
            <div className="d-flex justify-content-center m-4 p-4">
            {/* {console.log(useState(100))} */}
            <input
            type="text" className="form-control w-25" placeholder="Enter Text" 
            onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>showInput(e)} className="mx-4 btn btn-success">Submit</button>
        </div>

        <div className="d-flex justify-content-evenly m-4 p-4">
            {/* <h1> Simple State</h1> */}
            <button className="btn btn-danger btn-lg" onClick={()=>setCount(count-1)}>Subtract</button>
            <h1>{count}</h1>
            <button className="btn btn-primary btn-lg" onClick={()=>setCount(count+1)}>Add</button>
        </div>
        </div>
    )
}
export default SimpleState;