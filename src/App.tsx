import { useState } from 'react'
import './App.css'
function App() {
  const [token, setToken] =useState<string>('');
  const [formData, setFormData] = useState({phone: "",username: "",password: ""});
  const [title,setTitle]=useState<string>('Sign in to your account');
  const [smallline,setSmallLine]=useState<string>('Want to post your property')
  const [smalltitle,setSmallTitle]=useState<string>('Sign up')
  function changeTitle(){
    if(title==='Sign in to your account'){
      setTitle('Sign up as new owner');
      setSmallLine('Have an account')
      setSmallTitle('Sign In')
    }else{
      setTitle('Sign in to your account');
      setSmallLine('Want to post your property');
      setSmallTitle('Sign up');
    }
  }
  const handleChange = (event:any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  if(token===''){
    return (
      <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {title}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" id='formElem' onSubmit={event => {event.preventDefault();console.log(formData);
            console.log(JSON.stringify(formData));
            let url:string;let met;
            if(title=='Sign in to your account'){
              url="https://smpg.onrender.com/signin/";met='POST';
            }else{
              url="https://smpg.onrender.com/signup/";met='POST';
            }
            fetch(url,{
              method:met,
              mode:'cors',
              body:JSON.stringify(formData)
            }).then(res=>{
              console.log(res.json());
            })
          } }>
          <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  autoComplete="mobile"
                  required value={formData.phone} onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="name"
                  required value={formData.username} onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required value={formData.password} onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {smallline}?{' '}
            <button onClick={changeTitle} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              {smalltitle} 
            </button>
          </p>
        </div>
      </div>
      </>
    )
  }
}

export default App
