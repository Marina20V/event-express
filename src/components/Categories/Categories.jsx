import React, {useState, useEffect} from 'react';
import axios from 'axios';
import s from './Categories.module.css'
import constants from '../../constants/constants';

 function Categories() {


    const [categories, setCategory] = useState([]);
 
    const getCategories = async () => {
        const response = await axios.get(`${constants.MAIN_API}/categories`);
        setCategory(response.data);
    }
 
    useEffect(() => {
        getCategories();
    }, []);
 
    return (
        <div className={s.categories_list}>
        <ul className={s.ul_categories_list}>
        { categories.map((category) => (
            <button type="submit" className={s.category} key={category.cat_id}>{category.cat_name}
            </button>
            ))}
        </ul>
        </div>
    )
}


export default Categories;
