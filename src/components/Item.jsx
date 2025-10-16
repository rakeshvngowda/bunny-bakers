const Item = ({item}) => {
    return ( 
        <div className="item">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
        </div>
     );
}
 
export default Item;