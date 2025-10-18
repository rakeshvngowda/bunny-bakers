import "./styles/Categories.scss";

const Categories = ({categories, setSelectedCategoryId}) => {
    return ( 
        <div className="categories-navbar">
            <h2>Categories</h2>
            <div className='categories-container'>
                {categories.map((cat)=> (
                    <button key={cat.id} className='categories-items' onClick={()=>setSelectedCategoryId(cat.id)}>{cat.name}</button>
                ))}
            </div>
        </div>
     );
}
 
export default Categories;