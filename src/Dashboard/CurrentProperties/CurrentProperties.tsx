export default function CurrentProperties({ token, phone, username }: { token: string, phone: string, username: string }){
    // console.log(token,phone,username);
    // const [Properties,setProperties]=useState(undefined);
    // async function getProperties() {
/*        const res=await fetch(
            `https://smpg.onrender.com/getUserProperties/?token=${encodeURIComponent(token)}/`,
            {
                method:'GET',
                mode:'cors',
                body:JSON.stringify({
                    "username":username,
                    "phone":phone
                })
            }
        );
    }
    console.log(res.json());
    */
    const products=[
        ['dharmraj nagar,akurdi','./img1.jpg'],
        ['sector 26,akurdi,pune','./img2.jpg'],
        ['sector 27,pimpri-chinchwad','./img3.jpg']
    ]
   const content=products.map((item,inasd)=>(
    <div className="bg-slate-100 text-l font-thin mb-4 px-4 mx-5 rounded-xl py-2" key={inasd}>
        <p>{item[0]}</p>
        <img src={item[1]} className="w-72 py-7 "/>
    </div>
   ));
    return(<>
        <div className="flex flex-wrap justify-center  bg-inherit h-fit w-fit py-20">
            <h1 className="text-center py-2 text-xl">Currently listed</h1>
            {content}
        </div>
    </>)
}