import React from 'react';
import categories from '../data/categories.json';
// import '../styles.css';

const Categories = ({ selectedCategoryId = null, onSelectCategory = () => { } }) => {
    return (
        <nav className="sidebar">
            <h3 className="sidebar-title">Categories</h3>

            <ul className="category-list">
                {/* <li>
                    <button
                        type="button"
                        className={`category-btn ${selectedCategoryId === null ? 'active' : ''}`}
                        onClick={() => onSelectCategory(null)}
                    >
                        All
                    </button>
                </li> */}

                {categories.map((cat) => (
                    <li key={cat.id}>
                        <button
                            type="button"
                            className={`category-btn ${selectedCategoryId === cat.id ? 'active' : ''}`}
                            onClick={() => onSelectCategory(cat.id)}
                        >
                            {cat.name}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Categories;