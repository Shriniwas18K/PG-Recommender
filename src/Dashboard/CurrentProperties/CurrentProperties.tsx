import { useState } from "react"

export default function CurrentProperties(username:string,phone:string,token:string){
    const [Properties,setProperties]=useState(undefined);
    async function getProperties() {
        const res=await fetch(
            `https://smpg.onrender.com/getUserProperties/${token}/${username}/${phone}/`,
            {
                method:'GET',
                mode:'cors'
            }
        );
        console.log(res.json());
        return(<>
            <h1>Current Properties</h1>
        </>)
    }
    
}