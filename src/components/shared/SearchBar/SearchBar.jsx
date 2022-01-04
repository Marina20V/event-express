import React from 'react';
import s from './SearchBar.module.scss';

export default function SearchBar() {
    return (
        <div className="header">
            <form>
                <div className={s.form_box}>
                <i className="fa fa-search"></i>
                    <input type="text" 
                           className={`${s.search_field} ${s.events_search}`} 
                           placeholder="Concert, Webinar, Conferences, etc." />
                           <i className="fa fa-search-location"></i>
                        <input type="text" 
                           className={`${s.search_field} ${s.location}`} 
                           placeholder="City" />
                            <button className={s.search_btn} type="button">Search</button>
                </div>
            </form>
            
        </div>
    )
}
