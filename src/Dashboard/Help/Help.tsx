export default function Help(){
    return(<>
        <div className="flex bg-slate-800 min-h-48">
            <div>
            <form className="mt-96">
            <input type="text" placeholder="Enter your query" 
            className="px-7 py-2 mx-4 mb-10 rounded-xl
            bg-slate-600 text-white "></input>
            <button type="submit" className="text-2xl
              bg-inherit px-2 rounded-full text-white"
            >⫸</button>
            </form>
            </div>
        </div>
    </>)
}