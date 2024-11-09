export interface ProductType {
  _id: string
  name: string
  imgUrl: string
  description: string
  tags?: string[]
}

export interface ProductProp {
  product: ProductType
}

export interface ProductDetails extends ProductType {
  productPhotos: string[]
  details: {
    caption: string
    benefits: string[]
    product_details: string[]
    story: string
  }
}
