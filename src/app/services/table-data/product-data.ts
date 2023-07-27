import { IProduct } from "src/app/model/product.model";

export const productData: IProduct[] = [
  {
    id: 1,
    value: 10,
    expenses: 5.5,
    profit: 110,
    expirationDate: new Date('08/15/2024')
  },
  {
    id: 2,
    value: 100,
    expenses: 20.81,
    profit: 150,
    expirationDate: new Date('07/31/2023')
  },
  {
    id: 3,
    value: 205,
    expenses: 2,
    profit: 90,
    expirationDate: new Date('11/29/2026')
  },
  {
    id: 4,
    value: 95,
    expenses: 50,
    profit: 200,
    expirationDate: new Date('03/15/2025')
  },
  {
    id: 5,
    value: 67.90,
    expenses: 4,
    profit: 98,
    expirationDate: new Date('01/01/2027')
  },
];
