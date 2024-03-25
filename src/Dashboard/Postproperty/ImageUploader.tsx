// import {useState} from 'react'
const ImageUploader = ({token}:{token:string}) => {
    // const [selectedFiles, setSelectedFiles] = useState(null);
    // const handleFileChange = (event:any) => {
        // setSelectedFiles(event.target.files);
        // console.log(selectedFiles[0]);
    // };
    // console.log(token);
    return (
        <div>
            {/* <input type="file" multiple onChange={handleFileChange} /> */}
            <input type='file' multiple/>
        </div>
    );
};

export default ImageUploader;