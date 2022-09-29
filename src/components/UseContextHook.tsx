import { createContext, useContext } from "react"

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Cart {
  products: Product[]
  shipping_value?: number;
}

const CartContext  = createContext<Cart>({
  products: [],
  shipping_value: 0,
});

export function UseContextHook(){
  const { products } = useContext(CartContext)
  return(
    <div>
      Hi, i am useContextHook
      <ul>
        {products?.map(product => product.id)}
      </ul>
    </div>
  )
}