import { useState } from 'react'
import Auth from './Auth';
import Dashboard from './Dashboard/Dashboard';
function App() {
  const [token, setToken] = useState<string>('');
  const [phone, setPhone]=useState<string>('');
  const [username, setUsername]=useState<string>('');
  const handleFromAuth = (tokenvalue:string,phonevalue:string,usernamevalue:string) => {
    setToken(tokenvalue); // Set the received data in the parent component's state
    setPhone(phonevalue);
    setUsername(usernamevalue);
  };
  if(token===''){
    return(<Auth sendDataToParent={handleFromAuth}/>)
  }else{
    return(
     <Dashboard token={token} phone={phone} username={username}/>
    )
  }
}

export default App