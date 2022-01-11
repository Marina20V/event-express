import React, { useState } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import s from './SearchBar.module.scss';
import {search} from '../../../redux/actions/index'

const SearchBar = () => {

    const onChange = e => {
        search(e.target.value)
    }

    /* eslint-enable no-unused-vars */


    const mapStateToProps = state => {
        return {
            text: state.search.text
        }
    }
/* eslint-enable no-unused-vars */

    const mapDispatchToProps = dispatch => {
        return {
        onSearchChange: (event) => dispatch(search(event.target.value))
        }
    }
    
    return (
        <div className="header">
            <form>
                <div className={s.form_box}>
                <i className="fa fa-search"></i>
                    <input type="text" 
                           className={`${s.search_field} ${s.events_search}`} 
                           placeholder="Concert, Webinar, Conferences, etc."  onChange={onChange}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(search)(SearchBar);
    
    

// import React from 'react';
// import {connect} from 'react-redux';
// import s from './SearchBar.module.scss';
// import {search} from '../../../redux/actions/index'

// const SearchBar = () => {

//     const onChange = e => {
//         search(e.target.value)
//     }


    
    // return (
    //     <div className="header">
    //         <form>
    //             <div className={s.form_box}>
    //             <i className="fa fa-search"></i>
    //                 <input type="text" 
    //                        className={`${s.search_field} ${s.events_search}`} 
    //                        placeholder="Concert, Webinar, Conferences, etc."  onChange={onChange}/>
    //                        <i className="fa fa-search-location"></i>
    //                     <input type="text" 
    //                        className={`${s.search_field} ${s.location}`} 
    //                        placeholder="City" />
    //                         <button className={s.search_btn} type="button">Search</button>
    //             </div>
    //         </form>
            
    //     </div>
    // )

// }
// export default connect(mapStateToProps, mapDispatchToProps)(search)(SearchBar);
    
    
