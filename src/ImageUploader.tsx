import {useState} from 'react';
const ImageUploader = (props) => {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const handleFileChange = (event:any) => {
        setSelectedFiles(event.target.files);
    };

    const uploadImages = async (event:any) => {
        event.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
            formData.append('files', selectedFiles[i]);
        }    
        const response = await fetch(`https://smpg.onrender.com/uploadImage/`, {
                    method: 'POST',
                    body: formData
        });
        console.log(response.json());
    };    
    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={uploadImages}>Upload</button>
        </div>
    );
};

export default ImageUploader;

