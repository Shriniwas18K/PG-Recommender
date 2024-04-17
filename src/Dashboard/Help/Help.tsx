// export default function Help(){
//     return(<>
//         <div className="flex bg-slate-800 min-h-48">
//             <div>
//             <form className="mt-96">
//             <input type="text" placeholder="Enter your query" 
//             className="px-7 py-2 mx-4 mb-10 rounded-xl
//             bg-slate-600 text-white "></input>
//             <button type="submit" className="text-2xl
//               bg-inherit px-2 rounded-full text-white"
//             >⫸</button>
//             </form>
//             </div>
//         </div>
//     </>)
// }

import React from 'react';
// import './styles.css';

export default function Help() {
    return (
        <div className="isolate bg-white px-6 py-5 sm:py-32 lg:px-8">

            <div className="p-4">
                <div className="text-xl font-bold mb-4">Contact Us</div>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                        <div className="bg-gray-200 p-4 rounded">
                            <p className="font-semibold">Name: Pranav Ukhade</p>
                            <p>Email: pranav.ukhade22@pccoepune.org</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                        <div className="bg-gray-200 p-4 rounded">
                            <p className="font-semibold">Name: Abhishek Gangurde</p>
                            <p>Email: abhishek.gangurde22@pccoepune.org</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                        <div className="bg-gray-200 p-4 rounded">
                            <p className="font-semibold">Name: Sriniwas Kulkurni</p>
                            <p>Email: storagedecentralized@gmail.com</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                        <div className="bg-gray-200 p-4 rounded">
                            <p className="font-semibold">Name: Prajyot kale</p>
                            <p>Email: prajyot.kale22@pccoepune.org</p>
                        </div>
                    </div>
                    <button className="bg-slate-900 rounded text-white"><a href='https://chtb-2syd.onrender.com/' >Chat with us</a></button>
                </div>
            </div>
            

            {/* <form action="submit_form.php" method="POST">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form> */}
        </div>
    );
}
