import { brand } from "../../../../generated/prisma";



export  interface IBike{
brand: brand
model: string;
year: number;
customerId: string;
}
