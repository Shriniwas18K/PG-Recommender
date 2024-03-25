import {useState} from 'react';
const ImageUploader = () => {
    const [selectedFiles, setSelectedFiles] = useState(null);
    const handleFileChange = (event:any) => {
        setSelectedFiles(event.target.files);
        console.log(selectedFiles[0]);
    };
    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
        </div>
    );
};

export default ImageUploader;