import { useEffect, useState } from "react";
import axios from 'axios'
export function ContactManagerServer(props){
    const[contact,setContact]=useState();
    const [load,setload] = useState(false);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [city,setCity] = useState('');
    // const [flag,setFlag] = useState(false);
    // console.log(contact);
    useEffect(()=>{
        console.log("contact useefect");
        axios.get('http://localhost:3001/empDetails')
        .then((res)=>{
            console.log("res=",res);
            setContact(res.data);
            setload(true);
        })
        .catch((err)=>{
            console.log("err",err);
        })
        
    },[])
    
    const DeleteItem =(e,itemID)=>{
        console.log(itemID);
        let data = contact.filter((item)=>item.id!=itemID);
        axios.delete(`http://localhost:3001/empDetails/${itemID}`)
        .then((res)=>{
            console.log("delete success");
        })
        .catch((err)=>{
            console.log("delete failed");
        })
        setContact(data);
    }
    const addItem = (e)=>{
        e.preventDefault();
        let data = [...contact];
        let temp = {
            fname:name,
            phone:phone,
            email:email,
            city:city,
            id:Date.now()  
        }
        data = [...data,temp];
        setContact(data);
        axios.post('http://localhost:3001/empDetails',
            {fname:name,
            phone:phone,
            email:email,
            city:city,
            id:Date.now()}
        ) 
        .then((res)=>{
            console.log("added success");
        })
        .catch((err)=>{
            console.log("added failed");
        })
        // console.log("added item");
        // console.log(e);
    }
    return(
        <div>
            <h1>Contact Manager</h1>
            <h1 className="text-primary d-flex justify-content-center m-4">Sign In</h1>
            <form className="row mx-4 d-flex justify-content-center align-items-center">
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setName(e.target.value)} type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Name"></input>
                </div>
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Email"></input>
                </div>
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setPhone(e.target.value)} type="text" className="form-control"  placeholder="Enter Phone"></input>
                </div>
                <div className="col-sm-6 col-md-3  form-group p-2">
                    <input onChange={(e)=>setCity(e.target.value)} type="text" className="form-control"  placeholder="Enter City"></input>
                </div>
                
               
            </form>
            <button
                onClick={(e)=>addItem(e)}
                type="submit" className="btn btn-primary m-2">Submit</button>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 p-4 mx-3 justify-content-evenly ">
            {
                load?
                // contact.map((item)=>(
                //     <div className="bg-info m-2 p-2">
                //         <h1>{item.fname}</h1>
                //         <h2>{item.phone}</h2>
                //         <h3>{item.email}</h3>
                //         <button onClick={(e)=>DeleteItem(e,item.id)} className="btn btn-primary btn-lg">Delete</button>
                //     </div>
                // ))
                    
                    contact.map((item)=>(
                    <div class="col">
                    <div className="card bg-info  p-1" id="cm1">
                       
                        <div className="card-body">
                          <h5 className="card-title">{item.fname}</h5>
                          <h6 className="card-title">{item.phone}</h6>
                          <p className="card-text">{item.email}</p>
                          <p className="card-text">{item.city}</p>
                            <button 
                            className="btn btn-primary m-2" 
                            onClick={(e)=>DeleteItem(e,item.id)}>
                                delete
                            </button>
                            <button className="btn btn-primary m-2" 
                                    onClick={(e)=>this.setUpdateMsg(e,item.id)}>update</button>
                        
                        </div>
                    </div>
                    </div>
                    ))
                :<div></div>
            }
            </div>
        </div>
    )
}

