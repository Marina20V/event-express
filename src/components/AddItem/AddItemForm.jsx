import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate}  from 'react-router-dom';
import constants from '../../constants/constants';
// import FileUpload from '../shared/FileUpload/FileUpload';
import s from './AddItem.module.scss';

export default function AddItemForm() {
    const navigate = useNavigate();
            /* eslint-disable no-unused-vars */ 

    const [title, setTitle] = useState("");
    const [fullDesc, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("");
    const [organizerId, setOrganizer] = useState("");
    const [subcatType, setType] = useState("");
    const [subcatEntry, setEntry] = useState("");
    const [website, setWebsite] = useState("");
    const [file, setFile] = useState(null);



    
    const saveProduct = async (e) => {   
        e.preventDefault();
        
        
    const formData = new FormData();
    formData.append('title', title)
    formData.append('fullDesc', fullDesc)
    formData.append('location', location)
    formData.append('date', date)
    formData.append('category', category)
    formData.append('organizerId', organizerId)
    formData.append('subcatType', subcatType)
    formData.append('subcatEntry', subcatEntry)
    formData.append('website', website)
    formData.append('file', file)

        await axios({
            method: 'post',
            url: `${constants.MAIN_API}/events`,
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
            });
        navigate(`/`);
    }
 
    return (
        <form onSubmit={saveProduct} className={s.createEventForm}>
          <h2>Create your event</h2>
            <input
              name="title"
              placeholder="title"
              type="text"
              id="title"
              onChange={(e=>setTitle(e.target.value))}
            />
            <input
              name="full_desc"
              placeholder="description"
              type="text"
              id="full_desc"
              onChange={(e=>setDescription(e.target.value))}
            />
            <input
              name="location"
              placeholder="location"
              type="text"
              id="location"
              onChange={(e=>setLocation(e.target.value))}
            />
             <input
              name="date"
              placeholder="date"
              type="text"
              id="date"
              onChange={(e=>setDate(e.target.value))}
            />
            <select className={s.modal_ol} placeholder="Category" onChange={(e=>setCategory(e.target.value))}>
             <option>ALL</option>
             <option>BUSINESS</option>
             <option>ART</option>
             <option>EDUCATION</option>
             <option>FESTIVAL</option>
             <option>FOOD</option>
             <option>NIGHTLIFE</option>
             <option>SPORTS</option>
             <option>IT\&TECHNOLOGIES</option>
            </select>

            {/* <FileUpload /> */}
            <input
              name="organizer name"
              placeholder="organizer name"
              type="text"
              id="organizer name"
              onChange={(e=>setOrganizer(e.target.value))}
            />
            <select className={s.modal_ol} onChange={(e=>setType(e.target.value))} placeholder="Type">
             <option>ONLINE</option>
             <option>OFFLINE</option>
            </select>
            <select className={s.modal_ol} placeholder="Entry" onChange={(e=>setEntry(e.target.value))}>
             <option>FREE</option>
             <option>PAID</option>
            </select>
            <input
              name="website"
              placeholder="Website"
              type="text"
              id="website"
              onChange={(e=>setWebsite(e.target.value))}
            />
                        <input
              name="file"
              placeholder="file"
              type="file"
              id="file"
              onChange={e=>setFile(e.target.files[0])}
            />
          <button type="submit" >Save event</button>
        </form>
    )
}
