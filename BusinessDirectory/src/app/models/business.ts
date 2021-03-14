import { Address } from "./address";

export interface Business {
    address: Address;
    description: string;
    email: string;
    id: string;
    image: string;
    name: string;
    phone: string;
}