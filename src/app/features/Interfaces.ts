export interface product{
  brand:string,
  category: {
    name: string
  },
  description:string,
  images:string[],
  issueDate:Date,
  price:{
    beforeDiscount:number,
    current:number,
    discountPercentage:number
  }
  rating:number,
  stock:number,
  thumbnail:string,
  title:string,
  warranty:number,
  _id:string

}

export interface pageData{
  page:number,
  products:product[],
  total:number
}

export interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  address: string;
  role: string;
  zipcode: string;
  avatar: string;
  gender: string;
  phone: string;
  verified: boolean;
  iat: number;
  exp: number;
}



// CART

export interface Cart {
  total: CartTotal;
  _id: string;
  userId: string;
  createdAt: string;
  products: CartProduct[];
}

export interface CartTotal {
  price: CartPrice;
  quantity: number;
  products: number;
}

export interface CartPrice {
  current: number;
  beforeDiscount: number;
}

export interface CartProduct {
  quantity: number;
  pricePerQuantity: number;
  beforeDiscountPrice: number;
  productId: string;
}

