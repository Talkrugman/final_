//show what is in the cart
import { useSelector } from "react-redux"

export default function Cart() {
    const { cart } = useSelector(state => state.cartInstance)

    const items = Object.entries(cart)
        .map(([productId, amount]) =>
            <CartItem key={productId} productId={productId} amount={amount} />)
    return <>
        <div>{items}</div>
    </>
}

function CartItem({ productId, amount }) {
    return <div className='cart-item'>
        <div className='cart-item-id'>id: {productId}</div>
        <div className='cart-item-amount'> amount: {amount}</div>
    </div>

}