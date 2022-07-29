export interface Item{
  id: number
  name: string;
  price:number;
  price_reduced: string;
  rating: number|string;
  topseller:boolean;
  new: boolean;
  brand: string;
  image: string;
  sales_figures: number;
}
