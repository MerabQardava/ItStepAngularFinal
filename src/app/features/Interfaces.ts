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
