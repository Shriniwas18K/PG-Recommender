import OutputCardfield from "./OutputCardfield"
export default function Cards() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-4xl w-full px-6 py-8 bg-white shadow-md rounded-md" style={{ backgroundImage: 'url("http://www.pixelstalk.net/wp-content/uploads/2016/09/All-White-Background-HD.jpg")' }}>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <OutputCardfield attr="Owner name" value="output owner name" />
                        <OutputCardfield attr="Address" value="output owner address" />
                        <OutputCardfield attr="Owner phone number" value="output owner number" />
                        <OutputCardfield attr="Rent per person" value="output rent" />
                        <OutputCardfield attr="Area in Sqft" value="output area" />
                        <OutputCardfield attr="Wifi Availability" value="output wifi" />
                        <OutputCardfield attr="Pincode" value="output pincode" />
                        <OutputCardfield attr="Furnished" value="output Furnished" />
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Images</dt>
                            <div className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <div className="flex justify-center">
                                    <div className="flex flex-wrap gap-4">
                                        <img src="https://tse4.mm.bing.net/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&pid=Api&P=0&h=180" alt="Image 1" className="w-72 h-36 rounded-md" />
                                        <img src="https://tse2.mm.bing.net/th?id=OIP.DpcLyyRCeTWoiiMNdCTXxQHaEK&pid=Api&P=0&h=180" alt="Image 2" className="w-72 h-36 rounded-md" />
                                        <img src="https://tse4.mm.bing.net/th?id=OIP.1YM53mG10H_U25iPjop83QAAAA&pid=Api&P=0&h=180" alt="Image 3" className="w-72 h-36 rounded-md" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}


async function processData() {
    fetch('https://smpg.onrender.com/retrieveProperties/412434').then(data => {
        return data.json()
    }).then(data => {
        data.map(item => {
            console.log(item)
        })
    })
}

processData();
