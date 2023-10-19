export interface IService {
    _id: string;
    id: number,
    name: string;
    image: string;
    price: number;
    category: string,
    description: string;
    reviews?: string[];
}

export interface IBooking {
    _id?: string;
    userId?: string;
    serviceId: string;
    name: string;

    category: string;
    image: string;
    price: string;
    date: string;
    slot: string;
};

export interface Response {
    data?: any;
    error?: any;
}