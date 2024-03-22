import { useState } from 'react'
import './App.css'
import Auth from './Auth';
import PropertyForm from './PropertyForm';
interface userdetail{
  token:string
  phone:string
  username:string
}
function App() {
  const [token, setToken] = useState<string>('');
  const [phone, setPhone]=useState<string>('');
  const [username, setUsername]=useState<string>('');
  const handleFromAuth = (obj:userdetail) => {
    setToken(obj.token); // Set the received data in the parent component's state
    setPhone(obj.phone);
    setUsername(obj.username);
  };
  if(token===''){
    return(<Auth sendDataToParent={handleFromAuth}/>)
  }else{
    return(
      <>
        <PropertyForm phone={phone} username={username}/>
      </>
    )
  }
}

export default App