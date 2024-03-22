import { useState } from 'react'
import './App.css'
import Auth from './Auth';
function App() {
  const [token, setToken] = useState<string>('');
  const handleTokenFromAuth = (data:string) => {
    setToken(data); // Set the received data in the parent component's state
  };
  if(token===''){
    return(<Auth sendDataToParent={handleTokenFromAuth}/>)
  }else{
    return(
      <>
        <h1>welcome to platform</h1>
      </>
    )
  }
}

export default App
