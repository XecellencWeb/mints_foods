import { ProductType } from "@/components/Products";
import { CartItemType } from "@/components/ViewCartItems";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const CartContext = createContext({});

const Cart = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any>(() => {
    if (typeof window !== "undefined") {
      const json = localStorage.getItem("mint_foods");
      return JSON.parse(json || "{}") || {};
    }
    return {};
  });
  const [totalPrice,setTotalPrice] = useState(0)
  useEffect(() => {
    console.log(cart);
    localStorage.setItem("mint_foods", JSON.stringify(cart));
    setTotalPrice(  Object.values(cart).filter(a=>a).reduce((a:number,b:any)=>a+=(b.number*b.price),0))
  }, [cart]);

  const addToCart = (item: ProductType) => {
    console.log(item._id);
    if (cart[item._id]) {
       return setCart((prev: any) => ({
        ...prev,
        [item._id]: { ...prev[item._id], number: prev[item._id].number++ },
      }));
    } 
      setCart((prev: any) => ({
        ...prev,
        [item._id]: {
          _id: item._id,
          name: item.name,
          image: item.image,
          price: item.price,
          number: 1,
        },
      }));

    alert('Item added to cart')
  };

  const removeFromCart = (id: string | number) => {
    setCart((prev: any) => ({
      ...prev,
      [id]:
        prev[id].number === 0
          ? undefined
          : {
              ...prev[id],
              number: prev[id].number--,
            },
    }));
  };

  const clearCart = () => setCart({});


  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart,totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
export default Cart;
