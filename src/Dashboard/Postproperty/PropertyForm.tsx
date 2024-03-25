import { useState } from "react";
import PropertyInputField from "./PropertyInputField";
import ImageUploader from "./ImageUploader";
export default function PropertyForm({ token, phone, username }: { token: string, phone: string, username: string }) {
  const [formData, setFormData] = useState(
    {
      username: username,
      phone: phone,
      address: "",
      pincode: 0,
      noOfPeopleToAccomodate: 0,
      rentPerPerson: 0,
      areaInSqft: 0,
      wifiFacility: "",
      furnished: "",
      url1: "",
      url2: "",
      url3: "",
      description: "",
    }
  )
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  function handlesubmit(event:any) {
    event.preventDefault();
    formData.phone=phone;
    formData.username=username;
    console.log(JSON.stringify(formData));
    // Construct the request URL with the token as a URL parameter
    const url = `https://smpg.onrender.com/postProperty/?token=${encodeURIComponent(token)}`;
    // Make a POST request with Fetch API
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },mode:'no-cors',
      body: JSON.stringify(formData)
    }).then(res=>{
      console.log(res.json());
    })
  }
  return (
    <div className="isolate bg-white px-6 py-5 sm:py-32 lg:px-8">
      <div className="mx-auto mt-20 max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Enter Property Details</h2>
      </div>
      <form onSubmit={handlesubmit} className="mx-auto mt-10 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <PropertyInputField Type="text" attr="address"
            formattr={formData.address} changer={handleChange} />
          <PropertyInputField Type="number" attr="pincode"
            formattr={formData.pincode} changer={handleChange} />
          <PropertyInputField Type="number" attr="noOfPeopleToAccomodate"
            formattr={formData.noOfPeopleToAccomodate} changer={handleChange} />
          <PropertyInputField Type="number" attr="rentPerPerson"
            formattr={formData.rentPerPerson} changer={handleChange}/>
          <PropertyInputField Type="number" attr="areaInSqft"
            formattr={formData.areaInSqft} changer={handleChange} />
          <PropertyInputField Type="text" attr="wifiFacility"
            formattr={formData.wifiFacility} changer={handleChange} />
          <PropertyInputField Type="text" attr="furnished"
            formattr={formData.furnished} changer={handleChange} />
          <PropertyInputField Type="text" attr="description"
            formattr={formData.description} changer={handleChange} />
          <ImageUploader token={token} />
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-slate-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Submit the Form
          </button>
        </div>
      </form >
    </div >
  )
}
