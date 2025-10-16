import items from '../data/items.json';
import Item from './Item';

const Items = () => {
    return ( 
        <ul>
            {items.map((item)=> (
                <Item item={item} key={item.id} />
            ))}
        </ul>
     );
}
 
export default Items;