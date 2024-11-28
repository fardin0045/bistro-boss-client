
import FootCarD from '../../../components/FoodCard/FootCarD';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 gap-8'>
        {
             items.map(item =><FootCarD key={item._id}
             item={item}></FootCarD>)
         }
        </div>
    );
};

export default OrderTab;