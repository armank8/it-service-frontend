import { useAppDispatch } from '@/redux/hooks';
import { removeFromCart } from '@/redux/slices/services/serviceSlice';
import { IService } from '@/types/globalTypes';
import { Button } from 'antd';
import React from 'react'

const CartCard = ({ cart }: { cart: IService }) => {
    const dispatch = useAppDispatch();
    // console.log(services);

    const handleRemoveFromCart = (service: IService) => {
        dispatch(removeFromCart(service));
    }
    return (
        <div style={{ color: 'white', border: '1px solid white', padding: "5px", marginTop: '10px' }}>
            <p>Service Name : <span style={{ fontWeight: 'bold' }}> {cart.name}</span> </p>
            <p>Service Price : <span style={{ fontWeight: 'bold' }}> {cart.price}</span> </p>
            <p>Service category : <span style={{ fontWeight: 'bold' }}> {cart.category}</span> </p>
            <Button onClick={() => handleRemoveFromCart(cart)} className="text-red-300 px-2">
                Remove From cart
            </Button>
        </div>
    )
}

export default CartCard;