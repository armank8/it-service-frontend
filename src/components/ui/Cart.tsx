import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromCart } from "@/redux/slices/services/serviceSlice";
import { IService } from "@/types/globalTypes";
import CartCard from "./CartCard";

const ServicesCart = () => {
    const { services: cartServices, total } = useAppSelector((state) => state.service);
    const dispatch = useAppDispatch();
    console.log(cartServices);

    const handleRemoveFromCart = (service: IService) => {
        dispatch(removeFromCart(service));
    }
    return (
        <div>
            {
                cartServices.map((cart) =>
                    <CartCard key={cart._id} cart={cart}></CartCard>
                )
            }
        </div>
    )
}

export default ServicesCart