import { useDispatch } from 'react-redux';
import { addProduct } from '../slices/cartSlice';
import { useSelector } from 'react-redux'

const products = [
    { id: '1', name: 'milk', price: 10 },
    { id: '2', name: 'bread', price: 20 },
    { id: '3', name: 'eggs', price: 30 }
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