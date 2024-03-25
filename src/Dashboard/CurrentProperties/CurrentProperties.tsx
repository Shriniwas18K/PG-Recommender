import { useState } from "react"

export default function CurrentProperties(username:string,phone:string,token:string){
    const [Properties,setProperties]=useState(undefined);
    async function getProperties() {
        const res=await fetch(
            `https://smpg.onrender.com/getUserProperties/?token=${encodeURIComponent(token)}/`,
            {
                method:'GET',
                mode:'cors',
                body:JSON.stringify({
                    "username":username,
                    "phone":phone
                })
            }
        );
        console.log(res.json());
        return(<>
            <h1>Current Properties</h1>
        </>)
    }
    
}