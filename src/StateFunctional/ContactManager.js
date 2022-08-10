import { useEffect, useState } from "react";
import axios from 'axios'
export function ContactManager(props){
    const[contact,setContact]=useState(props.data);
    // const [flag,setFlag] = useState(false);
    console.log(contact);
    useEffect(()=>{
        console.log("contact useefect");
        
    },[])
    const getClassName=(item)=>{
        // e.preventDefault();
        
        console.log("getclassname");
        for(var i = 0;i<contact.length;i++){
            console.log(contact[i]);
        }
        
        if(item.address==="ind")
        return "bg-success";
        else
        return "bg-warning"
    }
    const DeleteItem =(e,itemID)=>{
        console.log(itemID);
        let temp = contact.filter((item)=>item.id!=itemID);
        setContact(temp);
    }
    const addItem = (e)=>{
        e.preventDefault();
        console.log("additem");
        console.log(e);
    }
    return(
        <div>
            <h1>Contact Manager</h1>
            <h1 className="text-primary d-flex justify-content-center m-4">Sign In</h1>
            <form className="d-flex justify-content-center g-2 align-items-center">
                <div className="form-group m-2">
                    <input type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Enter Name"></input>
                </div>
                <div className="form-group m-2">
                    <input type="password" className="form-control"  placeholder="Password"></input>
                </div>
                <div className="form-group m-2">
                    <input type="password" className="form-control"  placeholder="Password"></input>
                </div>
                
                <button
                
                type="submit" className="btn btn-primary m-2">Submit</button>
            </form>
            {
                contact.map((item)=>(
                    <div className="bg-info m-2 p-2">
                        <h1 className={getClassName(item)}>{item.fname}</h1>
                        <h2>{item.phone}</h2>
                        <h3>{item.email}</h3>
                        <button onClick={(e)=>DeleteItem(e,item.id)} className="btn btn-primary btn-lg">Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

