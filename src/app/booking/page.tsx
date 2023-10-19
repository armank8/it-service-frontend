"use client";

import { useAppSelector } from "@/redux/hooks";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd"
import toast from "react-hot-toast"

const BookingPage = () => {

    const { bookings, total } = useAppSelector((state) => state.booking);
    console.log(bookings);

    const { role, id: userId } = getUserInfo() as any;


    const handlePayment=()=>{
        toast.success("Payment done");
    }
    return (
        <div style={{width:"70vw",margin:'20px auto'}}>
            <h1>Booking Page</h1>
                {
                    bookings.map((booking)=>
                    <div key={booking?.user}>
                            {/* <p>{booking.name}</p> */}
                    </div>
                    )
                }



            <Button onClick={()=>handlePayment()} type="primary">Make Payment</Button>
        </div>
    )
}

export default BookingPage