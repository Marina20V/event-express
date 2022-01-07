import React, {useState, useEffect} from 'react';
import axios from 'axios';
import s from './Categories.module.css'

 function Categories() {


    const [categories, setCategory] = useState([]);
 
    const getCategories = async () => {
        const response = await axios.get('http://localhost:5000/categories');
        setCategory(response.data);
    }
 
    useEffect(() => {
        getCategories();
    }, []);
 
    return (
        <div className={s.categories_list}>
        <ul className={s.ul_categories_list}>
        { categories.map((category) => (
            <li className={s.category} key={category.cat_id}>{category.cat_name}</li>
            ))}
        </ul>
        </div>
    )
}


export default Categories;
