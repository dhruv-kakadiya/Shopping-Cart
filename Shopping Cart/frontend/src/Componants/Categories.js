import React, {useState, useEffect} from 'react';
// import categoryData from '../Data/categories';
import Category from './Category';
import axios from 'axios';

function Categories() {
    const [categories, setCategories] = useState([]);

    const fetchCategories = () => {
        axios.get("http://127.0.0.1:8000/api/get-categories/")
        .then((res) => {
            let data = res.data;
            setCategories(data);
        })
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <section id="categories">
			<div className="title">Categories</div>
			<div className="container">
                {
                    categories.map((category) => {
                        return ( 
                            <Category key={category.id} {...category}/>
                        )
                    })
                }
			</div>
		</section>
    )
}

export default Categories;
