// cart whit option to change amount for the user
import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/cartSlice';
import { useSelector } from 'react-redux'

const products = [
    { id: '1', name: 'home made rainbow cake - gloten free', price: 99 },
    { id: '2', name: 'home made circle cake - gloten free', price: 99 },
    { id: '3', name: 'home made english cake - gloten free', price: 99 }
]
export default function Catalog() { 
    <h1>Catalog</h1>
    
    const { cart } = useSelector((state) => state.cart);

    const cards = products.map(p => <ProductCard key={p.id} product={p} cartAmount={cart[p.id]} />)

    return (
        <div className='catalog'>
            {cards}
        </div>
    )
}

function ProductCard({ cartAmount, product: { id, name, price } }) {
    const dispatch = useDispatch();

    function handleInputChange({ target: { value } }) {
        dispatch(addProduct({ productId: id, amount: value }))
    }

    return <div className='product-cart'>
        <div>{id}</div>
        <div>{name}</div>
        <div>{price}</div>
        <div>
            <input type="number" value={cartAmount || 0}
                onChange={handleInputChange} />
        </div>
    </div>
}