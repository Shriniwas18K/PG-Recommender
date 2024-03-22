import { useState } from "react";

export default function PropertyForm() {
  const [formData,setFormData]=useState({ phone: "", username: "", password: "" })
  async function submitted(e) {
   e.preventDefault();
    console.log(FormData);
  }
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
      // className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]" 
      />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Enter Property Details</h2>
      </div>
      <form onSubmit={submitted} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="address" className="Address">
              <b>Address</b>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="address"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label htmlFor="pincode" className="code">
              <b>pincode</b>
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="pincode"
                id="pincode"
                autoComplete="pincode"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="noOfPeopleToAccomodate" className="noOfPeopleToAccomodate">
              <b>no Of People To Accomodate</b>
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="noOfPeopleToAccomodate"
                id="noOfPeopleToAccomodate"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="rentPerPerson" className="rentPerPerson">
              <b>Rent Per Person</b>
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="rentPerPerson"
                id="rentPerPerson"
                autoComplete="rentPerPerson"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="areaInSqft" className="areaInSqft">
              <b>Area in Sqft</b>
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="areaInSqft"
                id="areaInSqft"
                autoComplete="areaInSqft"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="wifiFacility" className="wifiFacility">
              <b>Wifi Facility</b>
            </label>
            <div className="mt- 2.5">
              <input
                type="text"
                name="wifiFacility"
                id="wifiFacility"
                autoComplete="wifiFacility"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="furnished" className="furnished">
              <b>Is it furnished?</b>
            </label>
            <div className="mt- 2.5">
              <input
                type="text"
                name="furnished"
                id="furnished"
                autoComplete="furnished"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description" className="description">
              <b>description</b>
            </label>
            <div className="mt- 2.5">
              <input
                type="text"
                name="description"
                id="description"
                autoComplete="description"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="image" className="description">
              <b>Image</b>
            </label>
            <div className="mt-2.5">
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                autoComplete="image"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Submit the Form
          </button>
        </div>
      </form >
    </div >
  )
}
