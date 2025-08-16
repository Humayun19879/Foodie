import { createContext, useState } from "react";
import { food_list } from '../pictures/assets';


const MyContext = createContext();

const MyContextProvider = ({ children }) => {
const [cart,Setcart]=useState({});
const[items,Setitems]=useState(0);


 const addToCart=(id)=>{
    if (!cart[id]) {
        Setcart((prev)=>({...prev,[id]:1}))
        Setitems((prev)=>prev+1);

        
    }
    else{
        Setcart((prev)=>({...prev,[id]:prev[id]+1}))
        Setitems((prev)=>prev+1);
 
    }

 }
 const removeFromCart=(id)=>{
   
        Setcart((prev)=>({...prev,[id]:prev[id]-1}))
        Setitems((prev)=>prev-1);
  


 }
const getTotal=()=>{
   let total=0;

   for (const item in cart) {
       total += food_list.find(food=>food._id===item).price * cart[item];
   }

        return total;
}

const context_values={
    cart,
    addToCart,
    removeFromCart,
    items,
    getTotal,
    
 
}

    return (
        <MyContext.Provider value={context_values}>
            {children}
        </MyContext.Provider>
    );

};
export { MyContext, MyContextProvider };
