import { useState } from "react";


export default function Stringli(){
    
    const[n1,setn1]=useState("");
    const[list,setlist]=useState([]);

    const Submit =()=>{
        setlist([...list,n1])
        setn1("")

    }
    
    return(
        <>
        <input type="text" placeholder="Enter name" value={n1} onChange={(e)=>setn1(e.target.value)}></input>
        <button onClick={Submit}>Submit</button>
        <ol>
            {list.map((item, index) => (
            <li key={index}>
                {item}
            </li>
            ))}
        </ol>
        </>
    )
}
















