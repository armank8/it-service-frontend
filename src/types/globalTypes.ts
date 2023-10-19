export interface IService{
    _id:string;
    id:number,
    name:string;    
    image:string;
    price:number;
    category:string,
    description:string;
    reviews?:string[];
}

export interface IBooking{
    _id?:string;
    
    user:string;    
    services:{
        serviceId:string;
        date:string;
        slot:string;
    }[]
}