import React, {useState} from 'react'
import axios from 'axios';


const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choosse file');
    const [uploadedFile, setUploadedFile] = useState('');

    const onChange = e =>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
            const res = await axios.post('/uploads', formData);

        try{

            const {fileName,filePath} = res.data;

            setUploadedFile({fileName, filePath})
        }catch(err) {
            if(err.response.status === 500) {
                console.log('There was a problem with a server');
            } else {
                console.log(err.response.data.msg);
            }

        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="input-container">
                    <input type="file" classsName="custom-file" id="customFile" onChange={onChange} />
          <label className='custom-file-label' htmlFor='customFile'>
            {filename}
          </label>
        </div>
                <input 
                    type="submit"
                    value="Upload"
                    className="button_primary" 
                    // onSubmit={onSubmit}
                    />
            </form>
            {uploadedFile ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
        </>
    )
}

export default FileUpload;
