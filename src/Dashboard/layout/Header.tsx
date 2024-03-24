export default function Header({ sendDataToParent }) {
    function toggle() {
        const menu = document.getElementById('menu');
        menu?.classList.toggle('hidden');
    }

    return (
        <>
            <div className="py-5 text-2xl min-w-full bg-gray-200 text-center text-black font-bold rounded-b-3xl">
                <button onClick={toggle} className="fixed z-20 left-4">▤</button>
                <h1>Gharseek-Owners</h1>
                <div className="hidden" id="menu">
                    <div className="py-10 lg:h-screen lg:w-72 lg:fixed text-black font-sans px-1.5 bg-gray-200 rounded-xl">
                        {/* <button onClick={() => sendDataToParent('Home')} className="block py-2 px-4 text-lg text-gray-800 font-semibold hover:bg-gray-300 focus:outline-none focus:bg-gray-300 rounded">HomePage</button> */}
                        <button onClick={() => sendDataToParent('PropertyForm')} className="block mt-4 py-2 px-4 text-lg text-gray-800 font-semibold hover:bg-gray-300 focus:outline-none focus:bg-gray-300 rounded">Post a new property</button>
                        <button onClick={() => sendDataToParent('CurrentProperties')} className="block mt-4 py-2 px-4 text-lg text-gray-800 font-semibold hover:bg-gray-300 focus:outline-none focus:bg-gray-300 rounded">Current Listed</button>
                        <button onClick={() => sendDataToParent('Help')} className="block mt-4 py-2 px-4 text-lg text-gray-800 font-semibold hover:bg-gray-300 focus:outline-none focus:bg-gray-300 rounded">Contact us</button>
                    </div>
                </div>
            </div>
        </>
    )
}
