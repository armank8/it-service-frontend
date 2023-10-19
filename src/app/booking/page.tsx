"use client";

import { Button } from "antd"
import toast from "react-hot-toast"

const BookingPage = () => {


    const handlePayment=()=>{
        toast.success("Payment done");
    }
    return (
        <div style={{width:"70vw",margin:'20px auto'}}>
            <h1>Booking Page</h1>


            <Button onClick={()=>handlePayment()} type="primary">Make Payment</Button>
        </div>
    )
}

export default BookingPage