import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
    return (
        <div className="header">
            <form>
                <div className="form-box">
                <i className="fa fa-search"></i>
                    <input type="text" 
                           className="search-field events-search" 
                           placeholder="Concert, Webinar, Conferences, etc." />
                           <i className="fa fa-search-location"></i>
                        <input type="text" 
                           className="search-field location" 
                           placeholder="City" />
                            <button className="search-btn" type="button">Search</button>
                </div>
            </form>
            
        </div>
    )
}
