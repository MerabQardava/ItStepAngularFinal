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
    discount:number
  }
  stock:number,
  thumbnail:string,
  title:string,
  warranty:number,
  id:string

}
