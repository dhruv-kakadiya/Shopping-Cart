import React from 'react';

function Category({image, name}) {
    // let z = ".."
    return (
        <div className="category">
            
            <img src={`http://127.0.0.1:8000${image}`} className="image" alt={name}/>    
            <div className="overlay">
                <div className="text">{name}</div>
                <button className="btn">Shop Now</button>
            </div>
        </div>
    );
}

export default Category;
