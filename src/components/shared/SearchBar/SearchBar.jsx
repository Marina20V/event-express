import React, { useState, useEffect } from 'react';
import axios from 'axios';
import s from './SearchBar.module.scss';

export default function SearchBar() {
    const[filteredData, setFilteredData] = useState([]);
    const [events, setEvent] = useState([]);
    const [wordEntered, setWordEntered] = useState(['']);


 
    const getEvents = async () => {
        const response = await axios.get('http://localhost:5000/events');
        setEvent(response.data);
    }
 
    useEffect(() => {
        getEvents();
    }, []);
 

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord)
        const newFilter = events.filter((value) => {
            return value.title.includes(searchWord) 
        });
        setFilteredData(newFilter);
    }

    const clearInput = () => {
        setFilteredData([])
    }

    return (
        <>
        <div className="header">
            <form>
                <div className={s.form_box}>
                <i className="fa fa-search"></i>
                    <input type="text" 
                           className={`${s.search_field} ${s.events_search}`} 
                           placeholder="Webinars, Startup, Concert, etc." vaue={wordEntered}  onChange={handleFilter}/>
                           <i className="fa fa-search-location"></i>
                        <input type="text" 
                           className={`${s.search_field} ${s.location}`} 
                           placeholder="(City" />
                                       {filteredData.length === 0 ?(
                        <button className={s.search_btn} type="button">Search</button>

                    ) : (<button className={s.clearSearch_btn} onClick={clearInput} type="button">Search</button>)
                    }
                </div>
            </form>
            {filteredData.length !==0 &&(
            <div className={s.dataResult}>
                {events.map((value) => {
                    return (
                        <div className={s.dataResult} key={value.id}>
                            {value.title}
                            </div>
                    )
                })}
            </div>

            )}
            
        </div>
        </>
    )
}
