import ViewCartItems from "@/components/ViewCartItems";
import { useEffect, useState } from "react";
const CartPage = () => {
    const [domLoaded,setDomLoaded] = useState(false)
    useEffect(()=>{
      setDomLoaded(true)
    },[])
  return domLoaded && <ViewCartItems/>
};

export default CartPage;
